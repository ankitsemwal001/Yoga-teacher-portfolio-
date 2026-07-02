

const Card = ({
  children,
  className = "",
  hover = true,
}) => {
  return (
    <article
      className={`
        overflow-hidden
        rounded-3xl
        bg-white
        border
        border-[#E6DFD5]
        shadow-sm
        transition-all
        duration-500
        ${
          hover
            ? "hover:-translate-y-1 hover:shadow-md"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </article>
  );
};

export default Card;