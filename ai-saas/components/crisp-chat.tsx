"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("01ed44ee-6bc8-4e50-8b02-96e7ab827675");
  }, []);

  return null;
};
