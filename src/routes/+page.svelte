<script>
import config from '/src/config';
import SEO from '$lib/SEO.svelte';
import PostSection from '$lib/PostSection.svelte';
import MenuNav from '$lib/MenuNav.svelte';

let { data } = $props();
</script>

<SEO
  title={`${config.siteTitle} — ${config.siteTagline}`}
  description={data.post.description}
  og={{ title: config.siteTagline }}
/>

<MenuNav />

<PostSection post={data.post} />
