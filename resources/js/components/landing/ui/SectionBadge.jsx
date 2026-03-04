export default function SectionBadge({ children }) {
    return (
        <div className="flex p-1.5 rounded-full border border-[#A0D6FF] bg-linear-to-br from-[#D1EBFF] to-[#B1DDFF]">
            <div className="flex rounded-full px-6 py-3 border border-[#8DCEFF] bg-[#A6D8FF]">
                <span className="text-[#0392FF]">{children}</span>
            </div>
        </div>
    );
}
