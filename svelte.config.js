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
  prerender: {
    handleHttpError: ({ path, referrer, message }) => {
      console.log(`Path: ${path}, Referrer: ${referrer}, Message: ${message}`);

      if (message.includes('404 / does not begin with `base`')) {
        return 'ignore';
      }

      if (message.includes('does not begin with `base`')) {
        return 'warn';
      }

      return 'fail';
    }
  }
};

export default config;
