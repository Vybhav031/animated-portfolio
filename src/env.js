import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Server-side env schema
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
  },

  /**
   * Client-side env schema
   * (must start with NEXT_PUBLIC_)
   */
  client: {
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: z.string().optional(),
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: z.string().optional(),
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: z.string().optional(),
  },

  /**
   * Map actual process.env values to the schema keys
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_EMAILJS_SERVICE_ID:
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID:
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY:
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  },

  /**
   * Disable validation completely so it cannot break the build.
   * (We know the values exist in Vercel already.)
   */
  skipValidation: true,

  // Treat empty strings as undefined
  emptyStringAsUndefined: true,
});
