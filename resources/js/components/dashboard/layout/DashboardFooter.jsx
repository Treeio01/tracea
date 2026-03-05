import { Link } from "@inertiajs/react";
import XIcon from "@/components/landing/icons/XIcon";

export default function DashboardFooter({ twitter }) {
    return (
        <footer className="w-full bg-[#1A1A1A] lg:py-[26px] py-[22px] lg:px-[40px] px-[22px] flex items-center justify-center">
            <div className="flex w-full max-w-[1420px] items-center justify-between">
                <img src="/assets/img/logo-full.svg" className="lg:w-[154px] w-[105px]" alt="" />
                <div className="flex lg:gap-4 gap-2 items-center">
                <a href={twitter || "#"} target="_blank" rel="noopener noreferrer" className={`lg:p-4 p-2 rounded-full bg-[#323232] border border-[#414141] transition-colors ${twitter ? "hover:bg-[#414141]" : "pointer-events-none opacity-70"}`}>
                        <XIcon fill="#E0E0E0" />
                    </a>
                    <Link href="/" className="bg-[#3EA0EB] flex justify-center items-center lg:px-[32px] px-[22px] lg:py-4 py-3 rounded-full hover:opacity-90 transition-opacity active:scale-[0.98]">
                        <span className="text-[#FAFAFA] leading-[100%] lg:text-[16px] text-[10px]">Return to landing page</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
