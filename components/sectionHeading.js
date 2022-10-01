export default function SectionHeading(props) {
  return (
    <>
      <a
        href={props.link}
        className="btn-section block border-t border-b border-solid border-light-blue pt-3 pb-2"
      >
        <div className="container">
          <h2 className="font-raks heading-one xs:heading-super md:heading-ultra xl:heading-extreme text-center uppercase leading-none">
            {props.title}
          </h2>
        </div>
      </a>
    </>
  );
}
