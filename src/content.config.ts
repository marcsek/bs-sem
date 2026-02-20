import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const journals = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/journals" }),
	schema: z.object({
		title: z.string(),
		date: z.date(),
	}),
});

export const collections = { journals };
