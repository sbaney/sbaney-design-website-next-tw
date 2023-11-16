---
title: "About this Website"
---

# About This Website

## [GitHub Repository](https://github.com/sbaney/sbaney-design-website-next-tw)

## Project Goals

The purpose of this project is mainly educational, with an end-product of a useful professional website. I intend to find a happy medium between creating my own reusable components and leveraging the benefits of existing frameworks. Simplicity is also a primary goal, as most of my immediate projects are essentially brochure sites. Leveraging the [Static Site Generation](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation) features of Next.js is very attractive for performance and low hosting overhead.

## Resources

[NextJS 13 Tutorial: Create a Static Blog from Markdown Files by
pixegami](https://youtu.be/Hiabp1GY8fA?si=2zwNqC3rztUfUUcT)
[Dev environment documentation](https://github.com/sbaney/documentation/blob/main/dev-setup.md)
[Node.js](https://nodejs.org/en/download/package-manager), VS Code, and Git are the core tools
[Next.js](https://nextjs.org/docs/getting-started/installation)
[Tailwind CSS](https://tailwindcss.com/docs/installation) - Installed with `create-next-app`?

## How This Site Works

### Home Page

The home page is at `/app/page.tsx`

The main pages titles are loaded with the `getMainPagesMetadata` function located at `/components/getMainPagesMetadata.ts`. Page titles are front matter in individual Markdown files parsed by [gray-matter](https://github.com/jonschlinkert/gray-matter)

#### Front matter example from this page:

```
---
title: "About this Website"
---
```

#### `/components/getMainPagesMetadata.ts`

```
import fs from "fs";
import { MainPageMetadata } from "../components/MainPageMetadata";
import matter from "gray-matter";

const getMainPagesMetadata = ():MainPageMetadata[] => {
    const folder = "mainPages/";
    const files = fs.readdirSync(folder);
    const markdownMainPages = files.filter((file) => file.endsWith(".md"));

    // Get gray-matter data from each file.
    const mainPages = markdownMainPages.map((fileName) => {
        const fileContents = fs.readFileSync(`mainPages/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        return {
        title: matterResult.data.title,
        slug: fileName.replace(".md", ""),
        };
    });
    return mainPages;
};

  export default getMainPagesMetadata;
```

Markdown files in `/mainPages` are processed by `gray-matter` and the title from front matter and the filename without extenstion are mapped into the MainPageMetadata properties.

### Main Pages

- Main pages are Markdown files located at `/mainPages`.
- Routing is handled by the [App Router](https://nextjs.org/docs/app), using `app/mainPages/[slug]/page.tsx`.
- [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) is used to create state routes at build time

```
export async function generateStaticParams() {
  const mainPages = getMainPagesMetadata();

  return mainPages.map((mainPage) => ({
    slug: mainPage.slug,
  }));
}
```
