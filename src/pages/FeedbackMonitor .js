import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiAlertCircle, FiCheckCircle, FiTrash, FiEdit } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const FeedbackMonitor = ({ reviews, onDelete, onUpdate }) => {
    const { t } = useTranslation();
    const [selectedFeedback, setSelectedFeedback] = useState(null);

    console.log("=======================", reviews)
    const handleDelete = async (id) => {
        console.log("=========================", id)
        try {
            await onDelete(id);
            console.log("Feedback deleted successfully.");
        } catch (error) {
            console.error("Failed to delete feedback:", error);
        }
    };

    const handleEdit = (feedback) => {
        setSelectedFeedback(feedback);
    };

    const handleUpdate = async () => {
        if (!selectedFeedback) return;
        try {
            await onUpdate(selectedFeedback._id, selectedFeedback);
            console.log("Feedback updated successfully.");
            setSelectedFeedback(null);
        } catch (error) {
            console.error("Failed to update feedback:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedFeedback({ ...selectedFeedback, [name]: value });
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">{t("Customer Feedback")}</h2>
            {reviews?.map((feedback) => (
                <div
                    key={feedback._id}
                    className={`flex items-center justify-between p-4 rounded-lg shadow-md ${feedback.rating === 1 ? "bg-red-100" : "bg-green-100"
                        } mb-4`}
                >
                    <div className="flex items-center">
                        {feedback.rating === 1 ? (
                            <FiAlertCircle className="text-red-500 mr-2" />
                        ) : (
                            <FiCheckCircle className="text-green-500 mr-2" />
                        )}
                        <div className="flex items-center">
                            {selectedFeedback && selectedFeedback._id === feedback._id ? (
                                <>
                                    <input
                                        type="number"
                                        name="rating"
                                        value={selectedFeedback.rating}
                                        onChange={handleChange}
                                        min="1"
                                        max="5"
                                    />
                                    {" "}
                                    <input
                                        type="text"
                                        name="comment"
                                        value={selectedFeedback.comment}
                                        onChange={handleChange}
                                        placeholder="Enter your comment..."
                                    />
                                </>
                            ) : (
                                <>
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <FaStar
                                            key={index}
                                            className={`text-${feedback.rating === 1 ? "red" : "green"}-500`}
                                            fill={index < feedback.rating ? "currentColor" : "none"}
                                            stroke="currentColor"
                                        />
                                    ))}
                                    <p className="ml-2">{feedback.comment}</p>
                                </>
                            )}
                        </div>
                    </div>
                    <div>
                        {selectedFeedback && selectedFeedback._id === feedback._id ? (
                            <button onClick={handleUpdate} className="text-green-500 mr-2">
                                <FiCheckCircle />
                            </button>
                        ) : (
                            <button onClick={() => handleEdit(feedback)} className="text-yellow-500 mr-2">
                                <FiEdit />
                            </button>
                        )}
                        <button onClick={() => handleDelete(feedback._id)} className="text-red-500">
                            <FiTrash />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeedbackMonitor;






// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { FiAlertCircle, FiCheckCircle, FiTrash, FiEdit } from "react-icons/fi";
// import { FaStar } from "react-icons/fa";

// const FeedbackMonitor = ({ reviews, onDelete, onUpdate }) => {
//     const { t } = useTranslation();
//     const [selectedFeedback, setSelectedFeedback] = useState(null);
//     console.log("reviews==========================================================", reviews);
//     // console.log("hi==============================", selectedFeedback)
//     // reviews.forEach(element => {
//     //     console.log("reviews eaches", element.review.rating)
//     //     console.log("reviews eaches", element.review.comment)
//     //     console.log("reviews eaches", element.review.user)
//     // });

//     const handleDelete = async (index) => {
//         try {
//             await onDelete(index);
//             console.log("Feedback deleted successfully.");
//         } catch (error) {
//             console.error("Failed to delete feedback:", error);
//         }
//     };

//     const handleEdit = (feedback) => {
//         setSelectedFeedback(feedback);
//     };

//     const handleUpdate = async () => {
//         if (!selectedFeedback) return;

//         try {
//             await onUpdate(selectedFeedback._id, selectedFeedback);
//             console.log("Feedback updated successfully.");
//             setSelectedFeedback(null);
//         } catch (error) {
//             console.error("Failed to update feedback:", error);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setSelectedFeedback({ ...selectedFeedback, [name]: value });
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <h2 className="text-2xl font-bold mb-4">{t("Customer Feedback")}</h2>
//             {reviews?.map((feedback) => (
//                 <div
//                     key={feedback._id}
//                     className={`flex items-center justify-between p-4 rounded-lg shadow-md ${feedback.rating === 1 ? "bg-red-100" : "bg-green-100"
//                         } mb-4`}
//                 >
//                     <div className="flex items-center">
//                         {feedback.rating === 1 ? (
//                             <FiAlertCircle className="text-red-500 mr-2" />
//                         ) : (
//                             <FiCheckCircle className="text-green-500 mr-2" />
//                         )}
//                         <div className="flex items-center">
//                             {selectedFeedback && selectedFeedback._id === feedback._id ? (
//                                 <>
//                                     <input
//                                         type="number"
//                                         name="rating"
//                                         value={selectedFeedback.rating}
//                                         onChange={handleChange}
//                                         min="1"
//                                         max="5"
//                                     />
//                                     <input
//                                         type="text"
//                                         name="comment"
//                                         value={selectedFeedback.comment}
//                                         onChange={handleChange}
//                                         placeholder="Enter your comment..."
//                                     />
//                                 </>
//                             ) : (
//                                 <>
//                                     {Array.from({ length: 5 }, (_, index) => (
//                                         <FaStar
//                                             key={index}
//                                             className={`text-${feedback.rating === 1 ? "red" : "green"}-500`}
//                                             fill={index < feedback.rating ? "currentColor" : "none"}
//                                             stroke="currentColor"
//                                         />
//                                     ))}
//                                     <p className="ml-2">{feedback.comment}</p>
//                                 </>
//                             )}
//                         </div>
//                     </div>
//                     <div>
//                         {selectedFeedback && selectedFeedback._id === feedback._id ? (
//                             <button onClick={handleUpdate} className="text-green-500 mr-2">
//                                 <FiCheckCircle />
//                             </button>
//                         ) : (
//                             <button onClick={() => handleEdit(feedback)} className="text-yellow-500 mr-2">
//                                 <FiEdit />
//                             </button>
//                         )}
//                         <button onClick={() => handleDelete(feedback._id)} className="text-red-500">
//                             <FiTrash />
//                         </button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default FeedbackMonitor;
