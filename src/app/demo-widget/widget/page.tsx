// app/page.tsx (or app/widget-page.tsx, etc.)
'use client'; // Mark this page as a client component

import React, { useEffect, useState } from 'react';
import Script from 'next/script';

const Widget: React.FC = () => {
    const [scriptSrc, setScriptSrc] = useState<string | null>(null);
    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
        // Fetch the dynamically generated script filename
        fetch('/api/widget/get-widget-filename')
            .then((response) => response.json())
            .then((data) => {
                if (data.filename) {
                    setScriptSrc(`/dist/${data.filename}`);
                } else {
                    console.error('Failed to load widget filename.');
                }
            })
            .catch((error) => console.error('Error fetching widget filename:', error));
    }, []);

    useEffect(() => {
        if (scriptLoaded && window.renderReviewWidget) {
            window.renderReviewWidget('my-review-widget', {
                widgetId: 'widget-id',
                title: 'Customer Reviews',
                color: '#ff6600',
                displayMode: 'compact',
                showAvatar: false,
                showRatings: true,
            });
        }
    }, [scriptLoaded]);

    return (
        <>
            {scriptSrc && (
                <Script
                    src={scriptSrc}
                    onLoad={() => setScriptLoaded(true)}
                />
            )}
            <div id="my-review-widget"></div>
        </>
    );
};

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Widget Page</h1>
            <Widget />
        </div>
    );
};

export default HomePage;
