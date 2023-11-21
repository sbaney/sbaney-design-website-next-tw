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
        <div className="md:flex justify-between items-center w-full">
          <div>
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
      <div className="text-center">
        <h1>SBaney Design</h1>
        <h4>Creative and Technical Design and Consulting</h4>
        <div className="main-nav items-center gap-[4vw]">{mainNav()}</div>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div>
        <a href="https://github.com/sbaney/sbaney-design-website-next-tw">
          GitHub Repository
        </a>
        <br />
        <a href="mailto:sbaneydesign@gmail.com">sbaneydesign@gmail.com</a>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <body>
        <div className="dark:bg-slate-800 dark:text-white">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
