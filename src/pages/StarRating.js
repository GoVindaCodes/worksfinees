import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
    const stars = [];
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < filledStars; i++) {
        stars.push(<FaStar key={i} color="#FFD700" />);
    }

    if (hasHalfStar) {
        stars.push(<FaStar key={stars.length} color="#FFD700" />);
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
        stars.push(<FaRegStar key={stars.length + i} color="#FFD700" />);
    }

    return <>{stars}</>;
};

export default StarRating;
