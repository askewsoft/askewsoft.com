import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
	portfolio: defineCollection({
		// Load Markdown files in the src/content/portfolio directory.
		loader: glob({ base: './src/content/portfolio', pattern: '**/*.md', }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			detailAvailable: z.boolean(),
			repo: z.string().optional(),
			label: z.enum(['published', 'beta', 'vaporware']),
			age: z.enum(['newish', 'old', 'future']),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			imgAlt: z.string().optional(),
			imgDetail: z.string().optional(),
			imgDetailScale: z.number().optional(),
			screenshots: z.array(z.object({
				img: z.string(),
				imgAlt: z.string().optional(),
				imgScale: z.number().optional(),
			})).optional(),
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
			imgAlt: z.string().optional(),
			url: z.string().optional(),
		}),
	}),
};
