import React from 'react';
import { Link, Element } from "react-scroll";
import { motion } from 'framer-motion';
import { Link as ScrollLink } from "react-scroll";
import Home from './Home';

export default function Australia() {
    const australia = [
        {
            name: "(i) Wittenoom",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-PoXBLM3kcqp7NOZcymnRYvwOfseRySwnrg&s",
            para: "Wittenoom, formerly a mining town in Western Australia, is now a ghost town and the largest contaminated site in the Southern Hemisphere due to asbestos."
        },
        {
            name: "(ii) Farina",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNdgU4L6gxNT63mdCp-lN3I40TGj58SpoxVw&s",
            para: "Farina, South Australia, is a historic ghost town located in the far north of the state. It was once a thriving town with a population of 600."
        },
        {
            name: "(iii) Kookynie",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsDCeGekYV-sXt0tacRTsSCtUmG8ARVew1Qg&s",
            para: "Kookynie is a historic gold rush town in Western Australia. It once had over 2,500 people, now a ghost town known for the Grand Hotel."
        },
        {
            name: "(iv) Big Bell",
            link: "https://i.ytimg.com/vi/tc0ZkKUPjSI/sddefault.jpg",
            para: "Big Bell is a ghost town in Western Australia, established in 1936 after the discovery of gold and the opening of the Big Bell Gold Mine."
        },
        {
            name: "(v) Mary Kathleen",
            link: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Mary_kathleen_qld.jpg",
            para: "Mary Kathleen was a uranium mining town in Queensland. It was built for the Mary Kathleen Uranium Mine, active during 1958–63 and 1976–82."
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
        <Element name='australia'>
            <div
                className="py-10"
                style={{
                    backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8d1nGGerbUY-VxEk4h45zvcrZar2XpBIFMQ&s)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <h1 className="text-6xl font-extrabold text-center text-black drop-shadow-md">5) AUSTRALIA</h1>

                <div className="py-20 space-y-20 px-6 md:px-10">
                    {australia.map((item, key) => (
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
