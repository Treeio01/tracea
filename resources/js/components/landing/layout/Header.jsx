import { NAV_ITEMS } from "../data/navItems";
import XIcon from "../icons/XIcon";

export default function Header() {
    return (
        <header className="mt-[20px] flex w-full max-w-[1420px] mb-[30px] items-center justify-between">
            <img src="/assets/img/logo-full.svg" alt="" />
            <div className="flex w-max p-1.5 rounded-full bg-white border border-[#E9E9E9]">
                <ul className="flex w-full rounded-full bg-white border border-[#E9E9E9] py-3.5 px-6 gap-8 items-center">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.label} className="flex items-center">
                            <a
                                href={item.href}
                                className="text-[#191919] text-lg font-normal transition-colors hover:text-[#585858]"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex gap-3 items-stretch">
                <button className="p-1.5 rounded-full bg-white border border-[#E3E3E3]/70 items-stretch">
                    <div className="flex items-center justify-center p-4 bg-white border border-[#E3E3E3]/70 rounded-full">
                        <XIcon />
                    </div>
                </button>
                <button className="p-1.5 rounded-full bg-white border border-[#E3E3E3]/70">
                    <div className="flex items-center justify-center p-3 bg-[#3EA0EB] rounded-full py-3.5 px-8">
                        <span className="text-[#FAFAFA]">Dashboard</span>
                    </div>
                </button>
            </div>
        </header>
    );
}
