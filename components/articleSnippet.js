import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import Arrow from "../public/icons/arrow.svg";

export default function ArticleSnippet(props) {
  return (
    <>
      <div className="col-span-3 col-start-2 hidden lg:block">
        <span className="block text-right">{props.date}</span>
      </div>
      <div className="relative col-span-1 hidden flex-col items-center justify-center lg:flex">
        <div className="h-full">
          <div className="mt-1 h-4 w-4 rounded-full border border-light-blue bg-off-white"></div>
          <div className="ml-2 h-full border-l border-light-blue"></div>
        </div>
      </div>
      <article className="col-span-12 lg:col-span-6">
        <h3 className="heading-two lg:mb-4">{props.title}</h3>
        <p className="mb-4 hidden text-dull-blue lg:block">{props.quote}</p>
        <div className="flex items-baseline justify-between">
          <p className="text-light-blue lg:hidden">{props.date}</p>
          <a
            href={props.link}
            className="btn-icon mt-4 mb-8 inline-flex items-center"
          >
            <span className="text-sm">Read More</span>
            <div className="svg-control w-4">
              <Arrow />
            </div>
          </a>
        </div>
      </article>
    </>
  );
}
