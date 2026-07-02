

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
      <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-[#1F1F1F] md:text-[44px] lg:text-5xl">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="mt-5 text-[17px] leading-relaxed text-[#6B6B6B]">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;