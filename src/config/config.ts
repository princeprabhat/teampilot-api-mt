import { z } from "zod";
import dotenv from "dotenv";
import httpStatus from "http-status";
import ApiError from "../utils/ApiError.js";

dotenv.config();

const envSchema = z.object({
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
    PORT: z.coerce.number().positive().default(3000), // Better type handling for PORT
    DATABASE_URL: z.string().url(),
    JWT_SECRET: z.string().min(32), // Add minimum length for security
    JWT_EXPIRES_IN: z.string().default('1d'), // Add JWT expiration
    // Add more environment variables as needed
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
    throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        `Invalid environment variables: ${JSON.stringify(parsedEnv.error.format())}`
    );
}

const config = {
    nodeEnv: parsedEnv.data.NODE_ENV,
    port: parsedEnv.data.PORT, // No need for Number() conversion as we use coerce
    databaseUrl: parsedEnv.data.DATABASE_URL,
    jwtSecret: parsedEnv.data.JWT_SECRET,
    jwtExpiresIn: parsedEnv.data.JWT_EXPIRES_IN,
    // Add more config values as needed
    
};

export default config;