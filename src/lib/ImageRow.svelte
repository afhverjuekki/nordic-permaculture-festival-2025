<script>
import { base } from '$app/paths';

let {
  images = [],
  alt = '',
  caption = undefined,
} = $props();

// Limit to maximum of 4 images
let displayImages = $derived(images.slice(0, 4));
console.log(displayImages);
</script>

<figure>
  <div class="image-row">
    {#each displayImages as image, index}
      <img 
        src={`${base}/img/${image.src || image}`} 
        srcset={image.srcset} 
        alt={image.alt || alt || `Image ${index + 1}`} 
      />
    {/each}
  </div>
  {#if caption}
    <figcaption>{caption}</figcaption>
  {/if}
</figure>