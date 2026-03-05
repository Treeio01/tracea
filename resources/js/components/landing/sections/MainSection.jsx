import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LaunchAppButton from "../../LaunchAppButton";

export default function MainSection() {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ delay: 0.3 });

        tl.from(".hero-title", {
            y: 60,
            opacity: 0,
            filter: "blur(12px)",
            duration: 1,
            ease: "power3.out",
        })
        .from(".hero-subtitle", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
        }, "-=0.5")
        .from(".hero-cta", {
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(2)",
        }, "-=0.3")
        .from(".hero-dashboard-img", {
            y: 120,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        }, "-=0.5")
        .from(".hero-bg-img", {
            scale: 1.1,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
        }, "-=0.8");

        gsap.to(".hero-dashboard-img", {
            y: -30,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
            },
        });

        gsap.to(".hero-bg-img", {
            scale: 1.08,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
            },
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="hero" className="flex overflow-hidden relative w-full items-center justify-center max-w-[1770px] lg:p-[66px] p-[31px] lg:pb-[512px] pb-[160px] lg:pt-[66px] pt-[97px] 1395:rounded-[26px] rounded-[0px] bg-white 1395:border border-none border-[#D9D9D9]">
            <div className="flex z-50 flex-col max-w-[1069px] w-full items-center gap-[42px]">
                <div className="flex flex-col items-center gap-[38px] w-full">
                    <h1 className="hero-title bg-clip-text font-medium text-center bg-linear-to-br from-[#000A1D] to-[#001A4A] lg:text-[70px] text-[34px]">
                        Understand <i> Solana</i> wallets by how they actually trade
                    </h1>
                    <span className="hero-subtitle text-center text-[#656565] lg:text-[20px] text-[10px]">
                        <i>TRACEA</i> analyzes real on-chain trading behavior — PnL, holding time, winrate, and behavioral tags <br /> — to show who is active, how they operate, and with what results.
                    </span>
                </div>
                <LaunchAppButton className="hero-cta flex border rounded-full p-2.5 border-[#EFEFEF] bg-linear-to-br from-[#F9FCFF] to-[#F5F8FA]">
                    <div className="flex p-0.5 bg-linear-to-b from-[#ABCBFF] to-[#0586E8] rounded-full">
                        <div className="flex rounded-full lg:px-9 px-8  lg:py-4.5 py-3.5 bg-linear-to-b from-[#73C2FF] to-[#3EA0EB] drop-shadow-button">
                            <span className="lg:text-[20px] text-[10px] text-white">Launch App</span>
                        </div>
                    </div>
                </LaunchAppButton>
            </div>
            <div className="flex z-50 absolute min-h-[120px] w-full max-w-[1180px] bottom-0 left-1/2 -translate-x-1/2 backdrop-blur-[2.5px]" />
            <img src="/assets/img/main--section-img.png" className="hero-dashboard-img 1395:flex hidden z-40 rounded-[32px] w-full max-w-[1098px] absolute bottom-[-141px] left-1/2 -translate-x-1/2" />
            <img src="/assets/img/main--section-bg.svg" className="hero-bg-img flex w-full absolute bottom-0 left-1/2 -translate-x-1/2" />
        </section>
    );
}
