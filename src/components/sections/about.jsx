import image2 from "../../public/assets/image2.png";

import Section from "../ui/section";
import Container from "../ui/container";
import SectionHeading from "../ui/sectionHeading";
import Card from "../ui/card";

const About = () => {
    return (
        <Section
            id="about"
            background="bg-[#EEE7DD]"
        >
            <Container>

                <div className="grid items-start gap-12 lg:grid-cols-2">

                    {/* Image */}

                    <div className="relative">

                        <img
                            src={image2}
                            alt="Professional Yoga Teacher"
                            className="h-[560px] w-full rounded-3xl object-cover"
                        />

                    </div>

                    {/* Content */}

                    <div>

                        <SectionHeading
                            align="left"
                            title="Sharing the Practice of Yoga with Purpose & Presence"
                            description="Yoga is more than movement—it's a lifelong journey of self-awareness, balance, and mindful living."
                        />

                        <p className="mt-6 text-[17px] leading-relaxed text-[#6B6B6B]">
                            Through years of teaching and continuous learning,
                            I have guided students of all levels to build
                            strength, improve flexibility, reduce stress,
                            and cultivate inner peace through mindful practice.
                        </p>

                        <p className="mt-5 text-[17px] leading-relaxed text-[#6B6B6B]">
                            My teaching combines traditional yoga philosophy
                            with modern wellness practices, creating sessions
                            that are welcoming, accessible, and deeply
                            transformative for every student.
                        </p>

                        {/* Philosophy Card */}

                        <Card
                            hover={false}
                            className="mt-8 p-8"
                        >

                            <h3 className="font-serif text-2xl text-[#1F1F1F]">
                                Teaching Philosophy
                            </h3>

                            <p className="mt-4 text-[17px] leading-relaxed text-[#6B6B6B]">
                                Every student is unique. My goal is to create
                                a calm, supportive environment where people
                                can grow physically, mentally, and spiritually
                                at their own pace.
                            </p>

                        </Card>

                    </div>

                </div>

            </Container>
        </Section>
    );
};

export default About;