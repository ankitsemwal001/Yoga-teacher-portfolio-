

const Card = ({
  children,
  className = "",
  hover = true,
}) => {
  return (
    <article
      className={`
        overflow-hidden
        rounded-lg
        bg-white
        border
        border-black/10
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
