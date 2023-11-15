import fs from "fs";

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
    <p>
      <h1>This is a main page: {slug}</h1>
      <p>{content}</p>
    </p>
  );
};

export default mainPage;
