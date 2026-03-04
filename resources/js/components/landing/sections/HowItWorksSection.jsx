import SectionHeader from "../ui/SectionHeader";

const STEPS = [
    {
        image: "/assets/img/how-it-works-block-img-1.svg",
        text: "Connect your wallet or open the demo",
    },
    {
        image: "/assets/img/how-it-works-block-img-2.svg",
        text: "Analyze wallets or explore behavioral cohorts",
        extraClass: "whitespace-nowrap",
    },
    {
        image: "/assets/img/how-it-works-block-img-3.svg",
        text: "Hold TRCA to unlock deeper access",
    },
];

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="flex z-50 flex-col items-center gap-[36px] w-full max-w-[1420px] mt-[140px]">
            <SectionHeader
                badge="How it works"
                title="How TRACEA Works"
                subtitle={<>TRACEA organizes raw activity into coherent behavioral patterns <br /> through a structured analytical process.</>}
            />
            <div className="flex gap-[26px] w-full justify-center flex-wrap relative">
                <div className="flex absolute left-1/2 top-1/2 -translate-1/2 w-full justify-evenly">
                    <img src="/assets/img/how-it-works-arrow.svg" alt="" />
                    <img src="/assets/img/how-it-works-arrow.svg" alt="" />
                </div>
                {STEPS.map((step) => (
                    <div
                        key={step.image}
                        className="flex w-full max-w-[456px] p-[30px] bg-[#FDFDFD] flex-col gap-[25px] border border-white rounded-[36px]"
                    >
                        <img src={step.image} alt="" />
                        <span className={`text-xl relative text-[#3F3F3F] before:w-2 before:h-2 before:rounded-full before:bg-[#3EA0EB] before:absolute before:left-[-15px] before:top-[50%] before:-translate-y-1/2 ${step.extraClass || ""}`}>
                            {step.text}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
