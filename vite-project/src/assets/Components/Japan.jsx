import React from 'react';
import { Element } from "react-scroll";
import { motion } from 'framer-motion';
import { Link as ScrollLink } from "react-scroll";
import Home from './Home';

export default function Japan() {
    const japan = [
        {
            name: "(i) Nichitsu Ghost Town",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-barE1DoieJu_TFxsR1kPPbfTPagOgeHxfg&s",
            para: "Nichitsu Ghost Town in Saitama Prefecture was once a bustling mining town. It was abandoned in 1978 after the mine shut down."
        },
        {
            name: "(ii) Nagatani Village",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFxDn-n5HjlnIxdABzcnAEOecyC64BfasT5A&s",
            para: "Nagatani in Fukui was abandoned after plans for a dam caused residents to relocate. The dam was never built, but the village remained empty."
        },
        {
            name: "(iii) Nagoro 'Scarecrow' Village",
            link: "https://i.ytimg.com/vi/_DqzQAEnATM/sddefault.jpg",
            para: "Nagoro, in Tokushima, is known for its hundreds of handmade scarecrows that outnumber the few remaining residents."
        },
        {
            name: "(iv) Shimekko Village",
            link: "https://discoverjapan.blog/wp-content/uploads/2024/05/83dbd7c689ffe86d9938fcb28d955ec4.webp",
            para: "Shimekko Village in Hokkaido is slowly being overtaken by nature after years of depopulation. It was once a thriving farming community."
        },
        {
            name: "(v) Matsuo Mine Town",
            link: "https://www.michaeljohngrist.com/wp-content/uploads/2009/08/matsuo-mine-ruined-apartments4.jpg",
            para: "Once Japan’s largest sulfur mine, Matsuo Town was abandoned in 1969. Only the concrete remains of buildings are left behind."
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
        <Element name='japan'>
            <div
                className="py-10"
                style={{
                    backgroundImage:
                        'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgh7ovhiiP3NbYP7IjWWuDMDgTKDQjczYvBw&s)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <h1 className="text-6xl font-extrabold text-center text-black drop-shadow-md">4) JAPAN</h1>

                <div className="py-20 space-y-20 px-6 md:px-10">
                    {japan.map((item, key) => (
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
                                    src={item.link.trim()}
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
                    to="home"
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
