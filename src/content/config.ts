import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    image: z.string().optional(),
    categories: z.union([z.array(z.string()), z.string()]).optional(),
  }),
});

const works = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    img: z.string().optional(),
    stack: z.string().optional(),
    github: z.string().optional(),
    demo: z.string().optional(),
  }),
});

export const collections = { blog, works };
