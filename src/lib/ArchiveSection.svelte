<script>
import { page } from '$app/state';
import { base } from '$app/paths';
import Button from '$lib/Button.svelte';

let { limit = 5, posts = page.data.posts.slice(0, limit || Infinity), header } = $props();
</script>

<section class="py-8">
  <nav class="px-4 py-4 md:px-8">
    <ul class="text-metadata flex flex-row items-center gap-6">
      {#each posts as item (item.id)}
        {#if item.title === 'Nordic Permaculture Festival 2025'}
          <li>
            <Button inverted={true} primary={false} href={`${base}/`}>Information</Button>
          </li>
        {:else}
          <li>
            <Button inverted={true} href={`${base}/${item.id}`}>{item.title}</Button>
          </li>
        {/if}
      {/each}
    </ul>
  </nav>
</section>
