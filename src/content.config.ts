import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    description: z.string(),
    category: z.string(),
    readingMinutes: z.number().int().positive(),
    cover: z.object({
      image: z.string(),
      thumbnail: z.string(),
      alt: z.string(),
      width: z.number().int().positive(),
      height: z.number().int().positive(),
    }),
    sectionLabels: z.record(z.string(), z.string()).default({}),
    featuredTopics: z.array(z.object({
      section: z.string(),
      description: z.string(),
    })).default([]),
  }),
});

export const collections = { posts };
