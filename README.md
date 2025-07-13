# Tablog

A minimalistic blog theme built with SvelteKit.

📺 [Demo](https://tablogdemo.vercel.app)

## Install

```sh
npx degit lemmon/tablog-svelte
npm install
npm run dev
```

## Usage

Posts and pages are generated with mdsvex processor. All content is located in `/content` folder. If an entry has the `date` prop it is treated as a blog post. If not it is considered a static page. All pages containing `draft: true` prop are treated as drafts and therefore inaccessible.

General site configuration can be adjusted by editing the `/src/config.js` file.

You can easily upgrade this example project to hook to any blog api of your choice; render static or dynamic content and deploy to numerous production environemtns, with just few simple tweaks. See [SvelteKit documentation](https://kit.svelte.dev/docs) for more info.

## Components

### Image

A single image component that displays images from the `/static/img/` directory.

```svelte
<Image src="farm_aerial_1.jpg" alt="Aerial view of farm" />
<Image src="chickens.jpg" width="300" height="200" caption="Farm chickens" />
```

**Props:**
- `src` (string, required) - Image filename in `/static/img/`
- `srcset` (string, optional) - Responsive image srcset
- `width` (number, optional) - Image width
- `height` (number, optional) - Image height
- `alt` (string, optional) - Alt text for accessibility
- `caption` (string, optional) - Caption displayed below image

### ImageRow

Displays up to 4 images in a horizontal row. If more than 4 images are provided, only the first 4 will be displayed.

```svelte
<!-- Simple usage with filenames -->
<ImageRow images={['farm_aerial_1.jpg', 'farm_aerial_2.jpg', 'chickens.jpg']} />

<!-- With caption -->
<ImageRow 
  images={['beds_1.jpg', 'beds_2.jpg', 'plants.jpg', 'wool.jpg']} 
  caption="Farm scenes from the festival"
/>

<!-- With detailed image objects -->
<ImageRow 
  images={[
    { src: 'cows_1.jpg', alt: 'Cows grazing' },
    { src: 'cows_2.jpg', alt: 'More cows' },
    { src: 'sheep_with_yarn.jpg', alt: 'Sheep with wool' }
  ]}
/>
```

**Props:**
- `images` (array, required) - Array of image filenames (strings) or image objects
- `alt` (string, optional) - Fallback alt text for all images
- `caption` (string, optional) - Caption displayed below the image row

**Image objects can contain:**
- `src` (string) - Image filename
- `srcset` (string) - Responsive image srcset
- `width` (number) - Image width
- `height` (number) - Image height
- `alt` (string) - Alt text for this specific image

## License

MIT
