

const SectionHeading = ({
  title,
  description,
  align = "center",
  className = "",
}) => {
  return (
    <div
      className={`
        ${
          align === "center"
            ? "mx-auto max-w-2xl text-center"
            : "max-w-2xl text-left"
        }
        ${className}
      `}
    >

      {/* Heading */}
      <h2 className="font-serif text-3xl font-semibold leading-tight tracking-normal text-[#111111] md:text-4xl lg:text-[42px]">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="mt-5 text-[17px] leading-relaxed text-[#55524D]">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
