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
      // Log the error details for debugging
      console.log(`Path: ${path}, Referrer: ${referrer}, Message: ${message}`);
      
      // Specifically handle the root path error that doesn't begin with 'base'
      if (message.includes('404 / does not begin with `base`')) {
        return 'ignore'; // Simply ignore this error
      }
      
      // Handle other common static asset errors
      const commonStaticAssets = ['/favicon.svg', '/favicon.png', '/favicon.ico'];
      if (commonStaticAssets.some(asset => message.includes(`404 ${asset} does not begin with`))) {
        return 'ignore';
      }
      
      // For any other errors related to paths.base
      if (message.includes('does not begin with `base`')) {
        // Return 'warn' to continue the build but show the warning
        return 'warn';
      }
      
      // For any other HTTP errors, fail the build (default behavior)
      return 'fail';
    }
  }
};

export default config;
