<!-- Top-level imports and configuration -->
<script>
import '/src/css/index.css';
import config from '/src/config';
import Logo from '$lib/Logo.svelte';
import PageLoader from './PageLoader.svelte';
import { base } from '$app/paths';
import Image from '$lib/Image.svelte';

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

  <!-- Footer section -->
  <footer class="mt-8">
    <!-- Navigation menu -->
    <nav class="py-4 text-xl md:p-4">
      <ul class="flex flex-row flex-wrap gap-x-6 p-2">
        <!-- Dynamic page links -->
        {#each data.pages as item (item.id)}
          <li><a class="block p-2 underline" href={`${base}/${item.id}`}>{item.title}</a></li>
        {/each}
        <!-- Social/external links -->
        <!-- <li>
          <a
            class="flex flex-row gap-0.5 p-2"
            href="https://github.com/lemmon/tablog-svelte"
            target="_blank"
            rel="external noreferrer nofollow"
            ><span class="underline">Github</span><span class="text-current/20">&#8599;</span></a
          >
        </li> -->
        <!-- <li>
          <a
            class="flex flex-row gap-0.5 p-2"
            href="https://www.twitter.com/lemmon"
            target="_blank"
            rel="external noreferrer nofollow"
            ><span class="underline">Twitter</span><span class="text-current/20">&#8599;</span></a
          >
        </li> -->
      </ul>
    </nav>

    <hr class="border-polynesian-blue-light my-10" />
    <!-- Copyright and attribution section -->
    <div class="copy mb-10 px-4 py-8 text-center text-xl md:p-8">
      <p>
        &copy; {new Date().getFullYear()}
        {config.siteTitle}
        <span class="mx-2 inline-block text-current/20">|</span>
        <a href="mailto:vistraektarfelag@gmail.com">vistraektarfelag@gmail.com</a>
      </p>
      <p>Built with 🌱 by <a href="https://æ.is/">Afhverju Ekki</a></p>
    </div>
  </footer>
</div>
