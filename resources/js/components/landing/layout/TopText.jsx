export default function TopText({text}) {
   
    return (
        <>
            <div className="flex w-full p-2.5 justify-center items-center bg-top-text-gradient">
                <span className="text-white text-[10px]">
                {text}
                </span>
            </div>
        </>
    )
}