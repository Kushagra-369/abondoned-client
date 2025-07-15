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
            name: "Inunaki Village",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1RaGf9ps2taDrxocvTWS0sL210m0th6dUGQ&s",
            para : `Inunaki Village is a Japanese urban legend about a fictional, lawless village said to be located near the Inunaki mountain pass in Fukuoka Prefecture. The legend describes a place where the Japanese constitution and laws do not apply, and where residents are hostile to outsiders, potentially engaging in violence and other crimes.`
        },
          {
            name: "Kiyotaki Tunnel",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFl2Vq6nalIzuOor4bHw4GdLv0189UepmjbQ&s",
            para : `The Kiyotaki Tunnel, located in Kyoto, Japan, is a notorious location known for its eerie reputation and ghost stories. Built in the late 1920s for a railway line, it's said to be haunted by the spirits of workers who died during its construction under harsh conditions`
        },
          {
            name: " Oiran Buchi Bridge",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNxWNpZ6GvFx7XmY01qdHQasHDu2mHcOxhgg&s",
            para : `The story of Oiran Buchi, also known as "The Courtesan's Bridge," is a chilling legend from Japan, specifically associated with a region in Yamanashi Prefecture. However, its eerie reputation has reached far and wide, including being recounted in places like Sapporo`
        },
          {
            name: "Himuro Residence",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKy9W3D-0jC8RTZbX0HgM5pGXpCy-YXehvqw&s",
            para : `The term "Himuro Residence" likely refers to Himuro Mansion, the primary setting for the video game Fatal Frame (also known as Project Zero). The mansion is depicted as a centuries-old structure, historically owned by the powerful Himuro family. It is located in the Himuro Mountain area, surrounded by five shrines that are believed to house powerful gods. The mansion is also associated with a dark ritual known as the "Sacrifice Ritual"`
        },
          {
            name: "Doryodo Ruins",
            link: "https://i0.wp.com/japanthis.com/wp-content/uploads/2015/10/doryodo-hachioji.jpg?ssl=1",
            para : `The Doryodo Ruins, located within Otsukayama Park in Hachioji, Tokyo, are the remains of a temple that was once a popular place for prayer. The temple was demolished in the 1980s after a series of tragic events, including the murder of an elderly woman in 1963 and a young woman in 1973, which led to its association with ghostly phenomena.`
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
                        'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiB95sQtO3Hjg9QMltJYvXcHAAFF5m_12N3e1q2YCNiohM_gb8pkrZzNFfnS88LBlhFfo&usqp=CAU)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <h1 className="text-6xl font-extrabold text-center text-white drop-shadow-md">4) JAPAN</h1>

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
                            <div className="text-2xl md:text-3xl font-bold text-white text-center md:text-left w-full md:w-1/3">
                                {item.name}
                            </div>

                            <div className="flex flex-col items-center text-center max-w-md mx-auto bg-red-600 bg-opacity-90 rounded-xl shadow-xl p-6 transition duration-500 hover:scale-105 hover:shadow-2xl w-full md:w-2/3">
                                <img
                                    className="h-60 w-80 object-cover rounded-md mb-4 transition-transform duration-300 hover:rotate-1 hover:scale-105"
                                    src={item.link.trim()}
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
