import React from 'react';
import { Element } from "react-scroll";
import { motion } from 'framer-motion';
import { Link as ScrollLink } from "react-scroll";
import './India.css'; // Use the same CSS file with flicker, blood-drip, mystery-reveal, ghost-hover classes

export default function United_States2() {
    const united = [
        {
            name: " Willows Weep",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjepKQkUdzwiXAvsnQtMWfhEhpfwUKbIJP7nBdXQ4FpjwwYxE7LV4NrnynKYLtkB0S6Fg&usqp=CAU",
            para : `Willows Weep, located in Cayuga, Indiana, is a house notorious for its dark reputation as one of the most haunted and potentially evil places in America`
        },
         {
            name: "Lake Shawnee  ",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSl3QWdPFot56oBKSt_MXVGxNz2Hnnl_yDPw&s",
            para : `Lake Shawnee Abandoned Amusement Park, located in Princeton, West Virginia, is known for its tragic history and eerie atmosphere. It was built on a site with a dark past, including a Native American burial ground and a brutal massacre of settlers`
        },
         {
            name: " Skinwalker Ranch",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhgFV83hgAETA_SM65IblD8ruiiZFkQOhqfA&s",
            para : `Skinwalker Ranch, also known as Sherman Ranch, is a property in Utah rumored to be the site of paranormal and UFO-related phenomena. The ranch's name is derived from the Navajo legend of the skin-walker, a malevolent shapeshifting entity`
        },
         {
            name: "Bell Witch Cave ",
            link: "https://www.bellwitchcave.com/wp-content/themes/yootheme/cache/IMG_8014-1-scaled-5611ca3d.jpeg",
            para : `The Bell Witch Cave, located in Adams, Tennessee, is a key site in the Bell Witch legend, a famous American haunting story.Beginning in 1817 and continuing until 1821, John Bell and his family were allegedly “haunted” by a devilish spirit called a “witch” known as “Kate.”`
        },
         {
            name: "LaLaurie Mansion ",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVGvlIYjDeMYF_cxknQ6YtXSJLmNENYWFI5Q&s",
            para : `The LaLaurie Mansion, located at 1140 Royal Street in the French Quarter of New Orleans, Louisiana, is one of the most infamous haunted houses in the United States.In 1834, a fire broke out in the mansion, leading to the horrifying discovery of enslaved individuals who had been brutally tortured and kept in deplorable conditions in a locked attic room `
        },
         {
            name: "Bachelor’s Grove Cemetery ",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEz52kb-wtCYM0_yDy9lggZBzNC6ZI7UJhsg&s",
            para : `Bachelor’s Grove Cemetery, located near 143rd Street and Ridgeland Avenue in Midlothian, Illinois, is a small, abandoned burial ground it originally served as a final resting place for early settlers and German immigrants. Though it was once a peaceful rural cemetery, by the 1960s it fell into neglect and became a hotspot for vandalism and illegal activity`
        },
         {
            name: "Washington Square Park ",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMFVBOQbXrJA96fl8_1liKwyaJnfBg6qR6hg&s",
            para : `Washington Square Park is located in the Greenwich Village neighborhood of Lower Manhattan, New York City. Nearby New York University's Washington Square Campus, particularly the Elmer Holmes Bobst Library, has witnessed multiple suicides, leading to reports of strange sounds, including the rustling of papers, and the appearance of a ghostly librarian.`
        },
    ];

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
                    backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_bhA7mH1_ZvSYTgbNTasO-a5l1ochh0ilIQ&s)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="text-center">
                    <h1
                        className="text-5xl font-black mb-16 flicker blood-drip inline-block text-white"
                        style={{ fontFamily: "'Creepster', cursive" }}
                    >
                        2) UNITED STATES
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
                                className="text-3xl md:text-4xl text-center md:text-left font-bold text-red-600 w-full md:w-1/3 blood-drip2"
                                style={{ fontFamily: "'Creepster', cursive" }}
                            >
                                👻 {item.name}
                            </div>

                            <div
                                tabIndex={0} // To enable :focus-within for mystery reveal on keyboard/mobile tap
                                className="ghost-hover mystery-reveal flex flex-col items-center text-center max-w-md mx-auto bg-black bg-opacity-70 border border-red-700 rounded-xl shadow-2xl p-6 transition duration-500 hover:scale-105 hover:shadow-red-500/50 w-full md:w-2/3"
                            >
                                <img
                                    className="h-60 w-80 object-cover rounded-md mb-4 grayscale hover:grayscale-0 transition-transform duration-300 hover:rotate-1 hover:scale-105"
                                    src={item.link}
                                    alt={item.name}
                                />
                                <p className="text-md font-medium text-gray-200 italic flicker mystery-text">
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
                    <div className="text-center text-xl text-white hover:text-red-500 cursor-pointer drop-shadow-md pt-10 flicker">
                        ↑ Back to top
                    </div>
                </ScrollLink>
            </div>
        </Element>
    );
}
