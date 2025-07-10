
import bgImage from '../assets/Photo/bg.jpeg'
import cover from '../assets/Photo/cover.webp'
import cover1 from '../assets/Photo/cover1.webp'
import cover2 from '../assets/Photo/cover3.jpg'
import { useState } from "react";
const Home = () => {
    const [showMore, setShowMore] = useState(false)
    const [showMore1, setShowMore1] = useState(false)
    const [showMore2, setShowMore2] = useState(false)

    return (
        <div className=" bg-[#001f3f] text-white min-h-screen animate-bgFadeZoom">
            <section
                className="relative h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-6">
                    <p className="text-yellow-400 uppercase tracking-wide">Welcome</p>
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight mt-4">          Explore New Horizons <br /> & Discover The World
                    </h1>
                    <p className="mt-6 text-lg animate-bounce">Scroll Down ↓</p>
                </div>
                <div className="absolute left-5 top-1/3 text-white text-sm space-y-3">
                    <p>Start</p>
                    <p>01</p>
                    <p>02</p>
                    <p>03</p>
                </div>
                <div className="absolute right-5 top-1/2 text-white space-y-3  ">
                    <p className="rotate-90 origin-left ">Follow us</p>
                    <div className="flex flex-col space-y-2 mt-2 items-center">

                        <a href="">
                            <svg
                                xmlns="https://www.facebook.com/naymourrahman.riyad"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6 ml-3 hover:text-yellow-400"
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.403a4.918 4.918 0 0 1 1.675 1.088 4.918 4.918 0 0 1 1.088 1.675c.163.457.347 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.427a4.902 4.902 0 0 1-1.088 1.675 4.902 4.902 0 0 1-1.675 1.088c-.457.163-1.257.347-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.403a4.918 4.918 0 0 1-1.675-1.088 4.918 4.918 0 0 1-1.088-1.675c-.163-.457-.347-1.257-.403-2.427-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.427a4.902 4.902 0 0 1 1.088-1.675 4.902 4.902 0 0 1 1.675-1.088c.457-.163 1.257-.347 2.427-.403 1.266-.058 1.646-.07 4.85-.07zm0 1.838c-3.168 0-3.548.012-4.796.07-1.032.048-1.59.217-1.96.363a3.093 3.093 0 0 0-1.12.728 3.093 3.093 0 0 0-.728 1.12c-.146.37-.315.928-.363 1.96-.058 1.248-.07 1.628-.07 4.796s.012 3.548.07 4.796c.048 1.032.217 1.59.363 1.96a3.093 3.093 0 0 0 .728 1.12 3.093 3.093 0 0 0 1.12.728c.37.146.928.315 1.96.363 1.248.058 1.628.07 4.796.07s3.548-.012 4.796-.07c1.032-.048 1.59-.217 1.96-.363a3.093 3.093 0 0 0 1.12-.728 3.093 3.093 0 0 0 .728-1.12c.146-.37.315-.928.363-1.96.058-1.248.07-1.628.07-4.796s-.012-3.548-.07-4.796c-.048-1.032-.217-1.59-.363-1.96a3.093 3.093 0 0 0-.728-1.12 3.093 3.093 0 0 0-1.12-.728c-.37-.146-.928-.315-1.96-.363-1.248-.058-1.628-.07-4.796-.07zm0 4.838a5.999 5.999 0 1 1 0 11.998 5.999 5.999 0 0 1 0-11.998zm0 9.835a3.836 3.836 0 1 0 0-7.673 3.836 3.836 0 0 0 0 7.673zm6.406-10.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/naymourrahman.riyad">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6 ml-3 hover:text-yellow-400"
                            >
                                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.675V1.325C24 .597 23.403 0 22.675 0z" />
                            </svg>
                        </a>

                    </div>
                </div>
            </section>

            <section className="bg-[#000f1f] px-6 py-16 md:px-20">


                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div>
                        <h2 className="text-yellow-500 uppercase text-sm mb-4">--- Get Started</h2>
                        <h3 className="text-4xl font-semibold mb-6 mt-6 ">What Kind of Traveler Are You?</h3>
                        <p className="text-gray-300 md:w-2/3 text-lg">
                            If what you look for in your perfect destination are translucent lakes, impressive mountains,
                            enchanting forests or quiet beaches, you know nature holds a special place in your heart. You like to
                            spend your days taking nature walks, exploring the countryside or just being in awe of nature.
                            Rather than flying to the most popular cities, you would rather choose to land in an offbeat,
                            untouched destination with lush green or snowy white backdrops seeking solace and inner peace.
                        </p>
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="inline-block mt-6 text-yellow-400 hover:underline"
                        >
                            {showMore ? "Show Less ←" : "Read More →"}
                        </button>


                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showMore ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0"
                            }`}>
                            <p className="text-gray-300 leading-relaxed text-base">
                                Traveling is more than just a change in geography — it is a journey into the self, a quiet rebellion against routine, and an open invitation to feel alive. For many, the allure of unknown paths, quiet mountaintops, or hidden beaches holds a deeper meaning than just sightseeing. You are someone who doesn’t just visit a place; you absorb it, let it whisper stories through the wind, through the scent of earth after rain, through the laughter of local children running past fields. You find beauty not in five-star hotels but in early morning mist, dew on wildflowers, and the distant call of birds echoing through valleys. Each destination is not a checklist, but a canvas where you leave behind footprints and take away soulprints.

                                Unlike conventional tourists, you are not driven by the urge to capture every moment on camera. Instead, you live them. You believe that the real essence of a place is found in its ordinary — a grandmother selling fruits in the market, a child chasing a kite near the river, an old man silently brewing tea by a fire. You seek those quiet, unspoken moments that city noise often drowns. Travel, for you, is healing. It’s where your restless heart meets peace — in the rustling of trees, in the lull of waves, in the warm smile of a stranger who doesn't speak your language but understands your kindness.

                                You often find yourself choosing mountain paths over highways, boat rides over planes, and walking trails over shortcuts. Because you know that the slow way reveals the most. You listen — not just to people, but to places. You stay longer, talk deeper, and care more. You support small homestays, eat local meals, and respect the customs of the places you visit. You do not leave behind trash; you leave behind kindness. Your idea of luxury is not marble bathtubs and infinity pools — it’s a clear sky full of stars, a hammock by a forest, or a moment of solitude on a misty hilltop.

                                In a world chasing speed and convenience, your heart beats for authenticity and depth. You don’t just go places — you feel them, carry them within you. Your stories are not Instagram reels, but heartbeats. You don’t travel to escape life; you travel so life doesn’t escape you. You believe in meaningful miles, in moments that cannot be bought or Googled. You return home not with souvenirs, but with perspective — a better understanding of the world, of people, and of yourself. And in every trip, you don’t just find a new place — you find a new piece of who you are meant to be.

                            </p>

                        </div>
                    </div>


                    <img
                        src={cover}
                        alt="forest path"
                        className="rounded-[50%] w-72 h-96 object-cover shadow-lg transition-transform duration-500 hover:scale-105"
                    />
                </div>






            </section>
            <section className="bg-[#000f1f] px-6 py-16 md:px-20">

                <div className="flex flex-col md:flex-row items-center gap-20">
                   <img
                        src={cover1}
                        alt="forest path"
                        className="rounded-[50%] w-72 h-96 object-cover shadow-lg transition-transform duration-500 hover:scale-105"
                    />
                    <div>
                        <h2 className="text-yellow-500 uppercase text-sm mb-4">--- where you go is the key</h2>
                        <h3 className="text-4xl font-semibold mb-6 mt-6 ">Understand Your Map & Timing</h3>
                        <p className="text-gray-300 md:w-2/3 text-lg">
                            One of the most overlooked yet critical aspects of any hiking or travel adventure is understanding your map and managing your timing. A good map is more than just a navigation tool — it tells the story of the terrain you’re about to encounter. Learning to read topographic lines, elevation changes, water sources, and trail junctions can prevent you from getting lost and help you mentally prepare for challenging sections.
                        </p>
                        <button
                            onClick={() => setShowMore1(!showMore1)}
                            className="inline-block mt-6 text-yellow-400 hover:underline"
                        >
                            {showMore1 ? "Show Less ←" : "Read More →"}
                        </button>


                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showMore1 ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0"
                            }`}>
                            <p className="text-gray-300 leading-relaxed text-base">
                                GPS devices are useful, but maps don’t run out of battery — they are your reliable backup. Equally important is timing. Always start early, especially for longer hikes, to avoid being stuck on a trail after dark. Consider your pace, rest stops, and time for unexpected delays like weather changes or detours. Estimate how long the route will realistically take *you*, not just based on what the internet says. Remember, rushing through nature defeats the purpose of the journey. When you understand your route and pace it properly, you travel with confidence, avoid risks, and enjoy every step without stress.

                            </p>

                        </div>
                    </div>

                </div>






            </section>
            <section className="bg-[#000f1f] px-6 py-16 md:px-20">

                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div>
                        <h2 className="text-yellow-500 uppercase text-sm mb-4">--- hiking eddentials</h2>
                        <h3 className="text-4xl font-semibold mt-6 mb-6">Picking The Right Hiking Gear</h3>
                        <p className="text-gray-300 md:w-2/3 text-lg">
                            Picking the right hiking gear is essential not just for comfort, but for safety and enjoyment during any outdoor adventure. Whether you're embarking on a short forest trail or a multi-day mountain trek, your gear can make or break the experience.      Start with a pair of well-fitted hiking boots that provide ankle support and have good grip — slippery or rocky terrains demand reliability underfoot.
                        </p>
                        <button
                            onClick={() => setShowMore2(!showMore2)}
                            className="inline-block mt-6 text-yellow-400 hover:underline"
                        >
                            {showMore2 ? "Show Less ←" : "Read More →"}
                        </button>


                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showMore2 ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0"
                            }`}>
                            <p className="text-gray-300 leading-relaxed text-base">
                                Layering is key when it comes to clothing: moisture-wicking base layers, insulating mid-layers like fleece or down, and a waterproof, breathable outer shell will prepare you for changing weather conditions. Don’t forget a comfortable, properly-sized backpack with padded straps to carry your essentials like a first-aid kit, water bottle or hydration system, energy snacks, navigation tools (map, compass, or GPS), and a lightweight flashlight or headlamp. Depending on the terrain, trekking poles can also reduce stress on your knees and improve balance. Always pack a whistle, a multitool, sunscreen, and bug spray — small items, big importance. Remember: smart hikers plan for the unexpected, and the right gear isn’t about having the most expensive stuff, it’s about having the *right* stuff that suits your route, weather, and personal needs. Choose wisely, pack light but smart, and your hike will reward you with not just views, but peace of mind.


                            </p>

                        </div>
                    </div>
                    <img
                        src={cover2}
                        alt="forest path"
                        className="rounded-[50%] w-72 h-96 object-cover shadow-lg transition-transform duration-500 hover:scale-105"
                    />



                </div>






            </section>
        </div>
    );


};

export default Home;