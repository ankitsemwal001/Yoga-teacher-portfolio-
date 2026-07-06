import image2 from "../../public/assets/image2.png";

import Container from "../ui/container";
import Section from "../ui/section";

const About = () => {
  return (
    <Section id="about" background="bg-[#F4F1E8]" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -bottom-10 right-0 font-serif text-[18vw] leading-none text-black/[0.06]"
        aria-hidden="true"
      >
        PRESENCE
      </div>

      <Container className="relative grid min-h-[92svh] items-center gap-10 py-20 md:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden rounded-lg">
          <img
            src={image2}
            alt="Yoga teacher in a calm practice space"
            className="h-[58svh] w-full object-cover md:h-[72svh]"
          />
        </div>

        <div className="md:pl-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-normal text-[#397F92]">
            About the practice
          </p>

          <h2 className="font-serif text-[42px] font-medium leading-none text-[#111111] sm:text-6xl lg:text-[78px]">
            Purposeful yoga, taught with breath and presence.
          </h2>

          <div className="mt-8 grid gap-5 border-y border-black/10 py-7 text-[17px] leading-relaxed text-[#55524D] md:grid-cols-2">
            <p>
              Years of practice and teaching shape sessions that build
              strength, flexibility, calm and inner awareness.
            </p>
            <p>
              Traditional yoga philosophy meets modern wellness in a supportive
              space where students move at their own pace.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
