import React from 'react';

import {
    imageContainer,
    imageContent,
} from '../styles/constants';

export default React.memo((
    {
        item,
    }
) => {
    console.log("Rendering Image Container " + item.id);
    return (
    <div className={imageContainer}>
        <img className={imageContent} src={item.image} />
    </div>
)});
