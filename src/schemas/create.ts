import { z } from 'zod'

export const CreateLinkSchema = z.object({
  title: z.string(),
  url: z.string().url(),
  description: z.string().optional(),
  showImage: z.boolean().optional(),
})

export type CreateLink = z.infer<typeof CreateLinkSchema>
