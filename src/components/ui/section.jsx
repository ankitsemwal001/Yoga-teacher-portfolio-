
const Section = ({
  id,
  children,
  className = "",
  background = "bg-[#E4E4E4]",
  ...props
}) => {
  return (
    <section
      id={id}
      {...props}
      className={`${background} py-20 lg:py-24 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
