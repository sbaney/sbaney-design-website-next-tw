import MainPageNav from "@/components/MainPageNav";
import getMainPagesMetadata from "@/components/getMainPageMetadata";

const HomePage = () => {
  const mainPageMetadata = getMainPagesMetadata();
  const mainPageNav = mainPageMetadata.map((mainPage) => (
    <MainPageNav key={mainPage.slug} {...mainPage} />
  ));
  return <div>{mainPageNav}</div>;
};

export default HomePage;
