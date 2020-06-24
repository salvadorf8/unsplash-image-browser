import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    // original line but we are destructering image
    // const images = props.images.map((image) => {
    const images = props.images.map((image) => {
        //remember to add a key for performance reasons
        return <ImageCard key={image.id} image={image} />;
    });

    return <div className="image-list">{images}</div>;
};

export default ImageList;