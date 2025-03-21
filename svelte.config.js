import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md', '.svx'],
  kit: {
    adapter: adapter(),
    paths: {
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
    },
  },
  preprocess: [
    mdsvex({
      extensions: ['.md', '.svx'],
    }),
  ],
};

export default config;
