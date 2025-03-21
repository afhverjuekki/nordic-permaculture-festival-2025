import { loadPages, loadPosts } from '$lib/content';

export const prerender = true;

export async function load({ url }) {
  return {
    host: url.host,
    posts: loadPosts(),
    pages: loadPages(),
  };
}
