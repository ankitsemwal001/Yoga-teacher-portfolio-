import experience1 from "../../public/assets/experience1.png";
import experience2 from "../../public/assets/experience2.png";

import Container from "../ui/container";
import Section from "../ui/section";

const milestones = [
  ["2014", "Yoga journey began"],
  ["2017", "Certified yoga teacher"],
  ["2020", "Retreats and workshops"],
  ["Today", "Teaching and inspiring"],
];

const Experience = () => {
  return (
    <Section id="experience" background="bg-[#E4E4E4]" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-0 font-serif text-[19vw] leading-none text-black/[0.06]"
        aria-hidden="true"
      >
        JOURNEY
      </div>

      <Container className="relative grid min-h-[94svh] gap-10 py-20 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:py-28">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-normal text-[#397F92]">
            Experience
          </p>

          <h2 className="font-serif text-[42px] font-medium leading-none text-[#111111] sm:text-6xl lg:text-[82px]">
            Years of practice shaped into grounded teaching.
          </h2>

          <div className="mt-10 grid border-y border-black/10 md:grid-cols-2">
            {milestones.map(([year, title]) => (
              <div
                key={year}
                className="border-b border-black/10 py-5 md:border-r md:px-5 md:even:border-r-0"
              >
                <span className="text-sm font-semibold text-[#397F92]">
                  {year}
                </span>
                <p className="mt-3 font-serif text-2xl text-[#111111]">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <img
            src={experience1}
            alt="Yoga practice outdoors"
            className="h-64 w-full rounded-lg object-cover md:h-80"
          />
          <img
            src={experience2}
            alt="Yoga teacher guiding practice"
            className="ml-auto h-52 w-4/5 rounded-lg object-cover md:h-64"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Experience;
