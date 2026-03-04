export default function HowItWorksSection({text}) {
   
    return (
        <>
           <section id="how-it-works" className="flex z-50 flex-col items-center gap-[36px] w-full max-w-[1420px] mt-[140px]">
                <div className="flex flex-col items-center gap-4.5">
                    
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex p-1.5 rounded-full border border-[#A0D6FF] bg-linear-to-br from-[#D1EBFF] to-[#B1DDFF]">
                            <div className="flex rounded-full px-6 py-3 border border-[#8DCEFF] bg-[#A6D8FF]">
<span className="text-[#0392FF]">
   How it works
</span>
                            </div>
                        </div>
                        <h2 className="text-[#00143B] font-medium text-[48px]  text-center">
                           How TRACEA Works
                        </h2>
                    </div>
                    <span className="text-xl text-[#232323] text-center ">
                       TRACEA organizes raw activity into coherent behavioral patterns <br /> through a structured analytical process.
                    </span>
                </div>
                <div className="flex gap-[26px] w-full justify-center flex-wrap relative">
                    <div className="flex absolute left-1/2 top-1/2 -translate-1/2 w-full justify-evenly">
                        <img src="/assets/img/how-it-works-arrow.svg" alt="" />
                        <img src="/assets/img/how-it-works-arrow.svg" alt="" />
                     </div>
                   
                    <div className="flex w-full max-w-[456px] p-[30px] bg-[#FDFDFD] flex-col gap-[25px] border border-white rounded-[36px]">
                        <img src="/assets/img/how-it-works-block-img-1.svg" alt="" />
                         <span className="text-xl relative
                          text-[#3F3F3F]
                          before:w-2 before:h-2
                          before:rounded-full
                           before:bg-[#3EA0EB]
                            before:absolute
                             before:left-[-15px]
                              before:top-[50%] before:-translate-y-1/2">
                            Connect your wallet or open the demo
                        </span>
                    </div>
                    <div className="flex w-full max-w-[456px] p-[30px] bg-[#FDFDFD] flex-col gap-[25px] border border-white rounded-[36px]">
                        <img src="/assets/img/how-it-works-block-img-2.svg" alt="" />
                         <span className="text-xl relative
                          text-[#3F3F3F]
                          before:w-2 before:h-2
                          before:rounded-full
                           before:bg-[#3EA0EB]
                            before:absolute
                             before:left-[-15px]
                              before:top-[50%] before:-translate-y-1/2 whitespace-nowrap">
                           Analyze wallets or explore behavioral cohorts
                        </span>
                    </div>
                    <div className="flex w-full max-w-[456px] p-[30px] bg-[#FDFDFD] flex-col gap-[25px] border border-white rounded-[36px]">
                        <img src="/assets/img/how-it-works-block-img-3.svg" alt="" />
                         <span className="text-xl relative
                          text-[#3F3F3F]
                          before:w-2 before:h-2
                          before:rounded-full
                           before:bg-[#3EA0EB]
                            before:absolute
                             before:left-[-15px]
                              before:top-[50%] before:-translate-y-1/2">
                           Hold TRCA to unlock deeper access
                        </span>
                    </div>
                </div>
           </section>
        </>
    )
}