import fs from "fs";
import { MainPageMetadata } from "../components/MainPageMetadata";
import matter from "gray-matter";

const getMainPagesMetadata = ():MainPageMetadata[] => {
    const folder = "mainPages/";
    const files = fs.readdirSync(folder);
    const markdownMainPages = files.filter((file) => file.endsWith(".md"));

    // Get gray-matter data from each file.
    const mainPages = markdownMainPages.map((fileName) => {
        const fileContents = fs.readFileSync(`mainPages/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        return {
        title: matterResult.data.title,
        slug: fileName.replace(".md", ""),
        };
    });
    return mainPages;
    //const slugs = markdownMainPages.map((file) => file.replace(".md", ""));
    //return slugs;
};

  export default getMainPagesMetadata;