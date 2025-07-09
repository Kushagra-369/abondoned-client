import React from 'react';
import { Element } from "react-scroll";
import { motion } from 'framer-motion';
import { Link as ScrollLink } from "react-scroll";
import Home2 from './Home2';

export default function United_States2() {
    const united = [
        {
            name: "(i) Centralia",
            link: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Graffiti_Highway_-_Centralia%2C_Pennsylvania_%282019%29_b.jpg/250px-Graffiti_Highway_-_Centralia%2C_Pennsylvania_%282019%29_b.jpg",
            para: `Centralia, Pennsylvania, is a near-ghost town known for its persistent underground coal mine fire that has been burning since 1962.`
        },
        {
            name: "(ii) Hashima Island",
            link: "https://i.insider.com/59a9b31952c08026008b4a92?width=800&format=jpeg&auto=webp",
            para: "Hashima Island, aka Battleship Island, is in Japan, but often compared to North Brother Island, NY, for its haunting abandoned infrastructure."
        },
        {
            name: "(iii) City Hall Subway Station",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1LT9828xOsLCR4BTIgatvdQ1Zvrr-5NuJPLS8MDNy1eZos00g&s",
            para: "A stunning former subway terminal in NYC, now closed to the public but used for turning 6 trains around in a historic loop."
        },
        {
            name: "(iv) Eastern State Penitentiary",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoH4kFpraDnk1Og1yWt5rKYGaC3BlhTfeCrQ&s",
            para: "An imposing Philadelphia prison, it was once the most expensive prison in the world and introduced solitary confinement as a concept."
        },
        {
            name: "(v) Detroit’s Packard Plant",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs5-sNa2_cw6I06Ew5lrap_S_ikb3fLCooxQ&s",
            para: "Detroit’s Packard Plant was a state-of-the-art facility for luxury cars in the early 1900s, now standing abandoned as a symbol of decline."
        }
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };
    return (
        <Element name='united_states2'>
            <div
                className="py-10"
                style={{
                    backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsW9CtB-P_GT--m2MhGfqoXZ2ZU3appJUHKw&s)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <h1 className="text-6xl font-extrabold text-center text-black drop-shadow-md">2) UNITED STATES</h1>

                <div className="py-20 space-y-20 px-6 md:px-10">
                    {united.map((item, key) => (
                        <motion.div
                            key={key}
                            variants={key % 2 === 0 ? fadeInLeft : fadeInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            className={`md:flex items-center gap-10 py-10 ${key % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                        >
                            <div className="text-2xl md:text-3xl font-bold text-black text-center md:text-left w-full md:w-1/3">
                                {item.name}
                            </div>

                            <div className="flex flex-col items-center text-center max-w-md mx-auto bg-yellow-300 bg-opacity-90 rounded-xl shadow-xl p-6 transition duration-500 hover:scale-105 hover:shadow-2xl w-full md:w-2/3">
                                <img
                                    className="h-60 w-80 object-cover rounded-md mb-4 transition-transform duration-300 hover:rotate-1 hover:scale-105"
                                    src={item.link}
                                    alt={item.name}
                                />
                                <p className="text-lg font-medium text-gray-700">
                                    {item.para}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <ScrollLink
                    to="home2"
                    smooth={true}
                    duration={500}
                    offset={-50}
                >
                    <div className="text-center text-2xl hover:text-red-500 cursor-pointer">
                        Back to top
                    </div>
                </ScrollLink>
            </div>
        </Element>
    );
}
