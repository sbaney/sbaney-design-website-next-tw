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

[Tailwind CSS](https://tailwindcss.com/docs/installation) - Installed with `create-next-app`?

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

## License

Review license, but should make everything available for education purposes. Need to look into licensing for image assets.
