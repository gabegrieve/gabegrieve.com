export default function Container({ children }) {
  return (
    <>
      <section className="container py-4 md:py-8 lg:py-16">{children}</section>
    </>
  );
}
