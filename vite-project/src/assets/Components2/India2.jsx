import React, { useState } from 'react';
import { Element } from "react-scroll";
import { motion } from 'framer-motion';
import { Link as ScrollLink } from "react-scroll";
import './India.css';

export default function India2() {
    const [showMore, setShowMore] = useState(false);

    const india = [
        {
            name: "Bhangarh Fort",
            link: "https://lakshmisharath.com/wp-content/uploads/2019/10/Bhangarh-Fort-15.jpg",
            para: `Bhangarh Fort, located in Rajasthan, India, is a 17th-century fort. It is shrouded in eerie legends of curses and ghostly apparitions.`
        },
        {
            name: "Malcha Mahal",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWY9yqBPUWWwPgBbPgBe-NGtnpTiua3j7Fxg&s",
            para: `A 14th-century ruin hidden in Delhi’s dense forest, Malcha Mahal has a chilling history of royal despair and isolation. Locals whisper of ghostly sightings.`
        },
        {
            name: "Aarey Colony",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAjzQntvziVJETnkUOhUoNxfz_7BAU8brBpg&s",
            para: `Dark roads wind through Aarey’s forest, where travelers have heard screams and seen spectral figures in the mist.`
        },
        {
            name: "Begunkodar Railway Station",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNjZGmSH-35CG5H3snaguQc1aUiCO924-Fxg&s",
            para: `Once abandoned, this haunted West Bengal station tells tales of a ghostly woman in white walking the tracks at midnight.`
        },
        {
            name: "Sanjay Van",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8C1KlVJl7GBgBgUSBBOSm6LkJVsBc68C9BA&s",
            para: `This shadowy urban forest in Delhi is steeped in horror stories—spirits wandering and whispers in the silence.`
        },
        {
            name: "The Lambi Dehar Mines",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwwFmUWchQaPo-dv0sgjzIS1SIPiWYWELCrAiuofdDPKmY541a&s",
            para: `Thousands of workers died in agony in these cursed mines near Mussoorie. Locals claim the dead still scream through the fog.`
        },
        {
            name: "Dumas Beach",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRbl1E6CRGcWFRrAGpwPIC-GzlvSzeJDFYfw&s",
            para: `Dumas Beach, located in Gujarat, India, is renowned for its dark sand and its reputation as a haunted location. The beach's eerie atmosphere is linked to its history as a Hindu burial ground.`
        },
    ];

    const fadeInLeft = {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } }
    };

    return (
        <Element name='india2'>
            <div
                className="py-10"
                style={{
                    backgroundImage: 'url(https://i.pinimg.com/736x/19/59/c8/1959c87b951caabd8805cc7566723e96.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="text-center">
                    <h1
                        className="text-5xl font-black mb-16 flicker inline-block"
                        style={{ fontFamily: "'Creepster', cursive", position: 'relative' }}
                    >
                        <span className="blood-drip">1) INDIA'S HAUNTED LEGENDS</span>
                        <span className="blood-drip2" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>&nbsp;</span>
                    </h1>
                </div>

                <div className="py-20 space-y-20 px-6 md:px-10">
                    {(showMore ? india : india.slice(0, 5)).map((item, key) => (
                        <motion.div
                            key={key}
                            variants={key % 2 === 0 ? fadeInLeft : fadeInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            className={`md:flex items-center gap-10 py-10 ${key % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                        >
                            <div
                                className="text-3xl md:text-4xl text-center md:text-left font-bold text-red-600 w-full md:w-1/3 blood-drip2 ghost-hover"
                                style={{ fontFamily: "'Creepster', cursive" }}
                            >
                                👻 {item.name}
                            </div>

                            <div className="flex flex-col items-center text-center max-w-md mx-auto bg-black bg-opacity-70 border border-red-700 rounded-xl shadow-2xl p-6 transition duration-500 hover:scale-105 hover:shadow-red-500/50 w-full md:w-500 mystery-reveal">
                                <img
                                    className="h-60 w-80 object-cover rounded-md mb-4 grayscale hover:grayscale-0 transition-transform duration-300 hover:rotate-1 hover:scale-105 ghost-hover"
                                    src={item.link}
                                    alt={item.name}
                                />
                                <p className="text-md font-medium text-gray-200 italic flicker">
                                    {item.para}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* See More toggle */}
                <div
                    className="text-center text-lg text-white hover:text-red-500 cursor-pointer pb-6 flicker ghost-hover"
                    onClick={() => setShowMore(!showMore)}
                >
                    {showMore ? 'Show Less' : 'See More'}
                </div>

                {/* Back to top */}
                <ScrollLink to="home2" smooth={true} duration={500} offset={-50}>
                    <div className="text-center text-xl text-white hover:text-red-500 cursor-pointer drop-shadow-md pt-4 flicker ghost-hover">
                        ↑ Back to top
                    </div>
                </ScrollLink>
            </div>
        </Element>
    );
}
