import  React, { Component } from 'react';
import ImageStyle from "../styles/imageStyle";

const ImageContent = (
    classname,
    widthRate,
    heightRate,
    image,
    heightParent,
    paddingTop = 0,
    imageStyle
) => {
    let inbuiltStyle = {
            "width": widthRate + "%",
            "height": heightRate + "%",
            "display": "inline-block",
            "paddingTop": paddingTop + "%"
        };
    return (<div className={classname} style={inbuiltStyle}>
            <img
                src={image}
                style={Object.assign({}, ImageStyle, imageStyle)}
            />
        </div>);
};

export default ImageContent;
