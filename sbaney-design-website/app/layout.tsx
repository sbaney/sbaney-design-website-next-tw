import type { Metadata } from "next";
import getMainPagesMetadata from "@/components/getMainPageMetadata";
import MainPageNav from "@/components/MainPageNav";

import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SBaney Design",
  description: "Technical and Creative Design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mainPageMetadata = getMainPagesMetadata();

  const mainNav = () => {
    const mainPageMetadata = getMainPagesMetadata();
    const mainPageNav = mainPageMetadata.map((mainPage) => (
      <MainPageNav key={mainPage.slug} {...mainPage} />
    ));
    return (
      <nav className="flex w-[92%]  mx-auto">
        <div className="md:flex justify-between items-center w-full text-xl py-4">
          <div className="">
            <Link href={`/#homePageContent`}>
              <h2>Home</h2>
            </Link>
          </div>
          {mainPageNav}
        </div>
      </nav>
    );
  };

  const header = (
    <header>
      <div className="text-center dark:bg-cyan-950 dark:text-sky-700">
        <div className="pt-1 pb-2">
          <h1 className="text-5xl dark:text-red-700">SBaney Design</h1>
          <h4>Creative and Technical Design and Consulting</h4>
        </div>
        <div className="main-nav items-center gap-[4vw] dark:bg-slate-950 dark:text-sky-500">
          {mainNav()}
        </div>
      </div>
    </header>
  );

  const footer = (
    <footer className="dark:bg-slate-950 dark:text-sky-500">
      <div className="max-w-3xl mx-auto py-2">
        <a href="https://github.com/sbaney/sbaney-design-website-next-tw">
          GitHub Repository
        </a>
        <br />
        <a href="mailto:sbaneydesign@gmail.com">sbaneydesign@gmail.com</a>
      </div>
    </footer>
  );

  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <div className="dark:bg-sky-950 dark:text-cyan-600">
          {header}
          <div className="max-w-xl mx-auto pt-8 pb-4">{children}</div>
          {footer}
        </div>
      </body>
    </html>
  );
}
