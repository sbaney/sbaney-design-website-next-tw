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
    <div className="">
      <div className="grid grid-cols-10">
        <div className="col-span-9">
          <h1>This is a main page: {mainPage.data.title}</h1>
          <article className="prose">
            <Markdown>{mainPage.content}</Markdown>
          </article>
        </div>
        <div className="col-span-1 md:hidden overflow-y-auto">
          <div className="fixed bg-sky-500 text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mainPage;
