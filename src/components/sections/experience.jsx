import experience1 from "../../public/assets/experience1.png";
import experience2 from "../../public/assets/experience2.png";
import groupYoga from "../../public/assets/group-yoga.png";
import retreat from "../../public/assets/retreat.png";

import Section from "../ui/section";
import Container from "../ui/container";
import SectionHeading from "../ui/sectionHeading";

const experiences = [
  {
    year: "2014",
    title: "Yoga Journey Began",
    description:
      "Started practicing traditional yoga and meditation, discovering the path of mindfulness, discipline, and holistic living.",
    image: experience1,
  },
  {
    year: "2017",
    title: "Certified Yoga Teacher",
    description:
      "Completed professional Yoga Teacher Training and began helping students build healthier bodies and calmer minds.",
    image: experience2,
  },
  {
    year: "2020",
    title: "Wellness Retreats",
    description:
      "Started leading retreats, workshops, and mindfulness programs focused on physical health, breathwork, and inner peace.",
    image: retreat,
  },
  {
    year: "Today",
    title: "Teaching & Inspiring",
    description:
      "Continuing to guide students through yoga, meditation, and wellness practices while building a growing yoga community.",
    image: groupYoga,
  },
];

const Experience = () => {
  return (
    <Section
      id="experience"
      background="bg-[#EEE7DD]"
    >
      <Container>

        <SectionHeading
          title="My Yoga Journey"
          description="Every milestone reflects years of dedication, continuous learning, and a passion for helping others experience the true essence of yoga."
        />

        <div className="relative mt-16">

          {/* Timeline line */}

          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#D8D1C6] lg:block" />

          {experiences.map((item, index) => (

            <div
              key={index}
              className={`relative ${index !== experiences.length - 1 ? "mb-20" : ""
                } grid items-start gap-12 lg:grid-cols-2 ${index % 2
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
                }`}
            >

              {/* Image */}

              <div className="group overflow-hidden rounded-3xl">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[440px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

              </div>

              {/* Content */}

              <div className="relative">

                {/* Dot */}

                <div className="absolute -left-[73px] top-2 hidden h-4 w-4 rounded-full bg-[#8C6A43] ring-[6px] ring-[#EEE7DD] lg:block" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6A43]">
                  {item.year}
                </span>

                <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#1F1F1F]">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-md text-[17px] leading-relaxed text-[#6B6B6B]">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </Container>
    </Section>
  );
};

export default Experience;