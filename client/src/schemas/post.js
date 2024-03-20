import { z } from 'zod'

export const postSchema = z.object({
  title: z
    .string()
    .min(3, { message: 'Title must be at least 3 characters long' })
    .refine(value => value.trim().length >= 3, { message: "You can't leave an empty title" }),
  content: z
    .string()
    .min(3, { message: 'Content must be at least 3 characters long' })
    .refine(value => value.trim().length >= 3, { message: "You can't leave an empty content" }),
  coverImage: z
    .optional()

})

export const createCommentSchema = z.object({
  comment: z.string({
    required_error: 'Text is required'
  }).min(3, { message: 'Text must be at least 3 characters' })
    .refine(value => value.trim().length >= 3, { message: "You can't leave an empty comment" })
})
