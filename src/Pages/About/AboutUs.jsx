import img from '../../assets/Photo/riyad.jpeg'
import img2 from '../../assets/Photo/cover1.webp'
import { useEffect, useState } from 'react';
import BreakingNewsMarquee from '../BreakingNewsMarquee'
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
const imeges = [
    'https://i.ibb.co/p6vH18fZ/490142076-2045732989242824-4736064451218163796-n.jpg',
    'https://i.ibb.co/1f5065rv/500154894-2081425595673563-1399754680260875465-n.jpg',
    'https://i.ibb.co/rfTXf5ym/500328337-2082139415602181-2362723280476030363-n.jpg']

const image = [
    ' https://i.ibb.co/tMMC2842/487206764-2527892197607574-5581046599572723156-n.jpg',
    'https://i.ibb.co/Y4N9y4wV/487508238-2528396034223857-8405543182329867361-n.jpg',
    'https://i.ibb.co/xSTBRFRP/download-11.jpg',

]
const AboutUs = () => {
    const [showMore, setShowMore] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [currentImages, setCurrentImages] = useState(0);
    const [showInput, setShowInput] = useState(false);
    const [message, setMessage] = useState(' ');

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % imeges.length)
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImages((prev) => (prev + 1) % image.length)
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleSend = () => {
        if (message.trim()) {
            alert(`Your message has been sent:\n"${message}"`);
            setMessage('')
            setShowInput(false)
        }
    };


    return (
        <div >
            <div className="relative bg-cover bg-center h-[90vh] animate-bgFadeZoom" style={{ backgroundImage: `url(${img})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 flex flex-col justify-center items-center text-white h-full px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-1 mt-20">About goShanta.Ai</h1>
                    <p className="text-lg md:text-xl mb-5 mt-4">Get know goShanta closer and make it happen</p>
                    <BreakingNewsMarquee />
                </div>
            </div>

            <div className='flex flex-col justify-center bg-[#000f1f] items-center'>
                <h1 className='uppercase text-yellow-50 text-4xl md:text-6xl font-bold mt-20 mb-1'>
                    Our Travel Partner
                </h1>
                <h4 className="text-lg text-stone-50 md:text-xl mb-10 mt-5 text-center px-4 max-w-2xl">
                    We collaborate with several other travel services to increase your comfort when using our services.
                </h4>


                <div className="flex flex-wrap justify-center gap-4 mb-20">
                    <a
                        href="https://www.biman-airlines.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105"
                    >
                        Biman Airlines
                    </a>

                    <a
                        href="https://www.marriott.com/offers/members-get-even-more-in-june-and-july-off-170156"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105"
                    >
                        Marriott Hotels
                    </a>

                    <a
                        href="https://www.paralympic.org/cycling"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105"
                    >
                        Paralympic Cycling
                    </a>

                    <a
                        href="https://www.booking.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105"
                    >
                        Booking.com
                    </a>
                </div>
            </div>
            <section className="bg-[#000f1f] px-6 py-16 md:px-20">

                <div className="flex flex-col md:flex-row items-center gap-20">
                    <img
                        src={img2}
                        alt="forest path"
                        className="rounded-[50%] w-72 h-96 object-cover shadow-lg transition-transform duration-500 hover:scale-105"
                    />
                    <div>
                        <h2 className="text-yellow-500 uppercase text-sm mb-4">--- Our History</h2>
                        <h3 className="text-4xl text-yellow-500  font-semibold mb-6 mt-6 ">goShanta Travel Agency </h3>

                        <p className="text-gray-300 md:w-2/3 text-lg">
                            In the ever-evolving world of travel and tourism, goShanta Travel Agency stands as a beacon of excellence, innovation, and reliability, redefining how people explore the world. Established with a vision to make travel seamless, meaningful, and memorable, goShanta has grown into a globally recognized brand that blends cutting-edge technology with the timeless charm of human hospitality.
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
                                Our agency is built on the philosophy that travel is not just about reaching a destination—it's about experiencing the journey with comfort, confidence, and a sense of wonder. With a presence that extends from the bustling cities of Asia to the serene landscapes of Europe and the adventurous terrains of the Americas, goShanta curates journeys that match every traveler’s dream—be it leisure, luxury, adventure, wellness, or cultural exploration. Our extensive network of trusted airline partners, five-star hotel chains, and local travel providers ensures that every itinerary is crafted to perfection. Whether you’re booking a quick weekend escape or planning a cross-continental expedition, our intuitive platform powered by smart search, personalized suggestions, and real-time support makes the experience smooth and enjoyable. We take pride in our user-friendly website and mobile app, which not only allow users to book flights and hotels with a few clicks but also discover local attractions, hidden gems, and handpicked recommendations tailored to your preferences and budget. At goShanta, sustainability and ethical travel are more than just buzzwords—they are core values embedded in our operations. We actively promote eco-friendly accommodations, partner with community-led tourism initiatives, and educate our clients about responsible travel practices. Our curated "Shanta Select" packages feature handpicked destinations with a focus on wellness, nature, and cultural immersion, helping travelers reconnect with themselves and the world around them. Behind the scenes, our multilingual support team works tirelessly across time zones to offer round-the-clock assistance, ensuring your peace of mind at every step. We also offer exclusive benefits for our loyal members through goShanta Rewards—free upgrades, early check-ins, personalized concierge services, and access to private experiences that turn a simple trip into an unforgettable story. As we expand into new markets and embrace the future of smart tourism with AI-driven recommendations and virtual trip planning tools, our core mission remains unchanged: to deliver joy, ease, and discovery to travelers worldwide. With thousands of glowing reviews and returning customers from over 60 countries, goShanta is more than a travel agency—it’s a trusted companion on your journey to explore, connect, and create memories that last a lifetime. Whether you're planning your honeymoon in the Maldives, a family retreat in the Swiss Alps, a solo trek through Nepal, or a cultural immersion in Morocco, goShanta promises to guide you every step of the way with excellence, care, and a spirit of adventure. Come travel the world, the goShanta way—where every trip begins with trust and ends with a smile.

                            </p>

                        </div>


                    </div>



                </div>
            </section>

            <section className="bg-[#000f1f] px-6 py-16 md:px-20">
                <div className='flex flex-col justify-center bg-[#000f1f] items-center'>
                    <h2 className="text-4xl  mb-8 font-bold text-yellow-400 animate-pulse">Contact Admin Panel</h2>

                </div>
                <div className="min-h-screen bg-gradient-to-br from-[#000f1f] to-[#1a1a2e] flex items-center justify-center px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl w-full bg-white/5 p-10 rounded-3xl shadow-2xl border border-yellow-400">
                        <div className="flex justify-center">
                            <img
                                src={imeges[currentImage]}
                                alt="Admin"
                                className="w-80 h-80 object-cover rounded-full border-8 border-yellow-500 shadow-lg transition duration-500 ease-in-out hover:scale-105"
                            />
                        </div>

                        <div className="text-white space-y-6">
                            <p className="text-lg">Hi! I’m <span className="font-semibold">MD Naymur Rahman</span>, <br />Senior Travel Coordinator at goShanta.ai. I help ensure every trip is smooth, safe, and unforgettable.</p>
                            <p className="text-gray-300">For collaboration, feedback, or support, feel free to reach out to me.</p>


                            <div className="flex gap-4 text-yellow-400 text-2xl">
                                <a href="

                                   https://www.facebook.com/naymourrahman.riyad" target="_blank" rel="noreferrer" className="hover:text-yellow-300 transition"><FaFacebook /></a>
                                <a href="https://www.facebook.com/naymourrahman.riyad" target="_blank" rel="noreferrer" className="hover:text-yellow-300 transition"><FaInstagram /></a>
                                <a href="https://www.facebook.com/naymourrahman.riyad" target="_blank" rel="noreferrer" className="hover:text-yellow-300 transition"><FaLinkedin /></a>
                                <a href="rahman22205101894@diu.edu.bd" className="hover:text-yellow-300 transition"><FaEnvelope /></a>
                            </div>

                            {
                                showInput ? (
                                    <div className="flex items-center gap-2 mt-6">
                                        <input
                                            type="text"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Write your message..."
                                            className="flex-1 px-4 py-2 rounded-full text-black focus:outline-none border border-yellow-500 shadow-md"
                                        />
                                        <button onClick={handleSend} className="bg-yellow-400 p-3 rounded-full hover:bg-yellow-500 transition">
                                            <FaPaperPlane className="text-black" />
                                        </button>
                                    </div>
                                )
                                    : (
                                        <button
                                            onClick={() => setShowInput(true)}
                                            className="mt-6 px-6 py-3 bg-yellow-400 text-black font-bold rounded-full shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105"
                                        >
                                            Send Message
                                        </button>
                                    )
                            }
                        </div>
                    </div>
                </div>

                <div className="min-h-screen bg-gradient-to-br from-[#000f1f] to-[#1a1a2e] flex items-center justify-center px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl w-full bg-white/5 p-10 rounded-3xl shadow-2xl border border-yellow-400">

                     
                    <div className="text-white space-y-6 order-2 md:order-1">
                            <p className="text-lg">
                                Hi! I’m <span className="font-semibold">Nurunnabi Reachad</span>,<br /> Senior Travel Coordinator at goShanta.ai. I help ensure every trip is smooth, safe, and unforgettable.
                            </p>
                            <p className="text-gray-300">For collaboration, feedback, or support, feel free to reach out to me.</p>

                            <div className="flex gap-4 text-yellow-400 text-2xl">
                                <a href="https://www.facebook.com/md.nurunnabi.reachad" target="_blank" rel="noreferrer" className="hover:text-yellow-300 transition"><FaFacebook /></a>
                                <a href="https://www.facebook.com/md.nurunnabi.reachad" target="_blank" rel="noreferrer" className="hover:text-yellow-300 transition"><FaInstagram /></a>
                                <a href="https://www.facebook.com/md.nurunnabi.reachad" target="_blank" rel="noreferrer" className="hover:text-yellow-300 transition"><FaLinkedin /></a>
                                <a href="mailto:rahman22205101894@diu.edu.bd" className="hover:text-yellow-300 transition"><FaEnvelope /></a>
                            </div>

                            {showInput ? (
                                <div className="flex items-center gap-2 mt-6">
                                    <input
                                        type="text"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Write your message..."
                                        className="flex-1 px-4 py-2 rounded-full text-black focus:outline-none border border-yellow-500 shadow-md"
                                    />
                                    <button onClick={handleSend} className="bg-yellow-400 p-3 rounded-full hover:bg-yellow-500 transition">
                                        <FaPaperPlane className="text-black" />
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setShowInput(true)}
                                    className="mt-6 px-6 py-3 bg-yellow-400 text-black font-bold rounded-full shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105"
                                >
                                    Send Message
                                </button>
                            )}
                        </div>

                 
                        <div className="flex justify-center order-1 md:order-2">
                            <img
                                src={image[currentImages]}
                                alt="Admin"
                                className="w-80 h-80 object-cover rounded-full border-8 border-yellow-500 shadow-lg transition duration-500 ease-in-out hover:scale-105"
                            />
                        </div>
                    </div>
                </div>


            </section>



        </div>

    );
};

export default AboutUs;