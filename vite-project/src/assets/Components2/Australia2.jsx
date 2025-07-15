import React from 'react';
import { Link, Element } from "react-scroll";
import { motion } from 'framer-motion';
import { Link as ScrollLink } from "react-scroll";
import Home2 from './Home2';

export default function Australia2() {
    const australia = [
        {
            name: " Monte Cristo Homestead",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNfculElj7jI70OPsQOQ3LJq2GHdUO0bkDw&s",
            para: `Monte Cristo Homestead, located in Junee, New South Wales, Australia, is known as "Australia's most haunted house" due to its history of tragic events and reported paranormal activity.`
        },
        {
            name: "The Old Melbourne Gaol",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpYju4FOaHNveCtZkm3mu64ZZSSYaHD5FSC0Rz6KftorSQFPQ&s",
            para: `The Old Melbourne Gaol is widely believed to be haunted. Visitors and staff have reported numerous paranormal experiences, including unexplained sounds, shadow figures, and feelings of being touched or watched.`
        },
        {
            name: "The Ghost Hill",
            link: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/6d/0f/6b/crescent-moon-cottage.jpg?w=900&h=500&s=1",
            para: `"Ghost Hill" in Australia refers to Ghost Hill Road, a location in Bilpin, New South Wales, known for the Ghost Hill Road Retreat, a bed and breakfast. While the name might evoke images of a haunted location, the area is primarily known for its scenic beauty and the retreat's peaceful atmosphere`
        },
        {
            name: " The Devils Pool",
            link: "https://media.zenfs.com/en/travel_noire_articles_954/5f4a0185f47d479b2433faa1a311a638",
            para: `Devil's Pool in Australia refers to a dangerous section of Babinda Creek, near Babinda in Queensland, known for its natural pool and treacherous conditions. It's part of the Babinda Boulders scenic reserve and has a history of drowning incidents, making it a place of both attraction and tragedy. `
        },
        {
            name: "Boggo Road Jail",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_iDQpCkqZPb6jYOdl5bhkS-qVLPRsJzuyjA&s",
            para: `Boggo Road Gaol is known for its haunted reputation, with stories of ghostly apparitions, unexplained noises, and eerie occurrences dating back to the prison's operational years`
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
        <Element name='australia2'>
            <div
                className="py-10"
                style={{
                    backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2kLqtN1BhkJkW1WeF9aQT4k4TUBIp0mb2nNwykJqD7-ye22HpOpkHXzmvxE2JNRoAjHk&usqp=CAU)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <h1 className="text-6xl font-extrabold text-center text-white drop-shadow-md">5) AUSTRALIA</h1>

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
                            <div className="text-2xl md:text-3xl font-bold text-white text-center md:text-left w-full md:w-1/3">
                                {item.name}
                            </div>

                            <div className="flex flex-col items-center text-center max-w-md mx-auto bg-red-600 bg-opacity-90 rounded-xl shadow-xl p-6 transition duration-500 hover:scale-105 hover:shadow-2xl w-full md:w-2/3">
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
