import React from 'react';

import {
    titleContainer,
    childrenTitleContainer,
} from '../styles/constants';

export default React.memo((
    {
        item,
        childrenTitle,
    }
) => {
    console.log("Rendering Title Container " + item.id);
    return (
    <div className={titleContainer}>
        {item.title}
        {childrenTitle && <div className={childrenTitleContainer}>
            {childrenTitle(item)}
        </div>}
    </div>
)});
