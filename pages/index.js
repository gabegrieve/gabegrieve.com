import Layout from "../components/layout";
import Socials from "../components/socials";
import Arrow from "../public/icons/arrow.svg";
import SectionHeading from "../components/sectionHeading";
import PhotoSlider from "../components/photoSlider";
import ProjectSlider from "../components/projectSlider";

export default function Home() {
  return (
    <Layout>
      <div className="container mb-8">
        <h1 className="heading-three sm:heading-one xl:heading-super py-4 text-center leading-tighter sm:text-left lg:py-16 xl:w-3/4">
          I'm a creative developer, designer, product manager &amp; musician
          based in Sydney, Gadigal Land.
        </h1>
        <div className="flex justify-center sm:justify-end">
          <a href="" className="btn-icon mt-4 inline-flex items-center">
            <span className="text-sm lg:text-base">About me</span>
            <div className="svg-control w-4">
              <Arrow />
            </div>
          </a>
        </div>
      </div>
      <div className="container">
        <h2 className="heading-one xs:heading-super md:heading-ultra xl:heading-extreme font-raks text-center uppercase leading-none md:text-left">
          Doing things in the real world
        </h2>
        <section className="py-4">
          <PhotoSlider />
          <div class="flex items-end py-4 md:py-16">
            <h3 className="heading-three sm:heading-one xl:heading-super leading-tighter xl:w-2/3">
              (and doing things on the internet)
            </h3>
            <div class="flex flex-grow items-center justify-end pb-1">
              <Socials />
            </div>
          </div>
        </section>
      </div>
      <SectionHeading link="" title="Latest Projects" />
      <section className="container py-4 md:py-8">
        <ProjectSlider />
      </section>
    </Layout>
  );
}
