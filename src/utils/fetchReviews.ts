"use client";  // Ensure this is client-side

// Define the UniqueReview interface locally
export interface UniqueReview {
    id: number;
    content: string;
    rating: number;
}

export const fetchReviews = async (widgetId: string): Promise<UniqueReview[]> => {
    // Simulate fetching reviews from an API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, content: 'Great product!', rating: 5 },
                { id: 2, content: 'Could be better.', rating: 3 },
            ]);
        }, 1000);
    });
};
