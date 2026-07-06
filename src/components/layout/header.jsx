import { useState } from "react";

const navItems = ["About", "Services", "Experience", "Gallery", "Contact"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="fixed left-0 top-7 z-50 flex w-1/2 items-center pl-5 mix-blend-difference md:top-10 md:pl-10">
        <a
          href="#home"
          className="font-serif text-2xl font-semibold text-white"
          aria-label="Breathe Yoga home"
        >
          Breathe
        </a>
      </div>

      <div className="fixed right-0 top-4 z-50 flex w-1/2 justify-end pr-5 md:top-7 md:pr-10">
        <button
          type="button"
          className={`yoga-burger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`yoga-menu-panel ${isOpen ? "open" : ""}`}>
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
              className="font-serif text-4xl font-medium leading-tight text-[#F4F1E8] transition-opacity hover:opacity-70 md:text-[42px]"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="mt-10">
          <a
            href="mailto:hello@yogaportfolio.com"
            className="text-lg text-[#9A9590] transition-colors hover:text-[#F4F1E8] md:text-xl"
          >
            hello@yogaportfolio.com
          </a>

          <div className="mt-5 flex gap-6">
            <a href="#gallery" onClick={closeMenu} className="yoga-menu-link">
              Instagram
            </a>
            <a href="#services" onClick={closeMenu} className="yoga-menu-link">
              Classes
            </a>
            <a href="#contact" onClick={closeMenu} className="yoga-menu-link">
              Book
            </a>
          </div>
        </div>

        <a href="#contact" onClick={closeMenu} className="yoga-menu-cta">
          <span className="yoga-menu-cta-bg" />
          <span className="yoga-menu-cta-text">Book a session</span>
          <span className="yoga-menu-cta-circle" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
              <path
                d="M5 13L13 5M13 5H6M13 5V12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
    </>
  );
};

export default Header;
