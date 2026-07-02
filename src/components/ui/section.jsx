
const Section = ({
  id,
  children,
  className = "",
  background = "bg-[#F8F6F2]",
}) => {
  return (
    <section
      id={id}
      className={`${background} py-24 lg:py-32 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;