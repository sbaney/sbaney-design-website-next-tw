import type { Metadata } from "next";
import getMainPagesMetadata from "@/components/getMainPageMetadata";
import MainPageNav from "@/components/MainPageNav";

import "./globals.css";

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
      <nav>
        <div className="flex items-center gap-4">{mainPageNav}</div>
      </nav>
    );
  };
  const header = (
    <header>
      <div>
        <h1>SBaney Design</h1>
        <h4>Creative and Technical Design and Consulting</h4>
        {mainNav()}
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
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
