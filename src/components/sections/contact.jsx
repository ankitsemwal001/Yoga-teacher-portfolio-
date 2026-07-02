import {
  Mail,
  Phone,
  MapPin,
  AtSign,
  ArrowRight,
} from "lucide-react";

import Section from "../ui/section";
import Container from "../ui/container";
import SectionHeading from "../ui/sectionHeading";
import Card from "../ui/card";
import Button from "../ui/button";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@yogaportfolio.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Rishikesh, Uttarakhand, India",
  },
  {
    icon: AtSign,
    title: "Instagram",
    value: "@yourinstagram",
  },
];

const Contact = () => {
  return (
    <Section id="contact">
      <Container>

        <SectionHeading
          title="Let's Begin Your Yoga Journey"
          description="Whether you're looking for private sessions, group classes, wellness retreats, or simply want to learn more, I'd love to hear from you."
        />

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-2">

          {/* Contact Info */}

          <Card
            hover={false}
            className="h-full bg-[#EEE7DD] p-8"
          >

            <h3 className="font-serif text-3xl font-semibold text-[#1F1F1F]">
              Get in Touch
            </h3>

            <p className="mt-4 text-[17px] leading-relaxed text-[#6B6B6B]">
              Feel free to reach out for collaborations, yoga classes,
              retreats, workshops, or any wellness-related inquiries.
            </p>

            <div className="mt-8 space-y-6">

              {contactInfo.map((item, index) => {

                const Icon = item.icon;

                return (

                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">

                      <Icon
                        size={18}
                        className="text-[#8C6A43]"
                      />

                    </div>

                    <div>

                      <h4 className="text-sm font-semibold text-[#1F1F1F]">
                        {item.title}
                      </h4>

                      <p className="mt-0.5 text-[17px] text-[#6B6B6B]">
                        {item.value}
                      </p>

                    </div>

                  </div>

                );

              })}

            </div>

          </Card>

          {/* Contact Form */}

          <Card
            hover={false}
            className="p-8"
          >

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl border border-[#DDD6CB] bg-[#FAF9F7] px-5 py-3.5 text-[17px] outline-none transition-colors duration-200 focus:border-[#8C6A43]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border border-[#DDD6CB] bg-[#FAF9F7] px-5 py-3.5 text-[17px] outline-none transition-colors duration-200 focus:border-[#8C6A43]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-2xl border border-[#DDD6CB] bg-[#FAF9F7] px-5 py-3.5 text-[17px] outline-none transition-colors duration-200 focus:border-[#8C6A43]"
              />

              <textarea
                rows={5}
                placeholder="Tell me about your goals..."
                className="w-full resize-none rounded-2xl border border-[#DDD6CB] bg-[#FAF9F7] px-5 py-3.5 text-[17px] outline-none transition-colors duration-200 focus:border-[#8C6A43]"
              />

              <Button className="w-full">

                Send Message

                <ArrowRight size={16} />

              </Button>

            </form>

          </Card>

        </div>

      </Container>
    </Section>
  );
};

export default Contact;