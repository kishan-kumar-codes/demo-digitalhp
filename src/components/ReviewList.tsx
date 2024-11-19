import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Image from 'next/image';
import { StarRatingMobile } from '@/utils/helper';


interface ReviewListProps {
    showRatings?: boolean;
}

const ReviewList: React.FC<ReviewListProps> = ({ showRatings }) => {
    const reviews = useSelector((state: RootState) => state.reviews.reviews);

    return (
        <div className="review-list">
            <h3>Reviews:</h3>
            
            {reviews.map((review, index) => (
                    <div
                      key={index}
                      className="flex flex-col px-[3%] md:px-[3%]  w-full h-full rounded-2xl py-1 md:py-2.5 bg-[#E0E0E0] mt-6">
                      <div className="flex w-full gap-2 justify-between">
                        <div className="flex w-fit items-center py-1 md:py-2">
                         
                        </div>
                        <div className="flex w-full flex-col gap-0.5 py-1 md:py-2">
                          <div className="w-full flex">
                            <div className="w-16 md:w-28 h-fit">
                              {" "}
                              <StarRatingMobile rating={review.rating} />
                            </div>
                          </div>
                          <div className="font-family-Glacial_Indifference-Bold-Helvetica text-[9.04px] w-full flex-shrink-0 md:text-[16px] font-semibold text-[#6D6D6D]">
                            {review.reviewerName}
                          </div>
                          <div className="font-family-Glacial_Indifference-Bold-Helvetica  flex  items-end py-0 pb-2 md:pb-0 justify-start flex-wrap w-full font-normal text-[#6D6D6D] ">
                            <div className="text-[6px] md:text-xs">
                              {review.content}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
        </div>
    );
};

export default ReviewList;
