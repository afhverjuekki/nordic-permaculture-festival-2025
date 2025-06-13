<script>
export let href;
export let primary = false;
export let inverted = false;
export let children;
</script>

{#if primary && inverted}
  <a class="button button--primary button--inverted" {href}>
    {@render children()}
  </a>
{:else if primary}
  <a class="button button--primary" {href}>
    {@render children()}
  </a>
{:else if inverted}
  <a class="button button--inverted" {href}>
    {@render children()}
  </a>
{:else}
  <a class="button" {href}>
    {@render children()}
  </a>
{/if}
