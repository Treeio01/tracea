import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "../ui/SectionHeader";
import TraceaSmallLogo from "../icons/TraceaSmallLogo";
import RealUseImg from "../illustrations/RealUseImg";
import LaunchAppButton from "../../LaunchAppButton";

export default function RealUseSection() {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.from(".realuse-card", {
            y: 80,
            opacity: 0,
            scale: 0.92,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".realuse-card",
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });

        gsap.from(".realuse-tooltip", {
            y: -20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".realuse-card",
                start: "top 70%",
                toggleActions: "play none none none",
            },
        });

        gsap.from(".realuse-light-left", {
            opacity: 0,
            x: -40,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".realuse-card",
                start: "top 75%",
                toggleActions: "play none none none",
            },
        });

        gsap.from(".realuse-light-right", {
            opacity: 0,
            x: 40,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".realuse-card",
                start: "top 75%",
                toggleActions: "play none none none",
            },
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="real-use" className="flex flex-col items-center gap-9 w-full max-w-[1420px] lg:mt-[140px] mt-[30px]">
            <SectionHeader
                badge="Real Use"
                title="Designed for Real Use"
                subtitle="Built for everyday analysis, not hype cycles."
            />
            <div className="realuse-card flex relative w-full rounded-4xl lg:py-[100px] py-[60px] lg:px-[70px] px-[30px] lg:pb-[70px] pb-[40px] bg-[#1A1A1A] border-10 border-white">
                <img src="/assets/img/real-use-section-light-left.svg" className="realuse-light-left absolute left-0 top-0" alt="" />
                <img src="/assets/img/real-use-section-light-right.png" className="realuse-light-right 1204:flex hidden absolute h-full right-0 bottom-0" alt="" />
                <div className="realuse-tooltip  1204:flex hidden absolute flex-col gap-[6px] max-w-[319px] top-[18px] right-[258px]">
                    <div className="flex p-2.5 bg-linear-to-b from-[#080808] to-[#353535] rounded-[52px]">
                        <span className="text-[#DDDDDD] text-center text-[12px]">
                            Tools that support routine analysis create stronger decision frameworks over time.
                        </span>
                    </div>
                    <RealUseImg />
                </div>
                <TraceaSmallLogo className="absolute bottom-[28px] left-[70px] 1204:flex hidden" />
                <div className="flex flex-col gap-[79px] z-50 max-w-[433px]">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col lg:gap-5 gap-3">
                            <span className="text-white font-semibold lg:text-[32px] text-[24px]">
                                Core Analytics Launch
                            </span>
                            <p className="lg:text-[20px] text-[10px] text-[#EDEDED]">
                                Foundational metrics and behavioral signals
                            </p>
                        </div>
                        <LaunchAppButton className="flex px-8 py-3.5 rounded-full bg-linear-to-r from-[#77C4FF] to-[#3EA0EB] w-max">
                            <span className="text-[#FAFAFA] lg:text-[16px] text-[10px]">Dashboard</span>
                        </LaunchAppButton>
                    </div>
                    <span className="text-[#DDDDDD]">
                        TRACEA is designed to be used regularly, not occasionally. The interface and data focus on repeatable analysis, not one-time excitement.
                    </span>
                </div>
            </div>
        </section>
    );
}
