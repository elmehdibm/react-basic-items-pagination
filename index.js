import React, { Component } from 'react';

import styledComponent from './libs/styledComponent';

import {
    checkProp,
    handleErrors,
    comparePropsHolders,
    handleWarnings,
} from "./flow/helpers";

import {
    boxesContainer,
    boxContainer,
    imageContainer,
    infoContainer,
    descriptionContainer,
    contentContainer,
    titleContainer,
    imageContent,
    childrenContentContainer,
    childrenTitleContainer,
} from './styles/constants';
import generateStyles from './styles/generateStyles';
import BoxRendererComponent from './components/BoxRendererComponent';
import StateManagerHOC from './flow/StateManagerHOC';

/// Reminder : must remove all the comments beginning by ///

/**
 * This is the Global Component that render all the items and manage the flow of the data
 * Specs : multiple display mode , pagination (two modes) , fetch data , filters
 *
 * Props input :
 * * * * * * * *
 * * * * * Handling the datas :
 * * data -> array of { title : string, image: url source, description: string }
 * * paramData -> {
 * *  * url : string (required) ,
 * *  * size : number (required) ,
 * *  * handleFetchData : function -> () .... , /// To Elaborate
 * *  * formatUrl : function -> (url, page , size, ...queries) => return string url,
 * *  * *  (optional per default (url,page,size,...queries) => `${url}?page=${page}&size=${size} ... // queries here`)
 * *  * * /// An evolution is expected to add filters here , of course there'll be design for it
 * *  } ( data or paramData is required )
 * *
 * * * Handling the appearance of the pagination :
 * * withInfiniteScroll -> boolean (optional per default false)
 * * /// In the case of data , must simulate like a behavior that call the server , loading (will be either delayed or just keep it fast :D )
 * * paginationTheme -> {
 * * * 
 * * * 
 * * * 
 * * } (optional) /// I'll elaborate it later when deciding how to do it
 * * ( Must return a warning if withInfiniteScroll is true and paginationTheme is set)
 * * /// the pagination can be displayed also in a data mode and the size will be itemsNumberPerPage
 * *
 * * * * * Handling the basic appearance :
 * * withImage -> boolean (optional per default false)
 * * itemsNumberPerPage -> number (optional per default it'll be the size of data )
 * * ( Must return a warning that itemsNumberPerPage will be ignored if paramData is given )
 * * /// it'll impact a lot the logic
 * * /// And Yet Much work to display the pagination
 * * height -> number (optional per default auto and a max-height) /// I think it's just a normal height
 * * verticalSpacing -> number (optional per default 4 px) /// I'll search it in flex
 * * horizontalSpacing -> number (optional per default 4 px) /// I'll search it in flex :D
 * * itemsPerRow ->  number (optional per default auto and a max-width) /// I think it's just a normal width
 * * contentOrderTemplate -> { row(1-3) ... col(1-3) ... ((image|title|content)) } (optional)
 * * /// I'll need a parser of this and interpertor that generate styles from it
 * * childrenTitle -> function (item) => => <Element /> (optional)
 * * childrenContent -> function (item) => <Element /> (optional)
 * *
 * * * * * Addons Styles :
 * * classNames -> {
 * * * boxesClassName -> string (optional)
 * * * imageClassName -> string (optional)
 * * * titleClassName -> string (optional)
 * * * contentClassName -> string (optional)
 * * * descriptionClassName -> string (optional)
 * * * childrenClassName -> string (optional)
 * * } (optional)
 * * imageWidthRate (optional per default 50%)
 * * imageHeightRate (optional per default 100%)
 * * titleRate (optional per default auto)
 * * contentContainerRate (optional per default 50% or 100%)
 * * contentContainerWidthRate (optional per default 50% or 100%)
 * * /// Here Must handle errors if imageRate and contentRate doesn't sum up to 100
 * * titleContainerPadding (optionl per default auto)
 * * contentContainerPadding (optional per default auto)
 * * /// Here Must handle errors if titleContainerPadding and contentContainerPadding doesn't sum up to 100
 * * /// Depending on the contentOrderTemplate to specify if it's height or width rate
 * * styles -> {
 * * * imageContainerStyle -> { inline-style ... } (optional)
 * * * imageStyle -> { inline-style ... } (optional)
 * * * titleStyle -> { inline-style ... } (optional)
 * * * contentStyle -> { inline-style ... } (optional)
 * * * descriptionStyle -> { inline-style ... } (optional)
 * * * childrenStyle -> { inline-style ... } (optional)
 * * * boxesStyle -> { inline-style ... } (optional)
 * * * boxStyle -> { inline-style ... } (optional)
 * * }
 * *
 * * * * * * * * 
 * 
 */
class GlobalComponent extends Component {
    constructor(props) {
        super(props);
        console.log("Construction of the Global Component"),
        console.log(props);
        const {
            contentOrderTemplate,
            withImage,
            height,
            verticalSpacing,
            horizontalSpacing,
            itemsPerRow,
            flexRow,
            minWidthItem,
            maxWidthItem,
            classNames,
            imageWidthRate,
            imageHeightRate,
            titleContainerHeight,
            imageContainerRate,
            contentContainerRate,
            titleContainerPadding,
            contentContainerPadding,
            styles,
            alignItems,
            titleContainerAlignItems,
            titleContainerJustifyContent,
            borderWidth,
        } = props;
        // Generating all the styles Here and returning the format of the box item
        this.elementsInBox = generateStyles(
            contentOrderTemplate,
            withImage,
            height,
            borderWidth,
            verticalSpacing,
            horizontalSpacing,
            itemsPerRow,
            flexRow,
            minWidthItem,
            maxWidthItem,
            alignItems,
            titleContainerAlignItems,
            titleContainerJustifyContent,
            classNames,
            imageWidthRate,
            imageHeightRate,
            titleContainerHeight,
            imageContainerRate,
            contentContainerRate,
            titleContainerPadding,
            contentContainerPadding,
            styles
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        return comparePropsHolders(
            nextProps,
            this.props,
            nextState,
            this.state
        );
    }

    render() {
        console.group("Updating the react-basic-items-pagination Core from v1.0 to v2.0beta");
        const {
            childrenContent,
            childrenTitle,
            elements
        } = this.props;

        console.log(elements);

        console.log("Inside the rendering");
        console.log("elementsInBox is", this.elementsInBox);

        return (<div
            className={boxesContainer}
        >
            {
                elements.map(item => (
                    <BoxRendererComponent
                        key={item.id}
                        item={item}
                        childrenContent={childrenContent}
                        childrenTitle={childrenTitle}
                        elementsInBox={this.elementsInBox}
                    />
                ))
            }
        </div>);
    }
};

export default React.memo(styledComponent({
    [boxesContainer]: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    [boxContainer]: {
        display: 'grid',
        borderStyle: 'solid',
    },
    [imageContainer]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    [imageContent]: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%',
        width: '100%',
    },
    [infoContainer]: {

    },
    [descriptionContainer]: {

    },
    [contentContainer]: {
        overflowY: 'auto',
    },
    [titleContainer]: {
        display: 'flex',
    },
    [childrenContentContainer]: {

    },
    [childrenTitleContainer]: {

    },
})(StateManagerHOC(GlobalComponent)));
