import React, { useState } from "react";

const ReviewForm = ({ onSubmit }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const handleStarClick = (value) => {
        setRating(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { rating, comment };
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Rating
                </label>
                <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon
                            key={star}
                            filled={rating >= star}
                            onClick={() => handleStarClick(star)}
                        />
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Comment
                </label>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Submit Review
            </button>
        </form>
    );
};

const StarIcon = ({ filled, onClick }) => {
    return (
        <svg
            onClick={onClick}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${filled ? "text-yellow-500" : "text-gray-300"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2l3.09 6.87L22 9.27l-5 4.55 1.18 6.91L12 18.4l-6.18 3.34L7 13.82l-5-4.55 6.91-.4L12 2z"
            />
        </svg>

    );
};

export default ReviewForm;
