<script>
import { page } from '$app/state';
import { base } from '$app/paths';
import Button from '$lib/Button.svelte';

/**
 * @typedef {{ id: string, title: string }} Post
 */

let {
  limit = 10,
  posts = /** @type {Post[]} */ (page.data.posts.slice(0, limit || Infinity)),
  header,
} = $props();
let order = [
  'Nordic Permaculture Festival 2025',
  'Tickets',
  'Apply',
  'Travel',
  'Accommodation',
  'Contact',
];

let orderedPosts = order
  .map((title) => posts.find(/** @param {Post} item */ (item) => item.title === title))
  .filter(Boolean);
</script>

<section class="py-8">
  <nav class="px-4 py-4 md:px-8">
    <ul class="text-metadata flex flex-row flex-wrap items-center justify-center gap-4 md:gap-6">
      {#each orderedPosts as item (item.id)}
        <!-- @ts-ignore: item implicitly has an 'any' type -->
        <li class="menu-nav-link">
          {#if item.title === 'Nordic Permaculture Festival 2025'}
            <a href={`${base}/`}>Information</a>
          {:else}
            <a href={`${base}/${item.id}`}>{item.title}</a>
          {/if}
        </li>
      {/each}
    </ul>
  </nav>
</section>

<style>
.menu-nav-link {
  color: var(--polynesian-blue);
  background-color: var(--cosmic-latte);
  border: 1px solid var(--polynesian-blue);
  border-radius: 20px;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  &:hover {
    background-color: var(--polynesian-blue);
    color: var(--cosmic-latte);
  }
}
</style>
