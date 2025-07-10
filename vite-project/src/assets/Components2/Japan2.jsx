import React from 'react';
import { Element } from "react-scroll";
import { motion } from 'framer-motion';
import { Link as ScrollLink } from "react-scroll";
import Home2 from './Home2';

export default function Japan2() {
    const japan = [
         {
            name: "Aokigahara Forest ",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8Fyld9NUnnHferl6P8tnQ71zH3IlikRXaw&s",
            para : `Aokigahara Forest, also known as the Sea of Trees (Jukai), is a dense, dark forest located at the northwest base of Mount Fuji in Japan. Also known as the "Suicide Forest," it gained infamy in modern times due to the high number of suicides committed there each year.`
        },
          {
            name: " ",
            link: "",
            para : ``
        },
          {
            name: " ",
            link: "",
            para : ``
        },
          {
            name: " ",
            link: "",
            para : ``
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
        <Element name='japan2'>
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
