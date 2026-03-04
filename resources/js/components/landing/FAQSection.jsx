const FAQS = [
  {
    question: "What does this platform actually do?",
    answer: "TRACEA analyzes real Solana wallet trading behavior and presents it in a structured, readable form.",
    accent: "linear-gradient(to bottom, #8ACCFF, #3EA0EB)",
    border: "#3EA0EB",
    active: true,
  },
  {
    question: "Is this financial advice?",
    answer: "No. TRACEA is an analytical tool. It does not provide investment advice and does not guarantee results.",
    accent: "linear-gradient(to bottom, #FEFEFE, #EDEDED)",
    border: "#EEE",
  },
  {
    question: "How does the token fit in?",
    answer:
      "Holding TRCA unlocks deeper analytics, higher limits, and early access to new features.",
    accent: "linear-gradient(to bottom, #FEFEFE, #EDEDED)",
    border: "#EEE",
  },
  {
    question: "Do I need to hold the token to use it?",
    answer:
      "No. Basic functionality is available without holding TRCA. Advanced access requires the token.",
    accent: "linear-gradient(to bottom, #FEFEFE, #EDEDED)",
    border: "#EEE",
  },
  {
    question: "Which wallets/assets are supported?",
    answer:
      "All public Solana wallets and SPL tokens with sufficient activity.",
    accent: "linear-gradient(to bottom, #FEFEFE, #EDEDED)",
    border: "#EEE",
  },
  {
    question: "How often is the data updated?",
    answer:
      "Data updates regularly based on available on-chain information and market feeds.",
    accent: "linear-gradient(to bottom, #FEFEFE, #EDEDED)",
    border: "#EEE",
  },
];

