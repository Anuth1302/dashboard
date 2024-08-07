import React from 'react';
import './CustomerFeedback.css'; // Ensure this file contains necessary styles

const CustomerFeedback = () => {
  // Dummy data for customer feedback
  const feedbacks = [
    { id: 1, name: 'John Doe', feedback: 'Great service!', rating: 5 },
    { id: 2, name: 'Jane Smith', feedback: 'Very satisfied with the food.', rating: 4 },
    { id: 3, name: 'Alice Johnson', feedback: 'Could be better.', rating: 3 },
    // { id: 4, name: 'Bob Brown', feedback: 'Not impressed.', rating: 2 },
    // { id: 5, name: 'Carol White', feedback: 'Excellent experience!', rating: 5 },
  ];

  return (
    <div className="customer-feedback">
      <h3>Customer Feedback</h3>
      <div className="feedback-list">
        {feedbacks.map((feedback) => (
          <div className="feedback-item" key={feedback.id}>
            <p className="feedback-name">{feedback.name}</p>
            <p className="feedback-text">"{feedback.feedback}"</p>
            <p className="feedback-rating">Rating: {feedback.rating} stars</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
