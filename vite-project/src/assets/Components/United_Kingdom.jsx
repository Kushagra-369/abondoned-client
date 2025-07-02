import React from 'react'

export default function United_Kingdom() {
    let united = [
        { name: "(i)Imber Village", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPvdraViS_xtLQBz0uk5xiVxb3dEoxX5uAFg&s", para: "Imber is a deserted village in Wiltshire, England, located within the Salisbury Plain military training area. It was evacuated in 1943 so American troops could train for the D-Day landings. Despite the war's end, the villagers were never allowed to return." },
        { name: "(ii)Chernobyl", link: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/CE65/production/_128573825_try5gettyimages-592205406.jpg", para: "Capel Celyn, a Welsh-speaking village in the Tryweryn Valley, was deliberately flooded in 1965 to create a reservoir for Liverpool's water supply, despite significant local opposition." },
        { name: "(iii) London’s Aldwych Underground Station", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHD9wkd0W0rAr_UOaxABx4sENdxl4VoR7P3A&s", para: "Aldwych Underground Station, originally named Strand Station, is a disused station on the Piccadilly line in London. It was opened in 1907 as a terminus on a short branch line from Holborn. The station closed in 1994 due to low usage and high maintenance costs, particularly for its lifts." },
        { name: "(iv)St. Peter’s Seminary", link: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GK%26C_St_Peter%27s_chapel.jpg", para: "St. Peter's Seminary in Cardross, Scotland, is a former Roman Catholic seminary renowned for its groundbreaking Brutalist architecture and its status as a Category A listed building, the highest level of protection for a building of special architectural or historic interest" },
        { name: "(v)The Maunsell Sea Forts", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTEKEIuRoLuqUUCeeryQGXp7n5rvBkzyhkIZuzInFsFBVkerg&s", para: "The Maunsell Sea Forts are a collection of military forts built in the Thames and Mersey estuaries during World War II to defend the UK. Designed by Guy Maunsell, they were initially operated as army and navy forts." },
    ]
    return (
        <div
            className="py-10"
            style={{
                backgroundImage:
                    'url(https://media.istockphoto.com/id/901657092/vector/watercolor-painted-flag.jpg?s=612x612&w=0&k=20&c=2q4z0MbRJ5y_8ScECcwD0ckO8sgh6-pYvEa9JL0N6U4=)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPositionX: 'center',
                backgroundPositionY: '60%',
            }}
        >
            <div className="text-6xl font-extrabold text-center">2) UNITED KINGDOM</div>

            <div className="py-20  gap-10 items-center text-4xl px-10">
                {
                    united.map((item, key) => (
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
