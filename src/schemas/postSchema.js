import { z } from 'zod';

export const createPostSchema = z.object({
  title: z.string({
    required_error: 'Title is required',
  }).min(3),
  content: z.string({
    required_error: 'Content is required',
  }).min(3),
  tags: z.array(
    z.string({
      required_error: 'Tag is required',
    })
  ),
})