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

const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // This handles both string dates and YAML date objects perfectly
    date: z.union([z.string(), z.date()]).transform((val) => new Date(val)),
    category: z.string().transform(val => val.toLowerCase()), 
    link: z.string().url().optional(),
    file: z.string().optional(),
  }),
});

const impact = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/impact' }),
  schema: z.object({
    title: z.string(),
    organisation: z.string(),
    date: z.union([z.string(), z.date()]).transform((val) => new Date(val)),
    description: z.string(),
    relatedRecommendation: z.string().optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    startDate: z.union([z.string(), z.date()]).transform((val) => new Date(val)),
    location: z.string().optional(),
    description: z.string(),
    upcoming: z.boolean().default(true),
  }),
});

const updates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/updates' }),
  schema: z.object({
    title: z.string(),
    date: z.union([z.string(), z.date()]).transform((val) => new Date(val)),
    summary: z.string(),
  }),
});

export const collections = { findings, recommendations, audiences, resources, impact, events, updates };