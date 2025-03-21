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
      // During prerendering, ignore 404 errors for paths that don't include the base path
      if (message.includes('404') && path === '/') {
        return;
      }
      
      // For any other errors, throw and fail the build
      throw new Error(`${message} (${path}${referrer ? ` - referrer: ${referrer}` : ''})`);
    }
  }
};

export default config;
