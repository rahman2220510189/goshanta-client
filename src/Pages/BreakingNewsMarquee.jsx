import Marquee from "react-fast-marquee";

const BreakingNewsMarquee = () => {
  return (
    <div className="bg-[#000f1f] border-t border-b border-yellow-500 overflow-hidden flex items-center px-4 space-x-4">
   
      <button
        className="flex-shrink-0 px-4 py-2 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-500 transition"
        onClick={() => alert('Updated!')}
      >
        Update News
      </button>

      <div className="flex-1 overflow-hidden">
        <Marquee
          pauseOnHover={true}
          gradient={false}
          speed={60}
          className="text-yellow-400 font-semibold text-sm md:text-base"
          direction="left"
          delay={0}
        >
          🛫 Travel Alert: Explore top destinations in Bangladesh with goShanta.ai – Book hotels, discover hidden gems, and enjoy smart travel tools today! ✨ Big discounts available for Cox's Bazar, Sylhet, Bandarban & more – Don’t miss out!
        </Marquee>
      </div>
    
    </div>
  );
};

export default BreakingNewsMarquee;
