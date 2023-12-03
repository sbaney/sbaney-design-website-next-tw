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
      <article className="prose dark:prose-invert pl-8 md:pl-4">
        <Markdown>{mainPage.content}</Markdown>
      </article>
    </div>
  );
};

export default mainPage;
