export default function Header({ twitter }) {
    const navItems = [
        { label: "Hero", href: "#hero" },
        { label: "Utility", href: "#utility" },
        { label: "Features", href: "#features" },
        { label: "How it works", href: "#how-it-works" },
        { label: "Behavior", href: "#behavior" },
        { label: "Patterns", href: "#patterns" },
        { label: "TRCA", href: "#trca" },
        { label: "Real Use", href: "#real-use" },
        { label: "Roadmap", href: "#roadmap" },
        { label: "FAQ", href: "#faq" },
    ];

    return (
        <header className="mt-[20px] flex w-full max-w-[1420px] mb-[30px] items-center justify-between">
            <img src="/assets/img/logo-full.svg" alt="" />
            <div className="flex w-max p-1.5 rounded-full bg-white border border-[#E9E9E9]">
                <ul className="flex w-full rounded-full bg-white border border-[#E9E9E9] py-3.5 px-6 gap-8 items-center">
                    {navItems.map((item, idx) => (
                        <li key={item.label} className="flex items-center">
                            <a
                                href={item.href}
                                className={"text-[#191919] text-lg font-normal transition-colors hover:text-[#585858]"}
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
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.045993 0L7.32726 9.76528L0 17.7026H1.65L8.06315 10.7513L13.246 17.7026H18.8571L11.1677 7.38955L17.9862 0H16.339L10.4318 6.40062L5.66002 0H0.045993ZM2.47213 1.21669H5.05061L16.4339 16.483H13.8554L2.47213 1.21669Z" fill="#454545"/>
</svg>

                    </div>
                </button>
                 <button className="p-1.5 rounded-full bg-white border border-[#E3E3E3]/70">
                    <div className="flex items-center justify-center p-3 bg-[#3EA0EB] rounded-full  py-3.5 px-8">
                      <span className="text-[#FAFAFA]">
                        Dashboard
                      </span>

                    </div>
                </button>
            </div>
        </header>
    );
}