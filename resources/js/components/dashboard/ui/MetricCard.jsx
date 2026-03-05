export default function MetricCard({ title, description, value, icon: Icon }) {
    return (
        <div className="flex flex-col w-full max-w-[351px] lg:gap-4.5 gap-4.5 lg:px-6 px-4.5 lg:py-5.5 py-2.5 bg-white border-2 border-[#F3F5F5] lg:rounded-[26px] rounded-[16px]">
            <div className="flex items-center justify-between w-full">
                <span className="lg:text-2xl text-[20px] leading-[120%] text-[#282828]">{title}</span>
                {Icon && <Icon className="shrink-0 lg:w-[40px] lg:h-[40px] w-[20px] h-[20px]" />}
            </div>
            <svg width="306" height="1" viewBox="0 0 306 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0.5H306" stroke="#E1E1E1" strokeDasharray="3 3" />
            </svg>
            <div className="flex items-center justify-between w-full">
                <span className="lg:text-sm text-[10px] leading-[120%] text-[#5B5B5B] whitespace-pre-line">{description}</span>
                <div className="flex rounded-[37px] bg-[#3EA0EB] lg:py-2 py-1.5 lg:px-2.5 px-3">
                    <span className="lg:text-[16px] text-[10px] leading-[120%] text-[#FCFCFC]">{value}</span>
                </div>
            </div>
        </div>
    );
}
