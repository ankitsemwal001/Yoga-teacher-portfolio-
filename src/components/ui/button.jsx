

const variants = {
  primary:
    "bg-[#111111] text-white hover:bg-[#75C5DE] hover:text-[#111111] border border-[#111111]",

  outline:
    "bg-transparent text-[#1F1F1F] border border-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white",

  ghost:
    "bg-transparent text-[#111111] hover:text-[#397F92]",
};

const Button = ({
  children,
  variant = "primary",
  type = "button",
  className = "",
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-full
        px-7
        py-3.5
        text-sm
        font-medium
        transition-colors
        duration-200
        focus:outline-none
        focus:ring-2
        focus:ring-[#75C5DE]/40
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
