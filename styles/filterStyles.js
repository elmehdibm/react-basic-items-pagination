export const row = 'row';

export const col = 'col';

export const FilperColRow = {
    [row]: col,
    [col]: row,
};


export const styleRenderer = (
    value,
    element,
    contentNumber
) => {
    const {
        height, width, content, display,
        ...otherProps
    } = element;
    // Remove all the classic Props and let added style Props
    const style = {};
    if (value === row) {
        style["width"] = "100%";
        style["height"] = height ? height : 'auto';
    };
    if (value === col) {
        // Must Check the percentages here
        style["height"] = "auto";
        style["width"] = width ? width : `${(100 / contentNumber)}%`;
    };
    return {
        ...style,
        ...otherProps,
    };
};
