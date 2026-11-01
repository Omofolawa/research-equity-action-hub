import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const findings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/findings' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    summary: z.string(),
    whyItMatters: z.string(),
  }),
});

const recommendations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recommendations' }),
  schema: z.object({
    title: z.string(),
    number: z.number(),
    recommendation: z.string(),
    whyItMatters: z.string(),
    whatCanBeDone: z.array(z.string()).default([]),
    whoShouldAct: z.array(z.string()).default([]),
    relatedFindings: z.array(z.string()).default([]),
  }),
});

const audiences = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/audiences' }),
  schema: z.object({
    role: z.string(),
    order: z.number(),
    intro: z.string(),
    actions: z.array(z.string()).default([]),
    relatedRecommendations: z.array(z.string()).default([]),
  }),
});

export const collections = { findings, recommendations, audiences };

