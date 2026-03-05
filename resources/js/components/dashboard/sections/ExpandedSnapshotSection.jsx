export default function ExpandedSnapshotSection({ twitterUrl }) {
    return (
        <div className="flex relative overflow-hidden flex-col gap-3.5 border-8 border-white rounded-[36px] lg:p-[37px] p-[31px] items-center">
            <img src="/assets/img/dashboard-blur.png" className="absolute h-full w-full object-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />
            <div className="flex flex-col lg:gap-3 gap-2.5 items-center z-50">
                <span className="lg:text-[32px] text-[22px] leading-[120%] text-[#262626] font-semibold">Expanded Snapshot</span>
                <span className="lg:text-[16px] text-[10px] leading-[140%] text-[#5B5B5B]">Requires holding TRCA</span>
            </div>
            <a
                href={twitterUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`z-50 flex border rounded-full p-2.5 border-[#EFEFEF] bg-linear-to-br from-[#F9FCFF] to-[#F5F8FA] ${twitterUrl ? "hover:opacity-90 transition-opacity" : "pointer-events-none opacity-70"}`}
            >
                <div className="flex p-0.5 bg-linear-to-b from-[#ABCBFF] to-[#0586E8] rounded-full">
                    <div className="flex rounded-full px-9 py-4.5 bg-linear-to-b from-[#73C2FF] to-[#3EA0EB] drop-shadow-button">
                        <span className="lg:text-[20px] text-[8px] text-white leading-[100%]">Buy TRCA on pump.fun</span>
                    </div>
                </div>
            </a>
        </div>
    );
}
