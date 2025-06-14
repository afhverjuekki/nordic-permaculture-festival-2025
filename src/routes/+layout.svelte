<!-- Top-level imports and configuration -->
<script>
import '/src/css/index.css';
import config from '../config';
import PageLoader from './PageLoader.svelte';
import { base } from '$app/paths';
import Image from '$lib/Image.svelte';
import Footer from '$lib/Footer.svelte';

let { data, children } = $props();
</script>

<!-- Document head modifications - favicon and RSS feed -->
<svelte:head>
  <link rel="icon" type="image/png" href={`${base}/favicon.png`} />
</svelte:head>

<!-- Page loading indicator component -->
<PageLoader />

<!-- Main layout container -->
<div class="mx-auto flex min-h-dvh min-h-screen max-w-screen-lg flex-col">
  <!-- Header section with logo and site title -->
  <header class="flex flex-col px-4 py-8 md:p-8">
    <figure>
      <a class="flex flex-row items-center gap-4" href={`${base}/`} title={config.siteTitle}>
        <!-- <Logo /> -->
        <!-- Light mode logo -->
        <span class="dark:hidden">
          <Image
            src={`logo_b.png`}
            width="128"
            height="128"
            alt="Nordic Permaculture Festival 2025"
          />
        </span>
        <!-- Dark mode logo -->
        <span class="hidden dark:block">
          <Image
            src={`logo_w.png`}
            width="128"
            height="128"
            alt="Nordic Permaculture Festival 2025"
          />
        </span>
        <!-- display site title next to the logo
        <h1 class="text-3xl leading-none tracking-tight">{config.siteTitle}</h1>
      -->
      </a>
    </figure>
    <a class="flex flex-1" href={`${base}/`} title={config.siteTitle}>
      <Image src={`npf2025_banner.jpg`} alt="Nordic Permaculture Festival 2025" />
    </a>
  </header>

  <!-- Main content area - renders child routes -->
  <main class="flex-1">
    {@render children()}
  </main>

  <Footer />
</div>
