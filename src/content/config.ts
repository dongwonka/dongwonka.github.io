import { defineCollection, z } from 'astro:content';

const papers = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    venueType: z.string(),
    venueLevel: z.string(),
    acceptedDate: z.string(),
    fieldTags: z.array(z.string()),
    levelTags: z.array(z.string()),
    image: z.string(),
    paperUrl: z.string().optional().default(''),
    summary: z.string(),
    abstract: z.string()
  })
});

export const collections = {
  papers
};
