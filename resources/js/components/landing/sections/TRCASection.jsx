import SectionHeader from "../ui/SectionHeader";

const TRCA_ITEMS = [
    { image: "/assets/img/trca-block-img-1.svg", text: "Longer history windows", maxWidth: "336px" },
    { image: "/assets/img/trca-block-img-2.svg", text: "Larger wallet lists per query", maxWidth: "336px" },
    { image: "/assets/img/trca-block-img-3.svg", text: "Saved presets and watchlists", maxWidth: "336px" },
    { image: "/assets/img/trca-block-img-4.svg", text: "Advanced tag combinations", maxWidth: "336px" },
    { image: "/assets/img/trca-block-img-5.svg", text: "Early access to new analytical modules", maxWidth: "698px" },
    { image: "/assets/img/trca-block-img-6.svg", text: "Priority access to upcoming features", maxWidth: "698px" },
];

export default function TRCASection() {
    return (
        <section id="trca" className="flex flex-col items-center gap-[36px] w-full max-w-[1422px] mt-[140px]">
            <SectionHeader
                badge="TRCA"
                title="What TRCA holders unlock"
                subtitle="From isolated wallets to behavioral patterns."
            />
            <div className="flex gap-[26px] w-full justify-center flex-wrap">
                {TRCA_ITEMS.map((item) => (
                    <div
                        key={item.image}
                        className="flex overflow-hidden w-full relative px-[30px] py-[210px] pb-[34px] bg-[#FDFDFD] flex-col gap-[25px] border border-white rounded-[36px]"
                        style={{ maxWidth: item.maxWidth }}
                    >
                        <div className="flex w-full absolute bottom-0 min-h-[111px] left-1/2 -translate-x-1/2 bg-linear-to-b from-white/0 via-white to-white z-[45]" />
                        <img src={item.image} className="absolute left-1/2 top-1/2 -translate-1/2 z-40" alt="" />
                        <span className="text-xl text-[#3F3F3F] z-50">{item.text}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
