# sbaney-design-website-next-tw

Professional website using Next.js and Tailwind CSS

## Project Goals

The purpose of this project is mainly educational, with an end-product of a useful professional website. I intend to find a happy medium between creating my own reusable components and leveraging the benefits of existing frameworks. Simplicity is also a primary goal, as most of my immediate projects are essentially brochure sites. Leveraging the [Static Site Generation](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation) features of Next.js is very attractive for performance and low hosting overhead.

## References

[NextJS 13 Tutorial: Create a Static Blog from Markdown Files by
pixegami](https://youtu.be/Hiabp1GY8fA?si=2zwNqC3rztUfUUcT)

[pixegami NextJS Tutorial repository](https://github.com/pixegami/nextjs-blog-tutorial) - more resources in video description

[A Happy Lorem Ipsum - Bob Ross Quotes Generator](https://www.bobrosslipsum.com/) - USE AT YOUR OWN RISK

## Prerequitites / Project Setup

### Development Environment

[Dev environment documentation](https://github.com/sbaney/documentation/blob/main/dev-setup.md)

[Node.js](https://nodejs.org/en/download/package-manager), VS Code, and Git are the core tools

### Project Setup

- Setup GitHub repository
- Clone repository `git clone git@github.com:sbaney/sbaney-design-website-next-tw.git sbaney-design-website`
- `cd sbaney-design-website` - somewhat ambiguous use of this directory name twice, fix?
- `npx create-next-app@latest` - [Next.js](https://nextjs.org/docs/getting-started/installation)

```
✔ What is your project named? … sbaney-design-website
✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like to use `src/` directory? … No
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias (@/*)? … No
```

- `npm i marktown-to-jsx` - Install [Markdown to JSX](https://www.npmjs.com/package/markdown-to-jsx)
- `npm i gray-matter` - Install [Gray Matter](https://www.npmjs.com/package/gray-matter)
- `npm install -D tailwindcss postcss autoprefixer` `npx tailwindcss init -p` - Install [Tailwind CSS](https://tailwindcss.com/docs/guides/nextjs)

## Content

Content will be handled by Markdown files, modifying the method used in pixegami's tutorial to be more suited for content that will be more static than the blog example, yet still easy to update.

### Pages

- Home - separate from sub-pages
- Navbar - will likely need to upgrade to a more advanced component to handle mobile
- Hero Section - image and blurb / CTA
- Footer - Contact, Git repo, license, more nav?
- About / Bio
  - Photo
  - Professional Bio
  - Hobbies / Interests
- Resume

_RESEARCH MORE_ - need method to embed markdown from existing resume repo
Async / await to fetch markdown from `https://raw.githubusercontent.com/sbaney/steve-baney-resume/master/steve-baney-resume.md`
Load markdown into file
Render using [remark-rehype](https://github.com/remarkjs/remark-rehype) and [rehype-react](https://github.com/rehypejs/rehype-react) or [Remark](https://github.com/remarkjs/remark)
[NextJs, Libraries for Render Markdown in a Secure Way](https://smarative.com/blog/nextjs-libraries-for-render-markdown-in-a-secure-way)
[Render Markdown - Nextjs.org](https://nextjs.org/learn-pages-router/basics/dynamic-routes/render-markdown)

- Contact
  - Email
  - GitHub
- Services
  - Web Design
  - Web Hosting
  - Technical Consulting
  - Graphic Design
- Creative
  - Music - link to SoundCloud
  - Art - Samples?
- Portfolio?
- About Website
- KITTIES
  - Pics

## Tailwind

- Removed `/tailwind.config.ts` - Installed with `create-next-app`, potential duplicate step due to differences in versions from tutorial?
- Followed [Installation Instructions for Next.js](https://tailwindcss.com/docs/guides/nextjs)
- Tailwind directives added during `create-next-app`, did not need to update
- Edited `/tailwind.config.js`

#### `/tailwind.config.js`

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    //"./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    //"./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### Content of Removed `tailwind.config.ts`

```
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
```

## Home Page

The home page is at `/app/page.tsx`

### Navigation

The main pages titles are loaded with the `getMainPagesMetadata` function located at `/components/getMainPagesMetadata.ts`. Page titles are front matter in individual Markdown files parsed by [gray-matter](https://github.com/jonschlinkert/gray-matter). The title from front matter and the filename without extenstion are mapped into the MainPageMetadata properties.

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

## Main Pages

- Main pages are Markdown files located at `/mainPages`.
- Routing is handled by the [App Router](https://nextjs.org/docs/app), using `app/mainPages/[slug]/page.tsx`.
- [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) is used to create state routes at build time

#### `/app/mainPages/[slug]/page.tsx`

```
export async function generateStaticParams() {
  const mainPages = getMainPagesMetadata();

  return mainPages.map((mainPage) => ({
    slug: mainPage.slug,
  }));
}
```

- Main page content is parsed by `gray-matter` in the `getMainPageContent` function and rendered by [markdown-to-jsx](https://www.npmjs.com/package/markdown-to-jsx) by wrapping the gray matter content in a `<Markdown` tag

#### `/app/mainPages/[slug]/page.tsx`

```
const getMainPageContent = (slug: string) => {
 const folder = "mainPages/";
 const file = `${folder}${slug}.md`;
 const content = fs.readFileSync(file, "utf8");
 const matterResult = matter(content);
 return matterResult;
};

const mainPage = (props: any) => {
 const slug = props.params.slug;
 const mainPage = getMainPageContent(slug);
 return (
   <div>
     <h1>This is a main page: {mainPage.data.title}</h1>
     <Markdown>{mainPage.content}</Markdown>
   </div>
 );
};
```

## License

Review license, but should make everything available for education purposes. Need to look into licensing for image assets.
