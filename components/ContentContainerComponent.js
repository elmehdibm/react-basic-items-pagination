import React from 'react';

export default React.memo((
    {
        item,
        childrenContent,
        classNameContent,
        classNameChildrenContent,
        contentProps,
    }
) => {
    console.log("Rendering Content Component " + item.id);
    return (
        <div
            className={classNameContent}
            {
            ...Object.assign(
                item.contentProps(item), (contentProps && contentProps(item)) || {}
            )
            }
        >
            {item.description}
            {
                (item.content || childrenContent) && <div className={classNameChildrenContent}>
                    {item.content || childrenContent(item)}
                </div>
            }
        </div>
    );
});
