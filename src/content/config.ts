import { defineCollection, z } from 'astro:content';

const authorSchema = z.union([
  z.string(),
  z.object({
    name: z.string(),
    bold: z.boolean().optional().default(false),
    corresponding: z.boolean().optional().default(false)
  })
]);

const papers = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(authorSchema),
    venue: z.string(),
    venueType: z.string(),
    venueLevel: z.string(),
    acceptedDate: z.string(),
    publishedOnline: z.string().optional(),
    publicationDate: z.string().regex(/^\d{4}(?:-\d{2}){0,2}$/).optional(),
    volume: z.string().optional(),
    issue: z.string().optional(),
    pages: z.string().optional(),
    articleNumber: z.string().optional(),
    doi: z.string().optional(),
    fieldTags: z.array(z.string()),
    levelTags: z.array(z.string()),
    image: z.string(),
    paperUrl: z.string().optional().default(''),
    pdfUrl: z.string().url().optional(),
    pdfAccess: z.enum(['open', 'subscription']).optional(),
    bibtexUrl: z.union([
      z.string().url(),
      z.string().regex(/^\/bibtex\/[a-z0-9-]+\.bib$/)
    ]).optional(),
    paperStatus: z.enum(['available', 'comingSoon']).optional().default('available'),
    summary: z.string(),
    abstract: z.string()
  })
});

export const collections = {
  papers
};
