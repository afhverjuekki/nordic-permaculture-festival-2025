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


<figure style='display: flex; flex-direction: column; align-items: center; text-align: center;'>
  <img src={imgSrc} {srcset} {width} {height} {alt} />
  {#if caption}
    <figcaption>{caption}</figcaption>
  {/if}
</figure>
