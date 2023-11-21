import fs from "fs";
import Markdown from "markdown-to-jsx";
import getMainPagesMetadata from "@/components/getMainPageMetadata";
import matter from "gray-matter";

export async function generateStaticParams() {
  const mainPages = getMainPagesMetadata();

  return mainPages.map((mainPage) => ({
    slug: mainPage.slug,
  }));
}

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
    <div className="scroll-smooth">
      <h1>This is a main page: {mainPage.data.title}</h1>
      <article className="prose dark:prose-invert">
        <Markdown>{mainPage.content}</Markdown>
      </article>
    </div>
  );
};

export default mainPage;
