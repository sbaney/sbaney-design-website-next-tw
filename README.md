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
- Edited `/tailwind.config.ts`

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## License

Review license, but should make everything available for education purposes. Need to look into licensing for image assets.
