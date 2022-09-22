import Layout from "../components/layout";
import { ReactComponent as Dots } from "../public/icons/dots.svg";

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <h1 className="text-3xl">
          Creative developer, designer &amp; product manager
        </h1>
        <div className="flex justify-end">
          <figure className="svg-control w-2 text-blue-500"></figure>
        </div>
      </div>
    </Layout>
  );
}
