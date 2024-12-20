"use client";  // Ensure this is client-side

// Define the UniqueReview interface locally
export interface UniqueReview {
    id: number;
    content: string;
    rating: number;
    reviewerName:string
    // img:any
}

export const fetchReviews = async (widgetId: string): Promise<UniqueReview[]> => {
    // Simulate fetching reviews from an API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, content: 'From the moment I called, their customer service was outstanding–friendly, responsive, and efficient.', rating: 5 , reviewerName:'Cindy Brennan'  },
                { id: 2, content: 'They exceeded my expectations in every way, and I am grateful for their dedication to excellence..', rating: 3 , reviewerName:'Maddie Connor'  },
            ]);
        }, 1000);
    });
};
