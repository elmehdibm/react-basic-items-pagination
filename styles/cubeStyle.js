
const style = (
    height,
    verticalSpacing,
    horizontalSpacing,
    itemsPerRow,
    custom = "normal",
    otherStyles = {}
) => {
    let inbuiltStyle = {
    "border": "1px solid",
    "height": height,
    "width": "calc( calc(100% / "+itemsPerRow+") - "+(itemsPerRow * verticalSpacing)+"px - 4px)",
    "display": "inline-block",
    "margin": verticalSpacing + "px " + horizontalSpacing + "px",
    "textAlign": "left"
    };
    if (custom === "clickable") {
        inbuiltStyle = {
            ...inbuiltStyle,
            "cursor": "pointer"
        };
    }
    return Object.assign({}, inbuiltStyle, otherStyles);
};

export default style;