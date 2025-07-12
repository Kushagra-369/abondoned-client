import React from 'react';
import { Element } from "react-scroll";
import { motion } from 'framer-motion';
import { Link as ScrollLink } from "react-scroll";
import Home2 from './Home2';

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
        <Element name='united_kingdom2'>
            <div
                className="py-10"
                style={{
                    backgroundImage:
                        'url(https://c4.wallpaperflare.com/wallpaper/950/516/946/flag-britain-color-texture-wallpaper-thumb.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <h1 className="text-6xl font-extrabold text-center text-white drop-shadow-md">3) UNITED KINGDOM</h1>

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
                            <div className="text-2xl md:text-3xl font-bold text-white text-center md:text-left w-full md:w-1/3">
                                {item.name}
                            </div>

                            <div className="flex flex-col items-center text-center max-w-md mx-auto bg-red-500 bg-opacity-90 rounded-xl shadow-xl p-6 transition duration-500 hover:scale-105 hover:shadow-2xl w-full md:w-2/3">
                                <img
                                    className="h-60 w-80 object-cover rounded-md mb-4 transition-transform duration-300 hover:rotate-1 hover:scale-105"
                                    src={item.link}
                                    alt={item.name}
                                />
                                <p className="text-lg font-medium text-cyan-300">
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
