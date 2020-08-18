import React from 'react';

import {
    contentContainer,
    childrenContentContainer,
} from '../styles/constants';

export default React.memo((
    {
        item,
        childrenContent,
    }
) => {
    console.log("Rendering Content Component " + item.id);
    return (
        <div className={contentContainer}>
            {item.description}
            {
                childrenContent && <div className={childrenContentContainer}>
                    {childrenContent(item)}
                </div>
            }
        </div>
    );
});
