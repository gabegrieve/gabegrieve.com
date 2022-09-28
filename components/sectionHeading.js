export default function SectionHeading(props) {
  return (
    <>
      <a
        href={props.link}
        className="btn-section block border-t border-b border-solid border-current pt-3 pb-2"
      >
        <h2 className="font-raks heading-super md:heading-ultra xl:heading-extreme text-center uppercase leading-none">
          {props.title}
        </h2>
      </a>
    </>
  );
}
