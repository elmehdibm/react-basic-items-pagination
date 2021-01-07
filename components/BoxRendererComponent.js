import React from 'react';

import {
    MapClasseNames,
} from '../styles/constants';

import TitleContainerComponent from './TitleContainerComponent';
import ImageContainerComponent from './ImageContainerComponent';
import ContentContainerComponent from './ContentContainerComponent';
import { cx } from '../libs/styledComponent';

export default React.memo((
    {
        elementsInBox,
        item,
        childrenContent,
        childrenTitle,
        classNames,
        imageProps,
        containerImageProps,
        contentProps,
        titleProps,
    }
) => (
        <div
            // This is fixed
            className={
                cx(MapClasseNames.boxContainer, classNames && classNames.boxContainer || "")
            }
            //
            // className = { item.length > 0 ? "className1" : "className2" }
            // Not to be used
            // Cause the specificity of this is maximal
            // style={{
            //      But this is dynamic
            //     "fontSize": item.length > 0 ? "16px" : "12px"
            //     "margin": "10px"
            // }}
        >
            {
                elementsInBox.includes('title') && <TitleContainerComponent
                    item={item}
                    childrenTitle={childrenTitle}
                    titleProps={titleProps}
                    classNameTitle={
                        cx(MapClasseNames.titleContainer, classNames && classNames.titleContainer || "")
                    }
                    classNameChildrenTitle={
                        cx(MapClasseNames.childrenTitleContainer, classNames && classNames.childrenTitleContainer || "")
                    }
                />
            }
            {
                elementsInBox.includes('image') && <ImageContainerComponent
                    item={item}
                    imageProps={imageProps}
                    containerImageProps={containerImageProps}
                    classNameImageContainer={
                        cx(MapClasseNames.imageContainer, classNames && classNames.imageContainer || "")
                    }
                    classNameImageContent={
                        cx(MapClasseNames.imageContent, classNames && classNames.imageContent || "")
                    }
                />
            }            {
                elementsInBox.includes('content') && <ContentContainerComponent
                    item={item}
                    childrenContent={childrenContent}
                    contentProps={contentProps}
                    classNameContent={
                        cx(MapClasseNames.contentContainer, classNames && classNames.contentContainer || "")
                    }
                    classNameChildrenContent={
                        cx(MapClasseNames.childrenContentContainer, classNames && classNames.childrenContentContainer || "")
                    }
                />
            }
        </div>
    ));
