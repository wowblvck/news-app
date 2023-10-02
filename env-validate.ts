import z from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z.string().url(),
  NEXT_PUBLIC_CRYPTO_COMPARE_URL: z.string().url(),
  NEXT_PUBLIC_CRYPTO_COMPARE_API_KEY: z.string(),
});

export const envClientSchema = envSchema.parse(process.env);

export type EnvSchemaType = z.infer<typeof envSchema>;
