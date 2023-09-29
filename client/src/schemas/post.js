import { z } from 'zod'

export const postSchema = z.object({
  title: z
    .string()
    .min(3, { message: 'Title must be at least 3 characters long' })
    .refine(value => value.trim().length >= 3, { message: 'Title is required' }),
  content: z
    .string()
    .min(3, { message: 'Content must be at least 3 characters long' })
    .refine(value => value.trim().length >= 3, { message: 'Content is required' })
})
