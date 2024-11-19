import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

interface ReviewListProps {
    showRatings?: boolean;
}

const ReviewList: React.FC<ReviewListProps> = ({ showRatings }) => {
    const reviews = useSelector((state: RootState) => state.reviews.reviews);

    return (
        <div className="review-list">
            <h3>Reviews:</h3>
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        {review.content}
                        {showRatings && <span> - Rating: {review.rating}/5</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReviewList;
