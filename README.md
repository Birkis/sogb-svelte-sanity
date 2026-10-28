# Sørensen og Balchen Corporate Website

Welcome to the GitHub repository for the [Sørensen og Balchen](https://sogb.no) corporate website. This project leverages the power of [SvelteKit](https://kit.svelte.dev/) for a dynamic frontend experience and [Sanity.io](https://sanity.io/) for streamlined content management.

## Key Features

- Fetching and integrating content from [the Sanity Content Lake](https://www.sanity.io/docs/datastore).
- Rendering block content seamlessly with [Portable Text](https://www.sanity.io/docs/presenting-block-text).
- Utilizing [Sanity Studio](https://www.sanity.io/docs/sanity-studio) for effortless content creation and editing.
- Image management including cropping and rendering using [Sanity Image URLs](https://www.sanity.io/docs/image-url).

> **Important**
>
> This repository is organized into two main folders: `/app` and `/studio`. The `/app` folder houses the frontend code (SvelteKit), while the `/studio` folder contains the Sanity Studio code for content management.
>
> Despite being housed in a single repository for ease of access, this is **not** a monorepo setup. You may consider separating these folders into individual repositories for independent deployment of the app and the studio components.

## Pre-requisites

- [Node.js](https://nodejs.org/en/) (v14.18 or later)
- [Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli) (optional, but recommended)

## Getting Started

Follow these steps in **both** the `/app` and `/studio` directories to set up your development environment:

1. Execute `npm install` to install the necessary dependencies.
2. Run `npx -y sanity@latest init --env`, during this process:
   - Choose or create a Sanity project and dataset. Ensure to use the same Sanity project and dataset for both folders.
   - A `.env` file will be generated with the necessary environment variables.
   - Alternatively, you can use `sanity init --env` if you have the CLI installed.
3. Update your environment variables in the `/app` folder to include the `PUBLIC_` prefix: `PUBLIC_SANITY_DATASET` and `PUBLIC_SANITY_PROJECT_ID`.
4. Start the development server with `npm run dev`.

You can now access your SvelteKit app at [http://localhost:5173/](http://localhost:5173/) and the Sanity Studio at [http://localhost:3333/](http://localhost:3333/).

Feel free to relocate each of the folders and manage them in separate version control systems if preferred.

### Adding Content

1. Navigate to the Studio to create and publish a new `Post` document.
2. Refresh the app page to view the newly rendered content.

You can customize the schema for the `Post` document within the `/studio/schemas` folder. Add more documents and schemas to extend the functionality as per your requirements.

## Opting Out of TypeScript

If TypeScript is not required for your project, follow these steps:

1. Run `npm install` in the repository root to install dependencies.
2. Execute `node remove-typescript.mjs` to remove TypeScript configurations and types from both the `/app` and `/studio` directories.

Following this, you can delete any files in the repository root, excluding the `/studio` and `/app` folders, if you don't plan on using TypeScript.

## Deployment Guidelines

The `/app` and `/studio` directories are designed to be deployed separately. Here are some guidelines:

- For deploying the app, we recommend platforms like [Vercel](https://vercel.com/) for a hassle-free experience.
- Deploy Sanity Studio by executing `sanity deploy` within the `/studio` directory (requires `@sanity/cli` to be installed globally).

---

I hope this meets your project's needs! If you have any further customization requests, feel free to ask.

## Content delivery and troubleshooting

Public pages fetch published Sanity content on the server using the Sanity API CDN in production. Successful responses request five minutes of shared-cache freshness, with a one-day stale-while-revalidate window and a one-day stale-if-error window. Content updates may therefore take time to appear. Vercel's cache is best-effort and regional: an uncached page still needs Sanity to be available, and cached HTML does not guarantee that Sanity-hosted images or files are available. Test cache behavior on the deployed environment, including client navigation and failure responses.

For a recurring outage, compare the outage timestamps and HTTP status/error messages in Vercel function and deployment logs with the Sanity project's usage and billing dashboards. Check API requests, API CDN and asset bandwidth, storage, plan limits, and billing separately, as well as Vercel usage and traffic or bot spikes. Record the specific limit and response before changing a plan. Inspect `x-vercel-cache` on repeated requests to confirm whether pages are being cached. Check image and file responses separately from HTML.
