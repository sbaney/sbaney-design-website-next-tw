import fs from "fs";
import Link from "next/link";

const getMainPagesMetadata = () => {
  const folder = "mainPages/";
  const files = fs.readdirSync(folder);
  const markdownMainPages = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownMainPages.map((file) => file.replace(".md", ""));
  return slugs;
};

const HomePage = () => {
  const mainPageMetadata = getMainPagesMetadata();
  const mainPagePreviews = mainPageMetadata.map((slug) => (
    <div>
      <Link href={`/mainPages/${slug}`}>
        <h2>{slug}</h2>
      </Link>
    </div>
  ));
  return <div>{mainPagePreviews}</div>;
};

export default HomePage;
