import gallery1 from "../../public/assets/gallery1.png";
import gallery2 from "../../public/assets/gallery2.png";
import gallery3 from "../../public/assets/gallery3.png";
import gallery4 from "../../public/assets/gallery4.png";
import gallery5 from "../../public/assets/gallery5.png";
import gallery6 from "../../public/assets/gallery6.png";
import gallery7 from "../../public/assets/gallery7.png";

import Section from "../ui/section";
import Container from "../ui/container";
import SectionHeading from "../ui/sectionHeading";

const galleryImages = [
  {
    src: gallery1,
    alt: "Yoga teacher meditating in nature",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: gallery2,
    alt: "Private yoga session",
    className: "",
  },
  {
    src: gallery3,
    alt: "Group yoga class",
    className: "",
  },
  {
    src: gallery4,
    alt: "Mountain yoga retreat",
    className: "md:col-span-2",
  },
  {
    src: gallery5,
    alt: "Meditation practice",
    className: "",
  },
  {
    src: gallery6,
    alt: "Sunrise yoga",
    className: "",
  },
  {
    src: gallery7,
    alt: "Wellness retreat",
    className: "md:col-span-3",
  },
];

const Gallery = () => {
  return (
    <Section id="gallery">
      <Container>

        <SectionHeading
          title="Moments of Presence"
          description="A glimpse into yoga classes, retreats, meditation sessions, and meaningful moments shared throughout the journey."
        />

        {/* Gallery */}

        <div className="mt-16 grid auto-rows-[260px] gap-4 md:grid-cols-3">

          {galleryImages.map((image, index) => (

            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl ${image.className}`}
            >

              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Caption */}

              <div className="absolute bottom-0 left-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                <h3 className="font-serif text-lg text-white">
                  {image.alt}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </Container>
    </Section>
  );
};

export default Gallery;