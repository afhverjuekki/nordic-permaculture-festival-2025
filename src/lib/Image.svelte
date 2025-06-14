<script>
import { base } from '$app/paths';
let {
  src,
  srcset = undefined,
  width = undefined,
  height = undefined,
  alt = '',
  caption = undefined,
} = $props();

let imgSrc = $derived(`${base}/img/${src}`);
</script>

<figure>
  <img src={imgSrc} {srcset} {width} {height} {alt} />
  {#if caption}
    <figcaption>{caption}</figcaption>
  {/if}
</figure>
