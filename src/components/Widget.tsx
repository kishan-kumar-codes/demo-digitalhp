'use client'
import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from '@/store/store';
import { setReviews } from '@/store/slices/reviewSlice';
import ReviewList from './ReviewList';
import {fetchReviews} from "@/utils/fetchReviews";

interface WidgetConfig {
    widgetId: string;
    title?: string;
    color?: string;
    backgroundColor?: string;
    showRatings?: boolean;
    displayMode?: string;
    showAvatar?: boolean;
    // Add other configuration options here
}

interface WidgetProps {
    config: WidgetConfig;
}

const Widget: React.FC<WidgetProps> = ({ config }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch reviews based on widgetId and dispatch to store
        fetchReviews(config.widgetId).then((reviews) => {
            dispatch(setReviews(reviews));
        });
    }, [config.widgetId, dispatch]);

    const widgetStyle: React.CSSProperties = {
        color: config.color || 'black',
        backgroundColor: config.backgroundColor || 'white',
    };

    return (
        <div className="widget-container" style={widgetStyle}>
            <h2>{config.title}</h2>
            <ReviewList showRatings={config.showRatings} />
        </div>
    );
};

const WidgetWithProvider: React.FC<WidgetProps> = (props) => (
    <Provider store={store}>
        <Widget {...props} />
    </Provider>
);

export default WidgetWithProvider;
