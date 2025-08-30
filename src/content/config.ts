import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    image: z.string().optional(),
    // если в старых постах встречается строка, временно разреши union:
    categories: z.union([z.array(z.string()), z.string()]).optional(),
  }),
});

export const collections = { blog };
