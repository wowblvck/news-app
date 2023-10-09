import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_BASE_URL: z.string().url(),
    NEXT_PUBLIC_CRYPTO_COMPARE_URL: z.string().url(),
    NEXT_PUBLIC_CRYPTO_COMPARE_API_KEY: z.string(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_CRYPTO_COMPARE_URL: process.env.NEXT_PUBLIC_CRYPTO_COMPARE_URL,
    NEXT_PUBLIC_CRYPTO_COMPARE_API_KEY: process.env.NEXT_PUBLIC_CRYPTO_COMPARE_API_KEY,
  }
});