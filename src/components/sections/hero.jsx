import image1 from "../../public/assets/image1.png";

import Container from "../ui/container";
import Section from "../ui/section";
import Button from "../ui/button";

const Hero = () => {
    return (
        <Section
            id="home"
            className="flex min-h-screen items-center py-20"
        >
            <Container>

                <div className="grid items-center gap-12 lg:grid-cols-2">

                    {/* Left */}

                    <div>

                        {/* Heading */}

                        <h1 className="font-serif text-[44px] font-semibold leading-[1.1] tracking-tight text-[#1F1F1F] md:text-5xl lg:text-[64px]">
                            Transform Your Mind &
                            <br />
                            Body Through Yoga
                        </h1>

                        {/* Description */}

                        <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-[#6B6B6B]">
                            Helping you build strength, flexibility, and inner
                            peace through personalized yoga sessions,
                            meditation, breathwork, and mindful living.
                        </p>

                        {/* Buttons */}

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Button>
                                Explore Classes
                            </Button>

                            <Button variant="outline">
                                View Services
                            </Button>
                        </div>

                        {/* Stats */}

                        <div className="mt-12 flex flex-wrap items-center gap-8">

                            <div>
                                <h3 className="font-serif text-3xl font-semibold text-[#1F1F1F]">
                                    10+
                                </h3>

                                <p className="mt-1 text-sm text-[#6B6B6B]">
                                    Years Experience
                                </p>
                            </div>

                            <div className="h-10 w-px bg-[#DDD6CB]" />

                            <div>
                                <h3 className="font-serif text-3xl font-semibold text-[#1F1F1F]">
                                    500+
                                </h3>

                                <p className="mt-1 text-sm text-[#6B6B6B]">
                                    Happy Students
                                </p>
                            </div>

                            <div className="h-10 w-px bg-[#DDD6CB]" />

                            <div>
                                <h3 className="font-serif text-3xl font-semibold text-[#1F1F1F]">
                                    30+
                                </h3>

                                <p className="mt-1 text-sm text-[#6B6B6B]">
                                    Retreats & Workshops
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Right */}

                    <div className="relative flex justify-center">

                        <img
                            src={image1}
                            alt="Professional Yoga Teacher practicing yoga in nature"
                            className="h-[600px] w-full max-w-[520px] rounded-3xl object-cover"
                        />

                    </div>

                </div>

            </Container>
        </Section>
    );
};

export default Hero;