import React from 'react';

import {
    boxContainer,
} from '../styles/constants';

import TitleContainerComponent from './TitleContainerComponent';
import ImageContainerComponent from './ImageContainerComponent';
import ContentContainerComponent from './ContentContainerComponent';

export default React.memo((
    {
        elementsInBox,
        item,
        childrenContent,
        childrenTitle,
    }
) => (
    <div className={boxContainer}>
        {
            elementsInBox.includes('title') && <TitleContainerComponent
                item={item}
                childrenTitle={childrenTitle}
            />
        }
        {
            elementsInBox.includes('image') && <ImageContainerComponent
                item={item}
            />
        }            {
            elementsInBox.includes('content') && <ContentContainerComponent
                item={item}
                childrenContent={childrenContent}
            />
        }
    </div>
));
