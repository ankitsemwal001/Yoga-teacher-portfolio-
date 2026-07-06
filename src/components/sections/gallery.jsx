import gallery1 from "../../public/assets/gallery1.png";
import gallery2 from "../../public/assets/gallery2.png";
import gallery3 from "../../public/assets/gallery3.png";
import gallery4 from "../../public/assets/gallery4.png";
import gallery6 from "../../public/assets/gallery6.png";

import Container from "../ui/container";
import Section from "../ui/section";

const images = [
  [gallery1, "Meditation in nature", "md:col-span-2 md:row-span-2"],
  [gallery2, "Private practice", ""],
  [gallery3, "Group class", ""],
  [gallery4, "Mountain retreat", "md:col-span-2"],
  [gallery6, "Sunrise flow", ""],
];

const Gallery = () => {
  return (
    <Section id="gallery" background="bg-[#F4F1E8]" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-6 right-0 font-serif text-[16vw] leading-none text-black/[0.06]"
        aria-hidden="true"
      >
        STILLNESS
      </div>

      <Container className="relative py-20 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-normal text-[#397F92]">
              Gallery
            </p>
            <h2 className="font-serif text-[42px] font-medium leading-none text-[#111111] sm:text-6xl lg:text-[78px]">
              Quiet moments from practice, retreats and class.
            </h2>
          </div>
          <p className="max-w-xl text-[17px] leading-relaxed text-[#55524D] lg:justify-self-end">
            A visual rhythm of breath, landscape, movement and community. Same
            calm world as the hero, shown through smaller moments.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[190px] gap-3 md:grid-cols-3 md:auto-rows-[230px]">
          {images.map(([src, label, className]) => (
            <figure
              key={label}
              className={`group relative overflow-hidden rounded-lg ${className}`}
            >
              <img
                src={src}
                alt={label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <figcaption className="absolute bottom-4 left-4 font-serif text-xl text-white">
                {label}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Gallery;
