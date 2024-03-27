import { z } from "zod";

export const issueSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(255, "Description should be less than 255 characters"),
  description: z.string().min(1, "Description is required"),
});
