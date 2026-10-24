import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  // Указываем загрузчик (где искать файлы)
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    task: z.string(),
    solution: z.string(),
    result: z.string(),
    stack: z.array(z.string()),
    github: z.string().url().optional(),
    order: z.number(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};