import { useState } from "react";
import Content from "@/components/dashboard/Content";
import Sidebar from "@/components/dashboard/layout/Sidebar";
import DashboardFooter from "@/components/dashboard/layout/DashboardFooter";
import MobileMenu from "@/components/dashboard/layout/MobileMenu";
import TopText from "@/components/landing/layout/TopText";
import { Head, usePage } from "@inertiajs/react";

export default function Dashboard() {
    const { props } = usePage();
    const [menuOpen, setMenuOpen] = useState(false);
    const address = props.wallet ?? props.auth?.user?.address;
    const walletAddress = address ? `${address.slice(0, 3)}...${address.slice(-3)}` : "9xQ...kP2";

    return (
        <>
            <Head title="Dashboard" />
            <div className="flex flex-col w-full min-h-screen">
                <TopText text={props.settings?.text} />
                <div className="flex lg:flex-row flex-col lg:gap-[50px] gap-[12px] h-full w-full">
                    <header className="lg:hidden w-full bg-white justify-between flex items-center py-3 px-[22px] border-b border-[#EFEFEF]">
                        <img src="/assets/img/logo-full.svg" className="w-[81px]" alt="" />
                        <button
                            onClick={() => setMenuOpen(true)}
                            className="p-2 -mr-2 rounded-lg hover:bg-[#F5F5F5] active:scale-95 transition-transform"
                            aria-label="Open menu"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="4" fill="#3EA0EB" />
                                <rect x="4" y="7" width="16" height="2" rx="1" fill="#F2F2F2" />
                                <rect x="4" y="11" width="16" height="2" rx="1" fill="#F2F2F2" />
                                <rect x="4" y="15" width="16" height="2" rx="1" fill="#F2F2F2" />
                            </svg>
                        </button>
                    </header>
                    <MobileMenu
                        isOpen={menuOpen}
                        onClose={() => setMenuOpen(false)}
                        twitterUrl={props.settings?.twitter}
                    />
                    <Sidebar />
                    <Content
                        walletAddress={walletAddress}
                        defaultWalletAddress={address ?? ""}
                        twitterUrl={props.settings?.twitter}
                    />
                </div>
                <DashboardFooter twitter={props.settings?.twitter} />
            </div>
        </>
    );
}
