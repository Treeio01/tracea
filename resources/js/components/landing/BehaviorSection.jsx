import BehaviorBg from "./BehaviorBg";

export default function BehaviorSection({text}) {
   
    return (
        <>
           <section id="behavior" className="flex relative flex-col items-center gap-[258px] w-full max-w-[1420px] mt-[140px]">
                <BehaviorBg className="absolute top-1/2 left-1/2 -translate-1/2"/>
                <div className="flex self-end flex-col gap-4.5 w-full max-w-[433px] z-50">
                    <span className="text-xl text-[#232323]"> 
                        Looking at behavior helps reduce overreaction to short-term price noise and provides a clearer view of participation quality.
                    </span>
                    <button className="bg-white flex w-max border items-baseline gap-2 border-[#C8C8C8] rounded-full py-4 px-9">
                        <span className="text-black ">
                            Visit
                        </span>
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.407927 8.48931L8.48915 0.408093M8.48915 0.408093L1.41808 0.408092M8.48915 0.408093L8.48915 7.47916" stroke="white" stroke-width="0.816326" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M0.407927 8.48931L8.48915 0.408093M8.48915 0.408093L1.41808 0.408092M8.48915 0.408093L8.48915 7.47916" stroke="black" stroke-width="0.816326" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </button>
                </div>
                <div className="flex self-start flex-col items-start gap-4.5 max-w-[755px] z-50">
                    
                    <div className="flex flex-col items-start gap-6">
                        <div className="flex p-1.5 rounded-full border border-[#A0D6FF] bg-linear-to-br from-[#D1EBFF] to-[#B1DDFF]">
                            <div className="flex rounded-full px-6 py-3 border border-[#8DCEFF] bg-[#A6D8FF]">
<span className="text-[#0392FF]">
  Behavior
</span>
                            </div>
                        </div>
                        <h2 className="text-[#00143B] font-medium text-[48px]  text-left">
                            Behavior over Price
                        </h2>
                    </div>
                    <span className="text-xl text-[#232323] text-left ">
                    <b>   Price moves fast. Behavior changes slower. </b> TRACEA focuses on how wallets act over time — how long they hold, how often they trade, and whether outcomes are repeatable.
                    </span>
                </div>

           </section>
        </>
    )
}