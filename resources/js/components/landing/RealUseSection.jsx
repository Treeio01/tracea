import RealUseImg from "./RealUseImg";

export default function RealUseSection({text}) {
   
    return (
        <>
           <section id="real-use" className="flex flex-col items-center gap-9 w-full max-w-[1420px] mt-[140px]">
                <div className="flex flex-col items-center gap-4.5">
                    
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex p-1.5 rounded-full border border-[#A0D6FF] bg-linear-to-br from-[#D1EBFF] to-[#B1DDFF]">
                            <div className="flex rounded-full px-6 py-3 border border-[#8DCEFF] bg-[#A6D8FF]">
<span className="text-[#0392FF]">
  Real Use
</span>
                            </div>
                        </div>
                        <h2 className="text-[#00143B] font-medium text-[48px]  text-center">
                           Designed for Real Use
                        </h2>
                    </div>
                    <span className="text-xl text-[#232323] text-center ">
                     Built for everyday analysis, not hype cycles.
                    </span>
                </div>
                <div className="flex relative w-full rounded-4xl py-[100px] px-[70px] pb-[70px] bg-[#1A1A1A] border-10 border-white ">
                    <img src="/assets/img/real-use-section-light-left.svg" className="absolute left-0 top-0" alt="" />
                     <img src="/assets/img/real-use-section-light-right.png" className="absolute h-full right-0 bottom-0" alt="" />
                    <div className="flex absolute flex-col gap-[6px] max-w-[319px] top-[18px] right-[258px]">
                        <div className="flex p-2.5 bg-linear-to-b from-[#080808] to-[#353535] rounded-[52px]">
                            <span className="text-[#DDDDDD] text-center text-[12px]">
                                Tools that support routine analysis create stronger decision frameworks over time.
                            </span>
                        </div>
                        <RealUseImg/>

                    </div>
                    <svg className="absolute bottom-[28px] left-[70px]" width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.9951 27.7295L12.4961 32.8652V13.6934L20.9951 8.55859V27.7295ZM28.3867 8.55859H0L5.09961 0H33.4854L28.3867 8.55859Z" fill="#242424"/>
</svg>

                    <div className="flex flex-col gap-[79px] z-50 max-w-[433px]">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-5">
                                <span className="text-white font-semibold text-[32px]">
                                    Core Analytics Launch
                                </span>
                                <p className="text-[20px] text-[#EDEDED]">
                                    Foundational metrics and behavioral signals
                                </p>
                            </div>
                            <button className="px-8 py-3.5 rounded-full bg-linear-to-r from-[#77C4FF] to-[#3EA0EB] w-max">
                                <span className="text-[#FAFAFA]"> 
                                    Dashboard
                                </span>
                            </button>
                        </div>
                        <span className="text-[#DDDDDD]">
                            TRACEA is designed to be used regularly, not occasionally. The interface and data focus on repeatable analysis, not one-time excitement.
                        </span>
                    </div>
                </div>
           </section>
        </>
    )
}