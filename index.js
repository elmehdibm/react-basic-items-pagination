import  React, { Component } from 'react';

import ImageContent from "./components/ImageContent";
import InfoContent from "./components/InfoContent";

import cubeStyle from "./styles/cubeStyle";

import buildData from "./flow/buildData";
import {checkProp, handleErrors, comparePropsHolders} from "./flow/helpers";

class GlobalComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            "currentPage": 0
        };
    }

    shouldComponentUpdate(nextProps, nextState){
        return comparePropsHolders(nextProps, this.props);
    }

    render(){
        const {
            height,
            verticalSpacing,
            horizontalSpacing,
            itemsPerRow,
            itemsNumber,
            data,
            imageStyle,
            contentStyle,
            withImage,
            titleStyle,
            descriptionStyle,
            childrenContent,
            childrenStyle,
            boxStyle
        } = this.props;
        let arrays;
        let id = "";
        if(itemsNumber) {
            handleErrors(itemsNumber, data, withImage, imageStyle);
            id = this._reactInternalFiber._debugID;
            const classname = "container_cube--c"+id;
            const itemSignature = "item"+id;
            const inbuiltData = buildData(itemSignature, data, withImage);
            console.group("Basic Items Pagination");
            console.group("The inbuild Data");
            console.table(inbuiltData);
            console.groupEnd();
            let widthRateContent = 100;
            if(withImage) {
                widthRateContent = 100 - imageStyle.widthRate;
            }
            let inBoxStyle = checkProp(boxStyle, "The Box Style");
            let inDescriptionStyle = checkProp(descriptionStyle, "The content Description Style");
            let inTitleStyle = checkProp(descriptionStyle, "The content Title Style");
            let inChildrenStyle = checkProp(childrenStyle, "The children style");
            let inChildrenContent = checkProp(childrenContent, "The children content");
            arrays = new Array(itemsNumber);
            arrays.fill("");
            arrays = arrays.map(
                (elem, index) =>
                    (<div
                        className={classname+index}
                        key={"cube"+id+index}
                        style={cubeStyle(
                            height,
                            verticalSpacing,
                            horizontalSpacing,
                            itemsPerRow,
                            "normal",
                            inBoxStyle
                        )}
                    >
                        {withImage && ImageContent(
                            classname+index+"--image",
                            imageStyle.widthRate,
                            imageStyle.heightRate,
                            inbuiltData[itemSignature + index].image,
                            height,
                            0,
                            imageStyle
                            )
                        }
                        {
                            InfoContent(
                                classname+index+"--content",
                                inbuiltData,
                                itemSignature,
                                index,
                                widthRateContent,
                                100,
                                inChildrenContent,
                                inTitleStyle,
                                inDescriptionStyle,
                                inChildrenStyle
                            )
                        }
                    </div>)
            );
        };
        console.groupEnd();
        if(arrays){return <div style={{"textAlign" : "center"}} className={"container_cube"+id}>{arrays}</div>;}
        throw new Error("Basic Items Arguments Error -> The itemsNumber Prop is required");
    }
};

export default GlobalComponent;
