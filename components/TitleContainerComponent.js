import React from 'react';

export default React.memo((
    {
        item,
        childrenTitle,
        classNameTitle,
        classNameChildrenTitle,
        titleProps,
    }
) => {
    console.log("Rendering Title Container " + item.id);
    return (
        <div
            {
                ...Object.assign(
                    item.titleProps(item), (titleProps && titleProps(item)) || {}
                )
            }
            className={classNameTitle}
        >
            {item.title}
            {childrenTitle && <div
                className={classNameChildrenTitle}
            >
                {childrenTitle(item)}
            </div>}
        </div>
    )
});
