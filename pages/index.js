import Layout from "../components/layout";
import Socials from "../components/socials";
import Arrow from "../public/icons/arrow.svg";
import Container from "../components/container";
import SectionHeading from "../components/sectionHeading";
import PhotoSlider from "../components/photoSlider";
import ProjectSlider from "../components/projectSlider";
import ArticleSnippet from "../components/articleSnippet";

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
      <Container>
        <ProjectSlider />
      </Container>
      <SectionHeading link="" title="Work Journal" />
      <Container>
        <div className="grid grid-cols-12">
          <ArticleSnippet
            link=""
            title="Invisibility as a user interface methodology"
            date="26 September 2022"
            quote="While most good designers know that the best thing you can do to a layout is to simplify it and strip things away, our tendency to trust our eyes and design intuition can often lead us down the inverse path. "
          />
          <ArticleSnippet
            link=""
            title="Building HTML eDMs (or 'How I learned to stop worrying and love the table element')"
            date="July 12, 2017"
            quote="You see, when the major web browsers got together and said 'hey, we should try to adhere to a set of standards so that all code is rendered the same way', all of the email clients got together and said 'hey, remember how good the web was in 1999? Let's keep that legacy alive!'"
          />
          <ArticleSnippet
            link=""
            title="Writing the perfect brief"
            date="July 12, 2017"
            quote="A good brief is super important. Every time I'm working on a design project, I have the brief open on my desktop to constantly refer to as I work. A lot of designers work exactly the same way."
          />
        </div>
      </Container>
      <section className="bg-black-blue text-white">
        <Container>
          <h3 className="heading-one xs:heading-super md:heading-ultra xl:heading-extreme font-raks text-center uppercase leading-none md:text-left">
            Do you like this website?
          </h3>
          <div className="flex flex-col items-center">
            <h4 className="heading-two">Thanks! You can have it</h4>
            <div className="svg-control w-16 rotate-90 transform">
              <Arrow />
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
