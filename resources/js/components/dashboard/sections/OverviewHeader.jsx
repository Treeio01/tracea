import XIcon from "@/components/landing/icons/XIcon";

export default function OverviewHeader({ walletAddress = "9xQ...kP2", twitterUrl }) {
    return (
        <>
        <header className="p-1.5 lg:flex hidden rounded-full w-full justify-between bg-white border border-[#EFEFEF]">
            <div className="flex gap-[20px] items-center">
                <a
                    href={twitterUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-1.5 rounded-full bg-[#F9FCFF] border border-[#E9E9E9]/70 items-stretch ${twitterUrl ? "hover:opacity-90 transition-opacity" : "pointer-events-none opacity-70"}`}
                >
                    <div className="flex items-center justify-center p-3 bg-[#F9FCFF] border border-[#E9E9E9]/70 rounded-full">
                        <XIcon />
                    </div>
                </a>
                <a href="#overview" className="leading-[100%] text-sm text-[#494949] hover:text-[#262626] transition-colors">
                    Overview
                </a>
                <span className="leading-[100%] text-sm text-[#494949] opacity-60 blur-[2px] pointer-events-none select-none">
                    Behavior Discovery
                </span>
                <span className="leading-[100%] text-sm text-[#494949] opacity-60 blur-[2px] pointer-events-none select-none">
                    Wallet Analysis
                </span>
            </div>
            <div className="flex gap-[14px] items-center">
                <span>Wallet:</span>
                <div className="flex py-3.5 px-8 gap-2.5 bg-[#3EA0EB] rounded-full">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.0547 0.0428929C12.387 -0.0189271 12.7285 -0.0140984 13.0586 0.0585179C13.3887 0.131148 13.7008 0.269345 13.9756 0.464768C14.2504 0.66019 14.4819 0.909416 14.6572 1.19621C14.8325 1.48295 14.9484 1.80172 14.9961 2.13371C14.8554 2.11587 14.7131 2.10731 14.5713 2.10735H4.7207C4.16289 2.23016 4.22913 3.01055 4.87598 3.01067H14.5713C15.2152 3.01136 15.8328 3.26603 16.2881 3.7177C16.7431 4.16928 16.9992 4.78132 17 5.41985V12.6474C16.9993 13.2861 16.7433 13.8989 16.2881 14.3505C15.8328 14.8022 15.2152 15.0559 14.5713 15.0566H2.42871C1.78483 15.0559 1.16721 14.8022 0.711914 14.3505C0.2567 13.8989 0.000703027 13.2861 0 12.6474V5.41985C0.000113519 5.32466 0.00728356 5.23022 0.0185547 5.13664V4.21574C0.0185547 3.44428 0.426604 2.18051 1.80762 1.79485C1.8892 1.77057 1.97227 1.75031 2.05664 1.7343H2.06641C2.09828 1.7284 2.13027 1.72332 2.16211 1.7177L12.0547 0.0428929ZM12.5322 7.85246C12.2967 7.89894 12.08 8.01407 11.9102 8.18254C11.7405 8.35092 11.625 8.56528 11.5781 8.79875C11.5313 9.03243 11.5556 9.27493 11.6475 9.49504C11.7394 9.71506 11.8951 9.90276 12.0947 10.0351C12.2943 10.1673 12.5286 10.2381 12.7686 10.2382C13.0906 10.2382 13.4002 10.1116 13.6279 9.88567C13.8555 9.65982 13.9833 9.35343 13.9834 9.0341C13.9834 8.79585 13.9117 8.56228 13.7783 8.36418C13.6449 8.16631 13.4551 8.01193 13.2334 7.92082C13.0116 7.82976 12.7676 7.80604 12.5322 7.85246Z" fill="#FAFAFA"/>
                    </svg>
                    <span className="leading-[100%] text-[#FAFAFA]">{walletAddress}</span>
                </div>
            </div>
        </header>
        </>
    );
}
