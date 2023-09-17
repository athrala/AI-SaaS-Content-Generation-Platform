import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";

import { checkSubscription } from "@/lib/subscription";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse(
        "Free trial has expired. Please upgrade to pro.",
        { status: 403 }
      );
    }

    const response = await replicate.run(
      "cjwbw/videocrafter:3a7e6cdc3f95192092fa47346a73c28d1373d1499f3b62cdea25efe355823afb",
      {
        input: {
          prompt,
        },
      }
    );

    if (!isPro) {
      await incrementApiLimit();
    }

    return NextResponse.json(response);
  } catch (error) {
    console.log("[VIDEO_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
