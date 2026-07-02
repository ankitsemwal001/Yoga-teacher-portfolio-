import { Star } from "lucide-react";

import testimonial1 from "../../public/assets/testimonial1.png";
import testimonial2 from "../../public/assets/testimonial2.png";
import testimonial3 from "../../public/assets/testimonial3.png";

import Section from "../ui/section";
import Container from "../ui/container";
import SectionHeading from "../ui/sectionHeading";
import Card from "../ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Private Yoga Student",
    image: testimonial1,
    review:
      "Practicing yoga here has completely transformed my daily routine. Every session leaves me feeling calmer, stronger, and more connected with myself.",
  },
  {
    name: "Emma Wilson",
    role: "Retreat Participant",
    image: testimonial2,
    review:
      "The retreat was one of the most peaceful experiences of my life. The teaching style is thoughtful, inspiring, and welcoming for everyone.",
  },
  {
    name: "David Miller",
    role: "Group Class Student",
    image: testimonial3,
    review:
      "Every class is a perfect balance of movement, mindfulness, and relaxation. I've gained confidence, flexibility, and a healthier lifestyle.",
  },
];

const Testimonials = () => {
  return (
    <Section
      id="testimonials"
      background="bg-[#EEE7DD]"
    >
      <Container>

        <SectionHeading
          title="What My Students Say"
          description="Every journey is unique. Here are a few words shared by students who have experienced yoga, mindfulness, and wellness sessions."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (

            <Card
              key={index}
              className="flex h-full flex-col p-8"
            >

              {/* Quote */}

              <span className="font-serif text-5xl leading-none text-[#8C6A43]">
                "
              </span>

              {/* Review */}

              <p className="mt-4 flex-1 text-[17px] leading-relaxed text-[#6B6B6B]">
                {item.review}
              </p>

              {/* Rating */}

              <div className="mt-6 flex gap-1">

                {[...Array(5)].map((_, i) => (

                  <Star
                    key={i}
                    size={15}
                    fill="currentColor"
                    className="text-[#8C6A43]"
                  />

                ))}

              </div>

              {/* Divider */}

              <div className="my-6 h-px bg-[#EEE7DD]" />

              {/* User */}

              <div className="flex items-center gap-3">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div>

                  <h3 className="text-sm font-semibold text-[#1F1F1F]">
                    {item.name}
                  </h3>

                  <p className="text-sm text-[#6B6B6B]">
                    {item.role}
                  </p>

                </div>

              </div>

            </Card>

          ))}

        </div>

      </Container>
    </Section>
  );
};

export default Testimonials;