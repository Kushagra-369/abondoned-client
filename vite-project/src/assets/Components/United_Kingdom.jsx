import React from 'react';
import { Element } from "react-scroll";
import { motion } from 'framer-motion';

export default function United_Kingdom() {
    const united = [
        {
            name: "(i) Imber Village",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPvdraViS_xtLQBz0uk5xiVxb3dEoxX5uAFg&s",
            para: "Imber is a deserted village in Wiltshire, evacuated in 1943 for D-Day training. The villagers were never allowed to return."
        },
        {
            name: "(ii) Capel Celyn",
            link: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/CE65/production/_128573825_try5gettyimages-592205406.jpg",
            para: "Capel Celyn, a Welsh-speaking village in Wales, was controversially flooded in 1965 to supply water to Liverpool."
        },
        {
            name: "(iii) Aldwych Underground Station",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHD9wkd0W0rAr_UOaxABx4sENdxl4VoR7P3A&s",
            para: "Aldwych Station in London closed in 1994. Known for its elegant architecture, it’s now used for filming and tours."
        },
        {
            name: "(iv) St. Peter’s Seminary",
            link: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GK%26C_St_Peter%27s_chapel.jpg",
            para: "Located in Scotland, this Brutalist Catholic seminary is a protected structure, famous for its architecture and decay."
        },
        {
            name: "(v) The Maunsell Sea Forts",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTEKEIuRoLuqUUCeeryQGXp7n5rvBkzyhkIZuzInFsFBVkerg&s",
            para: "Built during WWII in the Thames/Mersey estuaries, these forts defended the UK from enemy aircraft and ships."
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
        <Element name='united_kingdom'>
            <div
                className="py-10"
                style={{
                    backgroundImage:
                        'url(https://media.istockphoto.com/id/901657092/vector/watercolor-painted-flag.jpg?s=612x612&w=0&k=20&c=2q4z0MbRJ5y_8ScECcwD0ckO8sgh6-pYvEa9JL0N6U4=)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <h1 className="text-6xl font-extrabold text-center text-black drop-shadow-md">3) UNITED KINGDOM</h1>

                <div className="py-20 space-y-20 px-6 md:px-10">
                    {united.map((item, key) => (
                        <motion.div
                            key={key}
                            variants={key % 2 === 0 ? fadeInLeft : fadeInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
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
            </div>
        </Element>
    );
}
