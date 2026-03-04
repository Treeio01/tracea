export default function Footer({ twitter }) {
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
        <footer className="w-full bg-[#1A1A1A] py-[26px] flex items-center justify-center">
            <div className="flex w-full max-w-[1420px] items-center justify-between">
                <img src="/assets/img/logo-full.svg" alt="" />
                <ul className="flex items-center gap-8">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="text-[#E0E0E0] text-lg font-normal transition-colors hover:text-white"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="flex gap-4 items-center">
                    <a href={twitter} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-[#323232] border border-[#414141] hover:bg-[#414141] transition-colors">
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.045993 0L7.32726 9.76528L0 17.7026H1.65L8.06315 10.7513L13.246 17.7026H18.8571L11.1677 7.38955L17.9862 0H16.339L10.4318 6.40062L5.66002 0H0.045993ZM2.47213 1.21669H5.05061L16.4339 16.483H13.8554L2.47213 1.21669Z" fill="#E0E0E0" />
                        </svg>
                    </a>
                    <button className="bg-[#3EA0EB] px-[32px] py-3.5 rounded-full ">
                        <span className="text-[#FAFAFA] leading-[100%]">
                            Dashboard
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}
