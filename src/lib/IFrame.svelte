<script lang="ts">
export let src: string;
export let title: string = 'Embedded content';
export let width: string = '100%';
export let height: string = '400px';
export let style: string = '';
export let allow: string = '';
export let allowfullscreen: boolean = false;
export let loading: 'eager' | 'lazy' = 'lazy';
</script>

<iframe
  {src}
  {title}
  {width}
  {height}
  {style}
  {allow}
  {loading}
  {allowfullscreen}
  frameborder="0"
  referrerpolicy="no-referrer-when-downgrade"
  sandbox="allow-scripts allow-same-origin allow-popups"
></iframe>

<style>
iframe {
  display: block;
  max-width: 100%;
  border: none;
  border-radius: 8px;
  background: #f8f8f8;
}
</style>
