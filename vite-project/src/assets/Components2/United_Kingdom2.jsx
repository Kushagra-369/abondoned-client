import React from 'react';
import { Element } from "react-scroll";
import { motion } from 'framer-motion';
import { Link as ScrollLink } from "react-scroll";
import './India.css';  // keep your India.css for flicker, blood-drip, ghost-hover, mystery-reveal styles

export default function United_Kingdom2() {
    const united = [
        {
            name: "Champness Hall",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSptLvxumoVMKx0xszvh5ZAyd2MX-rEv-g-3Q&s",
            para: `Champness Hall in Rochdale is believed to be haunted. Many reports describe unexplained noises, shadowy figures, and cold spots within the building. Some stories even detail ghostly encounters with a figure resembling a woman named Mary from the Sisters of Mercy, who were associated with the hall in the past`
        },
        {
            name: "Chillingham Castle ",
            link: "https://i.ytimg.com/vi/EMkXU-XZs8Y/maxresdefault.jpg",
            para: `Chillingham Castle is widely regarded as one of the most haunted castles in England and is known for its high levels of paranormal activity. The castle boasts a long and often brutal history, with numerous reported sightings of ghosts and other supernatural phenomena. `
        },
        {
            name: " Tower of London",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqcISTLThhkc_nI13Uju9CgIBZKC0IcJqL4fM8jzZsumrUI3w&s",
            para: `The Tower of London is widely believed to be one of the most haunted places in London, with numerous ghost stories and sightings associated with it. Many of the reported paranormal experiences involve historical figures who were imprisoned and died within its walls, most notably Anne Boleyn. `
        },
        {
            name: "The Ancient Ram Inn",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rl6cap9AW72IFCxvEJtIyLYjaLGNqLJx8Q&s",
            para: `The Ancient Ram Inn, located in Wotton-under-Edge, Gloucestershire, is a 1,000-year-old building with a reputation for being one of the most haunted locations in England. It's a Grade II* listed building and a former pub, but is now primarily a paranormal event location and tourist attraction. `
        },
        {
            name: "Pendle Hill",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ477f4FGdYDMaJRV2sd4w3nM6hRAT2eIi5w&s",
            para: `Pendle Hill in Lancashire is renowned for its historical association with the Pendle witch trials of 1612 and is considered a haunted location, with reports of paranormal activity linked to the trials. The area, including nearby villages and farms, is said to be where the accused witches lived and where rituals were performed. `
        },
        {
            name: "Pluckley ",
            link: "https://images.timesnownews.com/thumb/msid-151496269,thumbsize-72620,width-400,height-225,resizemode-75/151496269.jpg",
            para: `Pluckley, a village in Kent, England, is widely known as "the most haunted village in England". It gained this reputation due to numerous ghost stories and paranormal accounts associated with the village. These stories have been documented and popularized in books and local folklore for over 70 years`
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
        <Element name='united_kingdom2'>
            <div
                className="py-10"
                style={{
                    backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVUMhFDfkOZNYejletJlIi0lIGMEyXqg08_qlqOzC42KY4K0&s)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="text-center">
                    <h1
                        className="text-5xl font-black mb-16 flicker blood-drip inline-block"
                        style={{ fontFamily: "'Creepster', cursive" }}
                    >
                        3) UNITED KINGDOM
                    </h1>
                </div>

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
                            <div
                                className="text-3xl md:text-4xl text-center md:text-left font-bold text-red-600 w-full md:w-1/3 blood-drip ghost-hover"
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

                <ScrollLink to="home2" smooth={true} duration={500} offset={-50}>
                    <div className="text-center text-xl text-white hover:text-red-500 cursor-pointer drop-shadow-md pt-10 flicker ghost-hover">
                        ↑ Back to top
                    </div>
                </ScrollLink>
            </div>
        </Element>
    );
}
