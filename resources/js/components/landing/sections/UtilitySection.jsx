import SectionHeader from "../ui/SectionHeader";
import UtilityBlockImg1 from "../blockSvgs/UtilityBlockImg1";

const UTILITY_ITEMS = [
    {
        image: "/assets/img/utility-block-img-1.svg",
        inlineSvg: UtilityBlockImg1,
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
        <section id="utility" className="flex flex-col items-center gap-[36px] w-full max-w-[1420px] lg:mt-[140px] mt-[30px]">
            <SectionHeader
                badge="Utility"
                title="What TRACEA does"
                subtitle={<>Below you can see the functions that <i>TRACEA</i> provides.</>}
            />
            <div className="utility-grid flex lg:gap-[26px] gap-[10px] w-full justify-center flex-wrap" data-scroll-stagger="0.12" data-scroll-animate-type="slide-up-60" data-scroll-stagger-children=".utility-card">
                {UTILITY_ITEMS.map((item, idx) => (
                    <div
                        key={item.image}
                        className="utility-card flex w-full lg:p-[30px] p-[20px] bg-[#FDFDFD] flex-col lg:gap-[25px] gap-[16px] border border-white lg:rounded-[36px] rounded-[26px]"
                        style={{ maxWidth: item.maxWidth }}
                    >
                        <div className="block-svg-wrap">
                            {item.inlineSvg ? (
                                <item.inlineSvg className="block-svg-img w-full h-auto" />
                            ) : (
                                <div className="block-svg-float" style={{ animationDelay: `${idx * 0.2}s` }}>
                                    <img src={item.image} alt="" className="block-svg-img" />
                                </div>
                            )}
                        </div>
                        <span className="lg:text-xl text-[10px] text-[#3F3F3F]">{item.text}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
