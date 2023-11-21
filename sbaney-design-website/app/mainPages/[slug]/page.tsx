import fs from "fs";
import Markdown from "markdown-to-jsx";
import getMainPagesMetadata from "@/components/getMainPageMetadata";
import matter from "gray-matter";

const getMainPageContent = (slug: string) => {
  const folder = "mainPages/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export async function generateStaticParams() {
  const mainPages = getMainPagesMetadata();

  return mainPages.map((mainPage) => ({
    slug: mainPage.slug,
  }));
}

const mainPage = (props: any) => {
  const slug = props.params.slug;
  const mainPage = getMainPageContent(slug);
  return (
    <div>
      <div className="grid grid-flow-col auto-cols-auto">
        <div className="">
          <h1>This is a main page: {mainPage.data.title}</h1>
          <article className="prose">
            <Markdown>{mainPage.content}</Markdown>
          </article>
        </div>
        <div className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 md:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default mainPage;
