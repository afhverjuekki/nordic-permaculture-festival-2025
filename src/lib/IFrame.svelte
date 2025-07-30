<script lang="ts">
import { base } from '$app/paths';

const { 
  src, 
  title = 'Embedded content', 
  width = '100%', 
  height = '400px', 
  style = '', 
  allow = '', 
  allowfullscreen = false, 
  loading = 'lazy' 
} = $props<{
  src: string;
  title?: string;
  width?: string;
  height?: string;
  style?: string;
  allow?: string;
  allowfullscreen?: boolean;
  loading?: 'eager' | 'lazy';
}>();

// Add base to src if it's a local URL
let srcWithBase = $derived(
  src.startsWith('http://') || src.startsWith('https://') || src.startsWith('//') 
    ? src 
    : `${base}${src.startsWith('/') ? src : `/${src}`}`
);
</script>

<iframe
  src={srcWithBase}
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
