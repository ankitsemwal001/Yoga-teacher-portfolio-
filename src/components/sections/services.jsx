import { ArrowRight, Clock3, Users } from "lucide-react";

import privateYoga from "../../public/assets/private-yoga.png";
import groupYoga from "../../public/assets/group-yoga.png";
import retreat from "../../public/assets/retreat.png";

import Section from "../ui/section";
import Container from "../ui/container";
import SectionHeading from "../ui/sectionHeading";
import Card from "../ui/card";
import Button from "../ui/button";

const services = [
    {
        title: "Private Yoga Sessions",
        description:
            "Personalized one-on-one yoga sessions designed around your goals, flexibility, posture, and overall well-being.",
        image: privateYoga,
        duration: "60 Min",
        students: "1 Person",
    },
    {
        title: "Group Yoga Classes",
        description:
            "Practice together in an encouraging environment where movement, breath, and mindfulness create a stronger community.",
        image: groupYoga,
        duration: "75 Min",
        students: "10+ Students",
    },
    {
        title: "Wellness Retreats",
        description:
            "Immersive retreats combining yoga, meditation, breathwork, nature, and mindful living for complete rejuvenation.",
        image: retreat,
        duration: "3–7 Days",
        students: "Small Groups",
    },
];

const Services = () => {
    return (
        <Section id="services">
            <Container>
                <SectionHeading
                    title="Transform Your Mind, Body & Spirit"
                    description="Every session is thoughtfully designed to help you build strength, improve flexibility, reduce stress, and create lasting balance in everyday life."
                />

                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="group flex h-full flex-col"
                        >
                            {/* Image */}

                            <div className="overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="aspect-[2/1] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}

                            <div className="flex flex-1 flex-col p-6">

                                <h3 className="font-serif text-2xl font-semibold text-[#1F1F1F]">
                                    {service.title}
                                </h3>

                                <p className="mt-4 flex-1 text-[17px] leading-relaxed text-[#6B6B6B]">
                                    {service.description}
                                </p>

                                {/* Meta */}

                                <div className="mt-6 flex items-center justify-between border-t border-[#EEE7DD] pt-5">

                                    <div className="flex items-center gap-2 text-[#8C6A43]">

                                        <Clock3 size={16} />

                                        <span className="text-sm font-medium">
                                            {service.duration}
                                        </span>

                                    </div>

                                    <div className="flex items-center gap-2 text-[#8C6A43]">

                                        <Users size={16} />

                                        <span className="text-sm font-medium">
                                            {service.students}
                                        </span>

                                    </div>

                                </div>

                                {/* CTA */}

                                <div className="mt-6">

                                    <Button
                                        variant="ghost"
                                        className="px-0 py-0"
                                    >
                                        Learn More

                                        <ArrowRight
                                            size={16}
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />

                                    </Button>

                                </div>

                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Services;