import { useRef } from "react";
import image1 from "../../public/assets/image1.png";

import Container from "../ui/container";
import Section from "../ui/section";

const headline = "Transform your mind and body through yoga.";
const words = headline.split(" ");

const Hero = () => {
  const heroRef = useRef(null);

  const handleMouseMove = (event) => {
    const hero = heroRef.current;

    if (!hero) return;

    const rect = hero.getBoundingClientRect();

    hero.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);

    hero.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    const hero = heroRef.current;

    if (!hero) return;

    hero.style.setProperty("--spotlight-x", "65%");
    hero.style.setProperty("--spotlight-y", "50%");
  };

  return (
    <>
      {/* Opening splash animation */}
      <div className="yoga-splash" aria-hidden="true">
        <div className="yoga-splash-row yoga-splash-top">
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={`top-${index}`}
              className="yoga-splash-box"
              style={{ animationDelay: `${index * 0.06}s` }}
            />
          ))}
        </div>

        <div className="yoga-splash-row yoga-splash-bottom">
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={`bottom-${index}`}
              className="yoga-splash-box"
              style={{ animationDelay: `${index * 0.06}s` }}
            />
          ))}
        </div>
      </div>

      <Section
        id="home"
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="yoga-hero relative min-h-[100svh] overflow-hidden bg-[#e4e4e4] !py-0"
      >
        {/* Desaturated base image */}
        <div
          className="yoga-hero-image yoga-hero-base-image"
          style={{ backgroundImage: `url(${image1})` }}
          aria-hidden="true"
        />

        {/* Original colours revealed around cursor */}
        <div
          className="yoga-hero-image yoga-hero-reveal-image"
          style={{ backgroundImage: `url(${image1})` }}
          aria-hidden="true"
        />

        {/* Readability overlays */}
        <div
          className="absolute inset-0 z-[3] bg-gradient-to-r from-black/62 via-black/16 to-black/0"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 z-[4] bg-gradient-to-t from-black/46 via-transparent to-white/10"
          aria-hidden="true"
        />

        {/* Large background text */}
        <div
          className="yoga-wordmark pointer-events-none absolute inset-x-0 bottom-[-1.5vw] z-10 text-center"
          aria-hidden="true"
        >
          <span>BREATHE</span>
        </div>

        {/* Main content */}
        <Container className="relative z-30 flex min-h-[100svh] flex-col justify-start pb-10 pt-28 md:pt-40">
          <div className="max-w-[680px]">
            <p className="yoga-eyebrow mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-normal text-white/75 md:text-sm">
              <span className="h-px w-10 bg-white/60" />
              Yoga · Meditation · Mindfulness
            </p>

            <h1 className="max-w-[670px] font-serif text-[44px] font-medium leading-[0.98] tracking-normal text-[#F8F4EA] sm:text-6xl lg:text-[82px]">
              {words.map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  className="yoga-word-reveal"
                  style={{
                    animationDelay: `${1.05 + index * 0.07}s`,
                  }}
                >
                  {word}&nbsp;
                </span>
              ))}
            </h1>

            <p className="yoga-description mt-6 max-w-lg text-base leading-7 text-white/75 md:text-lg md:leading-8">
              Build strength, improve flexibility and discover inner peace
              through personalised yoga sessions, meditation, breathwork and
              mindful living.
            </p>

            <div className="yoga-cta-wrapper mt-8">
              <a href="#services" className="yoga-cta">
                <span className="yoga-cta-background" />

                <span className="yoga-cta-text">Explore Classes</span>

                <span className="yoga-cta-circle">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    aria-hidden="true"
                  >
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
          </div>

        </Container>
      </Section>
    </>
  );
};

export default Hero;
