// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

/**
 * A font file from the @fontsource packages in node_modules, so a build needs no network.
 * Only the Latin files are used.
 * @param {string} family
 * @param {string} face
 */
const plex = (family, face) => `@fontsource/${family}/files/${family}-latin-${face}.woff2`;

// https://astro.build/config
export default defineConfig({
	// GitHub Pages serves the BrandoApe.github.io repo at the domain root, so no `base` is set.
	site: 'https://brandoape.github.io',
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'IBM Plex Sans',
			cssVariable: '--font-sans',
			fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
			options: {
				variants: [
					{ weight: 400, style: 'normal', src: [plex('ibm-plex-sans', '400-normal')] },
					{ weight: 400, style: 'italic', src: [plex('ibm-plex-sans', '400-italic')] },
					{ weight: 600, style: 'normal', src: [plex('ibm-plex-sans', '600-normal')] },
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: 'IBM Plex Mono',
			cssVariable: '--font-mono',
			fallbacks: ['ui-monospace', 'monospace'],
			options: {
				variants: [{ weight: 400, style: 'normal', src: [plex('ibm-plex-mono', '400-normal')] }],
			},
		},
	],
	markdown: {
		shikiConfig: {
			// Code colors come from the --astro-code-* variables in src/styles/global.css.
			theme: 'css-variables',
		},
	},
});
