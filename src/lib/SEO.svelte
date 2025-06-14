<script>
import { page } from '$app/state';
import { Base64 } from 'js-base64';
import config from '/src/config';
import { base } from '$app/paths';

let { title, description, og = undefined } = $props();
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={page.url.href} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={`${base}/img/ogimage.jpg`} />
  <meta property="og:image:alt" content={title} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={`${base}/img/ogimage.jpg`} />
  <meta name="twitter:image:alt" content={title} />
</svelte:head>
