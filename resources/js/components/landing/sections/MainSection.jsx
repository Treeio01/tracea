export default function MainSection({text}) {
   
    return (
        <>
           <section id="hero" className="flex overflow-hidden relative w-full items-center justify-center max-w-[1770px] p-[66px] pb-[512px] rounded-[26px] bg-white border border-[#D9D9D9]">
                <div className="flex z-50 flex-col max-w-[1069px] w-full items-center  gap-[42px]">
                    <div className="flex flex-col items-center  gap-[38px] w-full">
                        <h1 className="bg-clip-text font-medium text-center bg-linear-to-br from-[#000A1D] to-[#001A4A] text-[70px]">
                            Understand <i> Solana</i> wallets by how they actually trade
                        </h1>
                        <span className="text-center text-[#656565] text-[20px]">
                        <i>
                            
                            TRACEA
                            </i>  analyzes real on-chain trading behavior — PnL, holding time, winrate, and behavioral tags <br /> — to show who is active, how they operate, and with what results.
                        </span>
                    </div>
                    <button className="flex border rounded-full p-2.5 border-[#EFEFEF] bg-linear-to-br from-[#F9FCFF] to-[#F5F8FA]">
                        <div className="flex p-0.5 bg-linear-to-b from-[#ABCBFF] to-[#0586E8] rounded-full">
                            <div className="flex rounded-full px-9 py-4.5 bg-linear-to-b from-[#73C2FF] to-[#3EA0EB] drop-shadow-button">
                                <span className="text-[20px] text-white">Launch App</span>
                            </div>
                        </div>
                    </button>
                </div>
                <div className="flex z-50 absolute min-h-[120px] w-full max-w-[1180px] bottom-0 left-1/2 -translate-x-1/2 backdrop-blur-[2.5px]">
                
                </div>
                <img src="/assets/img/main--section-img.png" className="flex z-40 rounded-[32px] w-full max-w-[1098px] absolute bottom-[-141px] left-1/2 -translate-x-1/2"/>   
                <img src="/assets/img/main--section-bg.svg" className="flex w-full absolute bottom-0 left-1/2 -translate-x-1/2"/>
           </section>
        </>
    )
}