export default function FAQSection() {
  return (
    <>
      <section id="faq" className="flex justify-between w-full max-w-[1420px] mt-[140px] mb-[21px]">
        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-col items-start gap-4.5">
            <div className="flex flex-col items-start gap-6">
              <div className="flex p-1.5 rounded-full border border-[#A0D6FF] bg-linear-to-br from-[#D1EBFF] to-[#B1DDFF]">
                <div className="flex rounded-full px-6 py-3 border border-[#8DCEFF] bg-[#A6D8FF]">
                  <span className="text-[#0392FF]">FAQ</span>
                </div>
              </div>
              <h2 className="text-[#00143B] font-medium text-[48px] text-center">
                Frequently Asked Questions
              </h2>
            </div>
            <span className="text-xl text-[#232323] text-center ">
              How TRACEA works, what it shows, and what it doesn’t.
            </span>
          </div>
          <svg width="364" height="78" viewBox="0 0 364 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M49.7607 65.6758L29.6172 77.8379V32.4326L49.7607 20.2705V65.6758ZM255.45 11.4473C258.157 11.4473 260.672 11.7877 262.992 12.4688C265.312 13.1011 267.439 14.0498 269.373 15.3145C271.355 16.5793 273.144 18.1367 274.739 19.9854L268.503 26.1152C267.391 24.8017 266.182 23.6821 264.877 22.7578C263.62 21.8336 262.194 21.128 260.599 20.6416C259.052 20.1552 257.336 19.9121 255.45 19.9121C252.115 19.9121 249.069 20.6904 246.313 22.2471C243.558 23.8038 241.358 25.9929 239.714 28.8145C238.07 31.5874 237.249 34.896 237.249 38.7393C237.249 42.5336 238.07 45.8416 239.714 48.6631C241.358 51.4847 243.558 53.6747 246.313 55.2314C249.069 56.788 252.115 57.5664 255.45 57.5664C258.496 57.5664 261.179 56.9338 263.5 55.6689C265.869 54.4041 267.972 52.6773 269.809 50.4883L276.117 56.5449C274.474 58.4907 272.588 60.193 270.461 61.6523C268.334 63.0631 266.014 64.1336 263.5 64.8633C260.986 65.6417 258.303 66.0312 255.45 66.0312C251.631 66.0312 248.053 65.3504 244.718 63.9883C241.43 62.5775 238.553 60.6315 236.088 58.1504C233.622 55.6693 231.713 52.7739 230.359 49.4658C229.006 46.1578 228.329 42.5823 228.329 38.7393C228.329 34.896 229.006 31.3198 230.359 28.0117C231.713 24.7038 233.622 21.8091 236.088 19.3281C238.553 16.847 241.43 14.9256 244.718 13.5635C248.054 12.1527 251.631 11.4473 255.45 11.4473ZM138.222 21.0801H123.718V64.8633H114.799V21.0801H100.296V12.6152H138.222V21.0801ZM160.657 12.6152C163.993 12.6153 166.918 13.3207 169.432 14.7314C171.994 16.0936 174 17.9906 175.45 20.4229C176.9 22.8552 177.626 25.6524 177.626 28.8145C177.626 31.1008 177.166 33.2172 176.248 35.1631C175.378 37.0602 174.121 38.7389 172.478 40.1982C170.834 41.6576 168.876 42.8009 166.604 43.6279C166.41 43.6944 166.213 43.7566 166.016 43.8174L180.236 64.3525V64.8633H170.012L156.309 44.7959H150.939V64.8633H142.021V12.6152H160.657ZM229.801 64.8633H220.011L215.4 51.874H194.935L190.352 64.8633H180.562L200.068 12.6152H210.221L229.801 64.8633ZM313.33 21.0801H290.053V34.5068H311.01V42.9717H290.053V56.3984H313.33V64.8633H281.133V12.6152H313.33V21.0801ZM363.743 64.8633H353.954L349.344 51.874H328.878L324.295 64.8633H314.505L334.012 12.6152H344.164L363.743 64.8633ZM202.969 29.1064L197.818 43.7012H212.5L207.32 29.1064L205.435 22.9766H204.927L202.969 29.1064ZM336.912 29.1064L331.762 43.7012H346.443L341.264 29.1064L339.378 22.9766H338.87L336.912 29.1064ZM150.939 36.623H160.512C162.059 36.623 163.437 36.2826 164.646 35.6016C165.902 34.9205 166.893 33.9957 167.618 32.8281C168.343 31.612 168.706 30.2502 168.706 28.7422C168.706 27.38 168.392 26.1148 167.764 24.9473C167.184 23.7797 166.289 22.8313 165.08 22.1016C163.872 21.3233 162.421 20.9336 160.729 20.9336H150.939V36.623ZM67.2793 20.2705H0L12.0859 0H79.3652L67.2793 20.2705Z" fill="url(#paint0_radial_0_1792)" />
            <defs>
              <radialGradient id="paint0_radial_0_1792" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-20.5 -10.165) rotate(8.71746) scale(379.383 81.1846)">
                <stop stopColor="#F6FBFF" />
                <stop offset="1" stopColor="#3EA0EB" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="flex w-full max-w-[648px] flex-col gap-4">
          {FAQS.map((faq, idx) => (
            <div
              key={faq.question}
              className={`flex relative px-12 py-10 gap-6 flex-col bg-[#FDFDFD] rounded-[36px] transition-all
                ${faq.active
                  ? "border border-[#3EA0EB] shadow-[0px_15px_14.5px_0px_rgba(0,0,0,0.07)]"
                  : "border border-white"
                }
              `}
            >
              <div
                className="flex absolute right-[36px] top-[36px] rounded-full z-50 w-[33px] h-[33px] border-4 border-white"
                style={{
                  background: faq.accent,
                  boxShadow: "0px 5px 10.1px 0px rgba(0,0,0,0.15)",
                }}
              ></div>
              <span className="text-[22px] font-semibold text-[#393939] leading-[100%]">
                {faq.question}
              </span>
              <p className="leading-[140%] text-[#676767]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}