// src/validations/user.validation.ts
import { z } from "zod";

// ✅ Reusable Schemas
export const userIdParamSchema = z.object({
  userId: z.string().regex(/^\d+$/, "userId must be a number"),
});

export const createUserBodySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50).optional(),
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password is too long"),
  avatar_url: z.string().url("Invalid avatar URL").optional(),
  theme: z.enum(["dark", "light"]).optional(),
});

export const updateUserBodySchema = z.object({
  name: z.string().min(2).max(50).optional(),
  email: z.string().email("Invalid email").optional(),
  password: z.string().min(8).max(128).optional(),
  avatar_url: z.string().url("Invalid avatar URL").optional(),
  theme: z.enum(["dark", "light"]).optional(),
});

// ✅ Combine Schemas for middleware
export const getUserSchema = z.object({
  params: userIdParamSchema,
});

export const deleteUserSchema = z.object({
  params: userIdParamSchema,
});

export const createUserSchema = z.object({
  body: createUserBodySchema,
});

export const updateUserSchema = z.object({
  params: userIdParamSchema,
  body: updateUserBodySchema,
});
