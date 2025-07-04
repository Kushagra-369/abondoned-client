import React from 'react'

export default function Japan() {
    let japan = [

        {name :"(i) Nichitsu Ghost Town ", link : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-barE1DoieJu_TFxsR1kPPbfTPagOgeHxfg&s " , para : "Nichitsu Ghost Town, located in Chichibu, Saitama Prefecture, is a former mining settlement that was abandoned in 1978. The town was established due to the nearby mine, and at its peak"},
        {name :"(ii)Nagatani Village  ", link : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFxDn-n5HjlnIxdABzcnAEOecyC64BfasT5A&s " , para : "Nagatani Village, located in central Japan's Fukui Prefecture, is an abandoned settlement reclaimed by nature after residents left due to a dam construction project that was later canceled"},
        {name :"(iii)Nagoro 'Scarecrow' Village", link : "https://i.ytimg.com/vi/_DqzQAEnATM/sddefault.jpg " , para : "Nagoro, also known as the 'Scarecrow Village' or 'Kakashi no Sato', is a remote village in the Iya Valley of Tokushima Prefecture, Japan. It's famous for its population of scarecrows, which outnumber the human residents by a significant margin. "},
        {name :"(iv)Shimekko Village", link : " https://discoverjapan.blog/wp-content/uploads/2024/05/83dbd7c689ffe86d9938fcb28d955ec4.webp" , para : "Shimekko Village in Hokkaido is an abandoned settlement that has been overtaken by nature. Once a thriving farming community, it began to decline in the late 20th century as its farming population dwindled. Today, the village stands as a poignant reminder of rural depopulation in Japan, with homes and farm equipment slowly being reclaimed by the surrounding forest."},
        {name :" (v)Matsuo Mine Town ", link : " https://www.michaeljohngrist.com/wp-content/uploads/2009/08/matsuo-mine-ruined-apartments4.jpg" , para : "Matsuo Mine Town in Iwate Prefecture, Japan, is an abandoned settlement with no current population. The town was established to support the Matsuo sulfur mine, which operated from 1914 until its closure in 1969. Following the mine's closure, the town was abandoned, and all wooden structures were incinerated to prevent fire hazards, leaving behind only the reinforced concrete buildings. "},
           ]
    return (
        <div
            className="py-10"
            style={{
                backgroundImage:
                    'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgh7ovhiiP3NbYP7IjWWuDMDgTKDQjczYvBw&s)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPositionX: 'center',
                backgroundPositionY: '60%',
            }}
        >
            <div className="text-6xl font-extrabold text-center">4) JAPAN</div>

            <div className="py-20  gap-10 items-center text-4xl px-10">
                {
                    japan.map((item, key) => (
                        <div
                            key={key}
                            className={`md:flex items-center  py-10 ${key % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                }`}
                        >
                            <div className=' text-center font-bold'>{item.name}</div>

                            <div className="flex flex-col items-center text-center max-w-md">
                                <img
                                    className="h-60 w-80 object-cover rounded-md"
                                    src={item.link}
                                    alt={item.name}
                                />
                                <p className="text-xl mt-4 font-semibold">
                                    {item.para}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
