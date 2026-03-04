import SectionHeader from "../ui/SectionHeader";
import TraceaTextLogo from "../icons/TraceaTextLogo";

const FAQS = [
    {
        question: "What does this platform actually do?",
        answer: "TRACEA analyzes real Solana wallet trading behavior and presents it in a structured, readable form.",
        accent: "linear-gradient(to bottom, #8ACCFF, #3EA0EB)",
        border: "#3EA0EB",
        active: true,
    },
    {
        question: "Is this financial advice?",
        answer: "No. TRACEA is an analytical tool. It does not provide investment advice and does not guarantee results.",
        accent: "linear-gradient(to bottom, #FEFEFE, #EDEDED)",
        border: "#EEE",
    },
    {
        question: "How does the token fit in?",
        answer: "Holding TRCA unlocks deeper analytics, higher limits, and early access to new features.",
        accent: "linear-gradient(to bottom, #FEFEFE, #EDEDED)",
        border: "#EEE",
    },
    {
        question: "Do I need to hold the token to use it?",
        answer: "No. Basic functionality is available without holding TRCA. Advanced access requires the token.",
        accent: "linear-gradient(to bottom, #FEFEFE, #EDEDED)",
        border: "#EEE",
    },
    {
        question: "Which wallets/assets are supported?",
        answer: "All public Solana wallets and SPL tokens with sufficient activity.",
        accent: "linear-gradient(to bottom, #FEFEFE, #EDEDED)",
        border: "#EEE",
    },
    {
        question: "How often is the data updated?",
        answer: "Data updates regularly based on available on-chain information and market feeds.",
        accent: "linear-gradient(to bottom, #FEFEFE, #EDEDED)",
        border: "#EEE",
    },
];

export default function FAQSection() {
    return (
        <section id="faq" className="flex justify-between w-full max-w-[1420px] mt-[140px] mb-[21px]">
            <div className="flex flex-col gap-[60px]">
                <SectionHeader
                    badge="FAQ"
                    title="Frequently Asked Questions"
                    subtitle="How TRACEA works, what it shows, and what it doesn't."
                    align="left"
                />
                <TraceaTextLogo />
            </div>
            <div className="flex w-full max-w-[648px] flex-col gap-4">
                {FAQS.map((faq) => (
                    <div
                        key={faq.question}
                        className={`flex relative px-12 py-10 gap-6 flex-col bg-[#FDFDFD] rounded-[36px] transition-all ${
                            faq.active
                                ? "border border-[#3EA0EB] shadow-[0px_15px_14.5px_0px_rgba(0,0,0,0.07)]"
                                : "border border-white"
                        }`}
                    >
                        <div
                            className="flex absolute right-[36px] top-[36px] rounded-full z-50 w-[33px] h-[33px] border-4 border-white"
                            style={{
                                background: faq.accent,
                                boxShadow: "0px 5px 10.1px 0px rgba(0,0,0,0.15)",
                            }}
                        />
                        <span className="text-[22px] font-semibold text-[#393939] leading-[100%]">
                            {faq.question}
                        </span>
                        <p className="leading-[140%] text-[#676767]">
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
