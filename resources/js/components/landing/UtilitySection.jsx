export default function UtilitySection({text}) {
   
    return (
        <>
           <section id="utility" className="flex flex-col items-center gap-[36px] w-full max-w-[1420px] mt-[140px]">
                <div className="flex flex-col items-center gap-4.5">
                    
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex p-1.5 rounded-full border border-[#A0D6FF] bg-linear-to-br from-[#D1EBFF] to-[#B1DDFF]">
                            <div className="flex rounded-full px-6 py-3 border border-[#8DCEFF] bg-[#A6D8FF]">
<span className="text-[#0392FF]">
   Utility
</span>
                            </div>
                        </div>
                        <h2 className="text-[#00143B] font-medium text-[48px]  text-center">
                            What TRACEA does
                        </h2>
                    </div>
                    <span className="text-xl text-[#232323] text-center ">
                        Below you can see the functions that <i> TRACEA </i>provides.
                    </span>
                </div>
                <div className="flex gap-[26px] w-full justify-center flex-wrap">
                    <div className="flex w-full max-w-[456px] p-[30px] bg-[#FDFDFD] flex-col gap-[25px] border border-white rounded-[36px]">
                        <img src="/assets/img/utility-block-img-1.svg" alt="" />
<span className="text-xl text-[#3F3F3F]">
    Adjusts analytical depth based <br /> on access level.
</span>
                    </div>
                     <div className="flex w-full max-w-[456px] p-[30px] bg-[#FDFDFD] flex-col gap-[25px] border border-white rounded-[36px]">
                        <img src="/assets/img/utility-block-img-2.svg" alt="" />
<span className="text-xl text-[#3F3F3F]">
   Assigns behavioral tags based on trading activity patterns.
</span>
                    </div>
                    <div className="flex w-full max-w-[456px] p-[30px] bg-[#FDFDFD] flex-col gap-[25px] border border-white rounded-[36px]">
                        <img src="/assets/img/utility-block-img-3.svg" alt="" />
<span className="text-xl text-[#3F3F3F]">
   Allows discovery of wallets by selected behavior types.
</span>
                    </div>
                    <div className="flex w-full max-w-[697px] p-[30px] bg-[#FDFDFD] flex-col gap-[25px] border border-white rounded-[36px]">
                        <img src="/assets/img/utility-block-img-4.svg" alt="" />
<span className="text-xl text-[#3F3F3F]">
   Calculates realized PnL, winrate, trade count, <br /> and holding time for Solana wallets. 
</span>
                    </div>
                     <div className="flex w-full max-w-[697px] p-[30px] bg-[#FDFDFD] flex-col gap-[25px] border border-white rounded-[36px]">
                        <img src="/assets/img/utility-block-img-5.svg" alt="" />
<span className="text-xl text-[#3F3F3F]">
  Displays a live market ticker for <br /> background context. 
</span>
                    </div>
                </div>
           </section>
        </>
    )
}