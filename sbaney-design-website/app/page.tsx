import getMainPagesMetadata from "@/components/getMainPageMetadata";
import Link from "next/link";

const HomePage = () => {
  const mainPageMetadata = getMainPagesMetadata();
  const mainPagePreviews = mainPageMetadata.map((mainPage) => (
    <div key={mainPage.slug}>
      <Link key={mainPage.slug} href={`/mainPages/${mainPage.slug}`}>
        <h2 key={mainPage.slug}>{mainPage.title}</h2>
      </Link>
    </div>
  ));
  return <div>{mainPagePreviews}</div>;
};

export default HomePage;
