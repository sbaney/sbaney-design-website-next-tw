import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div>
        <h1 className="text-3xl">SBaney Design</h1>
        <h4>Creative and Technical Design and Consulting</h4>
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
