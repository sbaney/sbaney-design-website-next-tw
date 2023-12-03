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

- [Dev environment documentation](https://github.com/sbaney/documentation/blob/main/dev-setup.md)
- [Node.js](https://nodejs.org/en/download/package-manager), VS Code, and Git are the core tools

### Project Setup

- Setup GitHub repository
- Clone repository `git clone git@github.com:sbaney/sbaney-design-website-next-tw.git sbaney-design-website`

#### Install Next

- `npm install next`

#### Initial Setup

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
- `npm install -D @tailwindcss/typography` - [@tailwindcss/typography plugin](https://tailwindcss.com/docs/typography-plugin)

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
- Tailwind directives added to `app/globals.css` during `create-next-app`, did not need to update
- Edited `/tailwind.config.js`

#### `/tailwind.config.js`

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    //"./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    //"./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {fontFamily: {
      sans: [
        'Inter var',
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Lora','ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          p: {
            fontFamily: 'serif',
          },
        },
      },
    })},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

## Home Page

The home page is at `/app/page.tsx`

### Navigation

- The main pages titles are loaded with the `getMainPagesMetadata` function located at `/components/getMainPagesMetadata.ts`.
- Page titles are front matter in individual Markdown files parsed by [gray-matter](https://github.com/jonschlinkert/gray-matter).
- The title from front matter and the filename without extenstion are mapped into the MainPageMetadata properties.

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
    //const slugs = markdownMainPages.map((file) => file.replace(".md", ""));
    //return slugs;
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

- Main page content is parsed by `gray-matter` in the `getMainPageContent` function and rendered by [markdown-to-jsx](https://www.npmjs.com/package/markdown-to-jsx) by wrapping the gray matter content in a `<Markdown>` tag
- The markdown is styled by wrapping it in a `<article className="prose prose-slate">` tag using the `@tailwindcss/typography` plugin

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
    <div className="">
      <h1>This is a main page: {mainPage.data.title}</h1>
      <article className="prose">
        <Markdown>{mainPage.content}</Markdown>
      </article>
    </div>
  );
};

export default mainPage;
```

## Style

### Defaulting to Dark Mode - NEEDS REVIEWED

- [Toggling Dark Mode Manually](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually)
- Added `className="dark"` to `<html>` tag

#### `/app/layout.tsx`

```
return (
    <html lang="en" className="scroll-smooth">
      <body>
        <div className="bg-sky-200 text-slate-950 dark:bg-sky-950 dark:text-cyan-600">
          {header}
          <div className="">
            <div className="grid grid-cols-10 max-w-xl mx-auto pt-8 pb-4">
              <div className="col-span-9">{children}</div>
              <div className="col-span-1 pl-4">
                <Link href={`#mainNav`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 dark:text-red-600 top-8 sticky"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          {footer}
        </div>
      </body>
    </html>
  );
}
```

## License

Review license, but should make everything available for education purposes. Need to look into licensing for image assets.
