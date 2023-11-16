import { MainPageMetadata } from "./MainPageMetadata";
import Link from "next/link";

const MainPageNav = (props: MainPageMetadata) => {
  return (
    <div key={props.slug}>
      <Link key={props.slug} href={`/mainPages/${props.slug}`}>
        <h2 key={props.slug}>{props.title}</h2>
      </Link>
    </div>
  );
};

export default MainPageNav;
