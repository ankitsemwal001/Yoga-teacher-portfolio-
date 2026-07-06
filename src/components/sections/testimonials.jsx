import testimonial1 from "../../public/assets/testimonial1.png";
import testimonial2 from "../../public/assets/testimonial2.png";
import testimonial3 from "../../public/assets/testimonial3.png";

import Container from "../ui/container";
import Section from "../ui/section";

const students = [
  [testimonial1, "Sarah Johnson"],
  [testimonial2, "Emma Wilson"],
  [testimonial3, "David Miller"],
];

const Testimonials = () => {
  return (
    <Section id="testimonials" background="bg-[#111111]" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -bottom-8 right-0 font-serif text-[22vw] leading-none text-white/[0.05]"
        aria-hidden="true"
      >
        TRUST
      </div>

      <Container className="relative grid min-h-[88svh] gap-10 py-20 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:py-28">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-normal text-[#75C5DE]">
            Student words
          </p>

          <blockquote className="font-serif text-[42px] font-medium leading-none text-[#F8F4EA] sm:text-6xl lg:text-[82px]">
            "Every session leaves me calmer, stronger and more connected."
          </blockquote>

          <p className="mt-7 text-lg text-white/60">Sarah Johnson</p>
        </div>

        <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
          {students.map(([image, name]) => (
            <img
              key={name}
              src={image}
              alt={name}
              className="h-40 w-full rounded-lg object-cover lg:h-44"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
