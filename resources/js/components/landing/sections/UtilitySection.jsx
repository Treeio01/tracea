import SectionHeader from "../ui/SectionHeader";

const UTILITY_ITEMS = [
    {
        image: "/assets/img/utility-block-img-1.svg",
        text: <>Adjusts analytical depth based <br /> on access level.</>,
        maxWidth: "456px",
    },
    {
        image: "/assets/img/utility-block-img-2.svg",
        text: "Assigns behavioral tags based on trading activity patterns.",
        maxWidth: "456px",
    },
    {
        image: "/assets/img/utility-block-img-3.svg",
        text: "Allows discovery of wallets by selected behavior types.",
        maxWidth: "456px",
    },
    {
        image: "/assets/img/utility-block-img-4.svg",
        text: <>Calculates realized PnL, winrate, trade count, <br /> and holding time for Solana wallets.</>,
        maxWidth: "697px",
    },
    {
        image: "/assets/img/utility-block-img-5.svg",
        text: <>Displays a live market ticker for <br /> background context.</>,
        maxWidth: "697px",
    },
];

export default function UtilitySection() {
    return (
        <section id="utility" className="flex flex-col items-center gap-[36px] w-full max-w-[1420px] mt-[140px]">
            <SectionHeader
                badge="Utility"
                title="What TRACEA does"
                subtitle={<>Below you can see the functions that <i>TRACEA</i> provides.</>}
            />
            <div className="flex gap-[26px] w-full justify-center flex-wrap">
                {UTILITY_ITEMS.map((item) => (
                    <div
                        key={item.image}
                        className="flex w-full p-[30px] bg-[#FDFDFD] flex-col gap-[25px] border border-white rounded-[36px]"
                        style={{ maxWidth: item.maxWidth }}
                    >
                        <img src={item.image} alt="" />
                        <span className="text-xl text-[#3F3F3F]">{item.text}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
