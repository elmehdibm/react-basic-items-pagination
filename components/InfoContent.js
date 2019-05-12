import  React, { Component } from 'react';

const InfoContent = (
    classname,
    inbuiltData,
    itemSignature,
    index,
    widthRate,
    heightRate,
    children,
    titleStyle = {},
    descriptionStyle = {},
    childrenStyle = {}
) => {
    let inbuiltStyle = {
        "width": widthRate + "%",
        "verticalAlign": "top",
        "height": heightRate + "%",
        "display": "inline-block"
    };
    let commonContentStyle = {
        "paddingLeft": "8px"
    };
    return (<div
        className={classname}
        style={inbuiltStyle}
    >
        <div
            className={classname+"__title"}
            style={Object.assign({
                "padding": "8px",
                "fontSize": "24px",
                "fontWeight": "bold"
            }, titleStyle, commonContentStyle)}
        >
            {inbuiltData[itemSignature + index].title}
        </div>
        <div
            className={classname+"__description"}
            style={Object.assign({
                "paddingBottom": "8px",
                "fontSize": "16px"
            }, descriptionStyle, commonContentStyle)}
        >
            {inbuiltData[itemSignature + index].description}
        </div>
        <div
            className={classname+"__children"}
            style={Object.assign({}, childrenStyle, commonContentStyle)}            
        >
            {children}
        </div>
    </div>);
};

export default InfoContent;