import fs from "fs";
import Markdown from "markdown-to-jsx";

const getMainPageContent = (slug: string) => {
  const folder = "mainPages/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  return content;
};

const mainPage = (props: any) => {
  const slug = props.params.slug;
  const content = getMainPageContent(slug);
  return (
    <div>
      <h1>This is a main page: {slug}</h1>
      <Markdown>{content}</Markdown>
    </div>
  );
};

export default mainPage;
