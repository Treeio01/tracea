export default function OverviewTitle() {
    return (
        <div className="flex flex-col gap-2.5 max-w-[626px]">
            <h1 id="overview" className="font-semibold text-[28px] lg:text-[48px] leading-[120%] text-[#00143B]">
                Overview
            </h1>
            <span className="text-[10px] lg:text-[20px] text-[#232323]">
                <i>TRACEA</i> transforms Solana&apos;s on-chain data chaos into understandable trader profiles and patterns.
            </span>
        </div>
    );
}
