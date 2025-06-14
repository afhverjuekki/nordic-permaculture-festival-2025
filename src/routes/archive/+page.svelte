<script>
import config from '/src/config';
import SEO from '$lib/SEO.svelte';
import MenuNav from '$lib/MenuNav.svelte';
</script>

<SEO
  title={`${config.siteTitle} ${config.archiveTitle}`}
  description={config.siteTagline}
  og={{ title: config.archiveTitle }}
/>

<MenuNav limit={false} />
