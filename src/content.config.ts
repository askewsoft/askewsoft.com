import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
	portfolio: defineCollection({
		// Load Markdown files in the src/content/portfolio directory.
		loader: glob({ base: './src/content/portfolio', pattern: '**/*.md', }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
	profiles: defineCollection({
		// Load Markdown files in the src/content/portfolio directory.
		loader: glob({ base: './src/content/profiles', pattern: '**/*.md', }),
		schema: z.object({
			name: z.string(),
			bio: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()).optional(),
			img: z.string(),
			img_alt: z.string().optional(),
			liurl: z.string().optional(),
		}),
	}),
};
