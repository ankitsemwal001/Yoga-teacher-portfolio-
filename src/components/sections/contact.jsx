import groupYoga from "../../public/assets/group-yoga.png";

import Container from "../ui/container";
import Section from "../ui/section";

const Contact = () => {
  return (
    <Section id="contact" background="bg-[#75C5DE]" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -bottom-8 left-0 font-serif text-[22vw] leading-none text-black/[0.08]"
        aria-hidden="true"
      >
        BEGIN
      </div>

      <Container className="relative grid min-h-[90svh] items-center gap-10 py-20 lg:grid-cols-[1fr_0.9fr] lg:py-28">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-normal text-[#111111]/70">
            Book a session
          </p>

          <h2 className="font-serif text-[44px] font-medium leading-none text-[#111111] sm:text-6xl lg:text-[86px]">
            Let's begin your yoga journey with one calm breath.
          </h2>

          <div className="mt-8 grid gap-4 border-y border-black/15 py-7 text-[17px] text-[#111111]/75 md:grid-cols-3">
            <a href="mailto:hello@yogaportfolio.com" className="hover:text-black">
              hello@yogaportfolio.com
            </a>
            <a href="tel:+919876543210" className="hover:text-black">
              +91 98765 43210
            </a>
            <span>Rishikesh, Uttarakhand</span>
          </div>

          <div className="mt-8">
            <a href="mailto:hello@yogaportfolio.com" className="yoga-dark-cta">
              <span>Send a booking request</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M5 13L13 5M13 5H6M13 5V12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <img
          src={groupYoga}
          alt="Group yoga class"
          className="h-[58svh] w-full rounded-lg object-cover"
        />
      </Container>
    </Section>
  );
};

export default Contact;
