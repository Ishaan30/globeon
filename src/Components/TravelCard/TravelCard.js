import React from 'react';
import { faStar,faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const travelCard = ({location}) => {
    return (
        <article class="mx-auto pb-5 w-64 transform duration-500 hover:-translate-y-1 cursor-pointer group">
        <div class="h-72 overflow-hidden rounded-xl">
            <img class="transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1615319532762-b4ccc69e5abf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTA3fHxsYW5kc2NhcGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=100" alt=""/>
        </div>
        {/* location details */}
        {/* <div class="flex justify-between my-5 ">
            <div class="text-orange-500 text-base font-semibold">California</div>
            <div class="text-base text-right"><span class="font-bold">87</span>/Day</div>
        </div> */}
        <h2 class="font-bold text-2xl">{location.name}</h2>
        <div class="flex justify-between items-center mt-3 ">
            {/* <div class="text-base uppercase font-semibold text-gray-500">15 Days Tour</div> */}
            <div class="text-base text-right">
            <div class="flex">
            <FontAwesomeIcon className="text-lg text-orange-500" icon={faStar} />
            <FontAwesomeIcon className="text-lg text-orange-500" icon={faStar} />
            <FontAwesomeIcon className="text-lg text-orange-500" icon={faStar} />
            <FontAwesomeIcon className="text-lg text-orange-500" icon={faStar} />
            <FontAwesomeIcon className="text-lg text-orange-500" icon={faStarHalfStroke} />
                </div>
            </div>
        </div>
    </article>
    );
};

export default travelCard;
