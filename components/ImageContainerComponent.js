import React from 'react';

export default React.memo((
    {
        item,
        containerImageProps,
        imageProps,
        classNameImageContainer,
        classNameImageContent,
    }
) => {
    console.log("Rendering Image Container " + item.id);
    return (
        <div
            className={classNameImageContainer}
            {
            ...Object.assign(
                item.containerImageProps(item), (containerImageProps && containerImageProps(item)) || {}
            )
            }
        >
            {(item.image && !item.imageContent) &&
                <img
                    {
                    ...Object.assign(
                        item.imageProps(item), (imageProps && imageProps(item)) || {}
                    )
                    }
                    loading="lazy"
                    className={classNameImageContent}
                    src={item.image}
                />
            }
            {item.imageContent}
        </div>
    )
});
