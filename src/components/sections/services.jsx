import groupYoga from "../../public/assets/group-yoga.png";
import privateYoga from "../../public/assets/private-yoga.png";
import retreat from "../../public/assets/retreat.png";

import Container from "../ui/container";
import Section from "../ui/section";

const services = [
  {
    title: "Private Yoga Sessions",
    meta: "60 min",
    image: privateYoga,
    text: "Personal guidance for posture, flexibility and mindful strength.",
  },
  {
    title: "Group Yoga Classes",
    meta: "75 min",
    image: groupYoga,
    text: "A calm shared practice shaped around breath and community.",
  },
  {
    title: "Wellness Retreats",
    meta: "3-7 days",
    image: retreat,
    text: "Immersive yoga, meditation and nature for deeper restoration.",
  },
];

const Services = () => {
  return (
    <Section id="services" background="bg-[#111111]" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-8 left-0 font-serif text-[22vw] leading-none text-white/[0.05]"
        aria-hidden="true"
      >
        FLOW
      </div>

      <Container className="relative py-20 lg:py-28">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-normal text-[#75C5DE]">
            Classes and retreats
          </p>
          <h2 className="font-serif text-[42px] font-medium leading-none text-[#F8F4EA] sm:text-6xl lg:text-[82px]">
            Choose the practice your body is asking for.
          </h2>
        </div>

        <div className="mt-14 border-y border-white/15">
          {services.map((service) => (
            <article
              key={service.title}
              className="grid gap-5 border-b border-white/15 py-5 last:border-b-0 md:grid-cols-[220px_1fr_auto] md:items-center"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-40 w-full rounded-lg object-cover md:h-32"
              />

              <div>
                <span className="text-sm font-medium text-[#75C5DE]">
                  {service.meta}
                </span>
                <h3 className="mt-2 font-serif text-3xl text-[#F8F4EA]">
                  {service.title}
                </h3>
                <p className="mt-2 max-w-xl text-[16px] leading-6 text-white/65">
                  {service.text}
                </p>
              </div>

              <a href="#contact" className="yoga-mini-arrow" aria-label={`Book ${service.title}`}>
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
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Services;
