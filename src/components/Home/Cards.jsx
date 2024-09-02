import React from 'react';
import { Link } from 'react-router-dom';

const cardData = [
    {
        img: "https://c.tribune.com.pk/2019/07/2012115-schoolkidsxx-1562992083.jpg", // Public Schools
        h: "Public Schools",
        desc: "Explore a wide range of public schools offering quality education at no cost.",
        btnText: "Explore",
        btnLink: "/public"
    },
    {
        img: "https://propakistani.pk/wp-content/uploads/2019/02/private-schools.jpg", // Private Schools
        h: "Private Schools",
        desc: "Find private schools that offer personalized education and co-curricular activities.",
        btnText: "Explore",
        btnLink: "/private"
    },
    {
        img: "https://i.guim.co.uk/img/static/sys-images/Education/Pix/pictures/2011/11/25/1322239219355/Crown-Hills-madrasa-highl-007.jpg?width=465&dpr=1&s=none", // Madrassas
        h: "Madrasas",
        desc: "Discover madrasas providing religious and traditional education.",
        btnText: "Explore",
        btnLink: "/madrassa"
    },
    {
        img: "https://i.ytimg.com/vi/HPdYH1y_qPY/maxresdefault.jpg", // Boarding Schools
        h: "Boarding Schools",
        desc: "Check out boarding schools where students live and learn on campus.",
        btnText: "Explore",
        btnLink: "/boarding"
    }
];


const Cards = () => {
    return (
        <div className='flex flex-wrap justify-center gap-4 my-20 w-full'>
            {cardData.map((card, index) => (
                <div key={index} className='shadow-lg hover:shadow-xl hover:bg-sky-500 hover:scale-105 transition-shadow duration-300 rounded-2xl border border-gray-300 w-full max-w-xs'>
                    <img src={card.img} alt={card.h} className='rounded-t-2xl w-full h-48 object-cover' />
                    <div className='flex flex-col items-center p-4'>
                        <h2 className='text-3xl mb-2 text-black text-center'>{card.h}</h2>
                        <p className='mb-4 text-gray-700 text-center'>{card.desc}</p>
                        <Link to={card.btnLink}>
                            <button className='bg-green-500 hover:bg-green-600 rounded-3xl py-2 px-5 text-white'>{card.btnText}</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;