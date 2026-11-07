// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// GitHub Pages serves the BrandoApe.github.io repo at the domain root, so no `base` is set.
	site: 'https://brandoape.github.io',
	markdown: {
		shikiConfig: {
			themes: { light: 'github-light', dark: 'github-dark' },
		},
	},
});
