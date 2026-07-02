
const Section = ({
  id,
  children,
  className = "",
  background = "bg-[#F8F6F2]",
}) => {
  return (
    <section
      id={id}
      className={`${background} py-20 lg:py-24 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;