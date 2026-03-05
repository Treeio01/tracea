export default function SectionBadge({ children }) {
    return (
        <div className="flex lg:p-1.5 p-0.5 rounded-full border border-[#A0D6FF] bg-linear-to-br from-[#D1EBFF] to-[#B1DDFF]">
            <div className="flex rounded-full lg:px-6 px-4.5 lg:py-3 py-2 border border-[#8DCEFF] bg-[#A6D8FF]">
                <span className="text-[#0392FF] lg:text-[16px] text-[8px]">{children}</span>
            </div>
        </div>
    );
}
