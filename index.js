import React, { Component, PureComponent } from 'react';

import styledComponent, { cx } from './libs/styledComponent';

import {
    checkProp,
    comparePropsHolders,
} from "./flow/helpers";

import {
    MapClasseNames,
    initiateMapClassNames,
} from './styles/constants';
import generateStyles from './styles/generateStyles';
import BoxRendererComponent from './components/BoxRendererComponent';
import StateManagerHOC from './flow/StateManagerHOC';
import FiltersRendererComponent from './components/FiltersRendererComponent';
import PaginationComponent from './components/PaginationComponent';

/// Reminder : must remove all the comments beginning by ///

// Must Put the Import on top of the file and before importing the effective stylesheet of the file

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
            templateLeftFilters,
            templateRightFilters,
            imageProps,
            containerImageProps,
            contentProps,
            titleProps,
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
            styles,
            templateLeftFilters,
            templateRightFilters,
        );
    }

    render() {
        console.group("Updating the react-basic-items-pagination Core from v1.0 to v2.0beta");
        const {
            childrenContent,
            childrenTitle,
            classNames,
            templateLeftFilters,
            templateRightFilters,
            templateTopFilters,
            // Constructed in StateManagerHOC
            elements,
            currentPage,
            showPagination,
            onChangePage,
            totalPages,
            totalElements,
            itemsNumberPerPage,
            imageProps,
            containerImageProps,
            contentProps,
            titleProps,
        } = this.props;

        console.log(elements);

        console.log("Inside the rendering");
        console.log("elementsInBox is", this.elementsInBox);

        return (
            <div
                className={cx(
                    MapClasseNames.container,
                    classNames && classNames.container || ""
                )}
            >
                {
                    templateLeftFilters &&
                    <FiltersRendererComponent
                        template={templateLeftFilters}
                        classNames={classNames}
                        className={cx(
                            MapClasseNames.leftContainer,
                            classNames && classNames.leftContainer || ""
                        )}
                    />
                }
                <div
                    className={cx(
                        MapClasseNames.centerContainer,
                        classNames && classNames.centerContainer || ""
                    )}
                >
                    {
                        templateTopFilters &&
                        <FiltersRendererComponent
                            template={templateTopFilters}
                            classNames={classNames}
                            className={cx(
                                MapClasseNames.topCenterContainer,
                                classNames && classNames.topCenterContainer || ""
                            )}
                        />
                    }
                    <div
                        className={
                            cx(MapClasseNames.boxesContainer, classNames && classNames.boxesContainer || "")
                        }
                    >
                        {
                            elements.map(item => (
                                <BoxRendererComponent
                                    key={item.signature}
                                    item={item}
                                    classNames={classNames}
                                    childrenContent={childrenContent}
                                    childrenTitle={childrenTitle}
                                    elementsInBox={this.elementsInBox}
                                    imageProps={imageProps}
                                    containerImageProps={containerImageProps}
                                    contentProps={contentProps}
                                    titleProps={titleProps}
                                />
                            ))
                        }
                    </div>
                </div>
                {
                    templateRightFilters &&
                    <FiltersRendererComponent
                        template={templateRightFilters}
                        classNames={classNames}
                        className={cx(
                            MapClasseNames.rightContainer,
                            classNames && classNames.rightContainer || ""
                        )}
                    />
                }
                {showPagination && <div className={
                    cx(
                        MapClasseNames.paginationContainer,
                        classNames && classNames.paginationContainer || ""
                    )
                }>
                    <PaginationComponent
                        classNames={classNames}
                        currentPage={currentPage}
                        onChangePage={onChangePage}
                        totalPages={totalPages}
                        totalElements={totalElements}
                        itemsNumberPerPage={itemsNumberPerPage}
                    />
                </div>}
            </div >
        );
    }
};

class StyleSynchronizer extends PureComponent {
    constructor(props) {
        super(props);
        this.id = Math.floor(Math.random().toFixed(3) * 10000);
        initiateMapClassNames(this.id);
    }

    componentWillUnmount() {
        const element = document.getElementById("emui-style-id-" + this.id);
        if (element) {
            element.parentNode.removeChild(element);
        }
    }

    render() {
        return React.createElement(
            (styledComponent({
                [MapClasseNames.container]: {
                    display: 'grid',
                },
                [MapClasseNames.leftContainer]: {

                },
                [MapClasseNames.rightContainer]: {

                },
                [MapClasseNames.centerContainer]: {

                },
                [MapClasseNames.topCenterContainer]: {
                    display: 'block',
                },
                [MapClasseNames.filterRowContainer]: {
                    display: 'flex',
                    justifyContent: 'center',
                },
                [MapClasseNames.filterColContainer]: {
                    display: 'inline-block',
                },
                [MapClasseNames.paginationContainer]: {
                    gridRow: '2',
                    gridColumn: '1',
                    textAlign: 'center',
                },
                [MapClasseNames.boxesContainer]: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                },
                [MapClasseNames.boxContainer]: {
                    display: 'grid',
                    borderStyle: 'solid',
                },
                [MapClasseNames.imageContainer]: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                [MapClasseNames.imageContent]: {
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '100%',
                    width: '100%',
                },
                [MapClasseNames.infoContainer]: {

                },
                [MapClasseNames.descriptionContainer]: {

                },
                [MapClasseNames.contentContainer]: {
                    overflowY: 'auto',
                },
                [MapClasseNames.titleContainer]: {
                    display: 'flex',
                },
                [MapClasseNames.childrenContentContainer]: {

                },
                [MapClasseNames.childrenTitleContainer]: {

                },
                [MapClasseNames.paginationHolder]: {
                    display: "flex",
                    justifyContent: "center",
                },
                [MapClasseNames.paginationBlock]: {
                    cursor: "pointer",
                    padding: "4px 12px",
                    margin: "0 6px",
                    color: "black",
                    backgroundColor: "rgb(250, 250, 250)",
                    border: "1px solid rgb(202, 206, 206)",
                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 10px, rgba(0, 0, 0, 0.05) 0px -15px 15px -8px inset, black 0px 1px 2px",
                    transition: "transform 0.8s linear",
                    fontFamily: "inherit",
                    fontSize: "16px",
                    outlineColor: "#403749",
                    transition: "opacity 1.5s linear",
                    "&:hover": {
                        transform: "scale(1.03)",
                        transition: "transform 1s linear",
                    },
                },
                [MapClasseNames.paginationBlock_active]: {
                    backgroundColor: "rgb(81, 78, 78)",
                    color: "white",
                    border: "1px solid rgb(64, 66, 66)",
                    boxShadow: "rgb(129, 121, 121) 0px 1px 10px, rgb(154, 150, 150) 0px -15px 15px -8px inset, black 0px 1px 2px",
                    textShadow: "white 0px 0px 1px",
                },
                [MapClasseNames.paginationBlock_inactive]: {
                    opacity: "0.3",
                    cursor: "default",
                    transition: "opacity 1.5s linear",
                    "&:hover": {
                        transform: "scale(1)",
                        transition: "opacity 1.5s linear",
                    }
                },
                [MapClasseNames.searchInputContainer]: {
                    display: "flex",
                    border: "solid",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "40px",
                    backgroundColor: "transparent",
                    borderRadius: "4px",
                    width: '100%',
                },
                [MapClasseNames.searchInputField]: {
                    border: "none",
                    width: "80%",
                    padding: "4px",
                    backgroundColor: "transparent",
                    height: "100%",
                    fontSize: "14px",
                    outline: "none",
                    "&:focus": {
                        border: "solid 1px rgb(178, 190, 195)",
                    },
                },
                [MapClasseNames.searchInputIconContainer]: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "20%",
                    height: "100%",
                    cursor: "pointer",
                    "&:hover": {
                        border: "solid 1px rgb(178, 190, 195)",
                    },
                },
                [MapClasseNames.searchInputIcon]: {
                    height: "80%",
                    "&:hover": {
                        transform: "scale(1.3)",
                        transition: "transform 0.6s linear",
                    },
                },
                [MapClasseNames.transformSearchIconInEffect]: {
                    transform: "scale(1.4)",
                    transition: "transform 0.8s linear",
                },
                [MapClasseNames.transformSearchIconOutEffect]: {
                    transform: "scale(1)",
                    transition: "transform 1.6s linear",
                },
                [MapClasseNames.tagButtonsContainer]: {
                    display: "inline-grid",
                    padding: "2px",
                },
                [MapClasseNames.tagButton]: {
                    padding: "5px",
                    letterSpacing: "1.1px",
                    filter: "brightness(1.1)",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "transform 0.6s linear",
                    "&:hover": {
                        border: "1px solid ghostwhite",
                        boxShadow: "white 0px 0px 3px inset",
                        transform: "scale(1.1)",
                        transition: "transform 0.6s linear",
                    }
                },
                [MapClasseNames.tagButtonActive]: {
                    transform: "scale(1.1)",
                    border: "1px solid ghostwhite",
                    boxShadow: "white 0px 0px 3px inset",
                },
                [MapClasseNames.tagButtonInactive]: {
                    border: "none",
                    opacity: "0.5",
                    filter: "contrast(0.5)",
                },
                [MapClasseNames.checkBoxesContainer]: {
                    display: "inline-grid",
                    padding: "2px",
                    justifyContent: "center",
                    padding: "2px",
                },
                [MapClasseNames.checkBoxInput]: {
                    backgroundColor: "rgb(250, 250, 250)",
                    border: "1px solid rgb(202, 206, 206)",
                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px, rgba(0, 0, 0, 0.05) 0px -15px 10px -12px inset",
                    padding: "9px",
                    borderRadius: "3px",
                    position: "absolute",
                    appearance: "none",
                    transition: "all 0.8s ease",
                    cursor: 'pointer',
                    "&:hover": {
                        filter: "brightness(0.90)",
                        boxShadow: "0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1)",
                        transform: "scale(1.1)",
                        transition: "all 0.8s ease",
                    },
                },
                [MapClasseNames.checkBoxInputCheckAddOn]: {
                    filter: "brightness(0.90)",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1)",
                    transform: "scale(1.1)",
                },
                [MapClasseNames.checkBoxContainer]: {
                    display: "flex",
                    alignItems: "center",
                    cursor: 'pointer',
                },
                [MapClasseNames.checkBox]: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "24px",
                    height: "24px",
                    marginRight: "4px",
                    filter: "brightness(1.03)",
                },
                [MapClasseNames.checkBoxLabel]: {
                    fontWeight: "bold",
                },
                [MapClasseNames.checkIcon]: {
                    width: "100%",
                    height: "100%",
                    margin: "2px",
                    position: "relative",
                    zIndex: "1",
                    cursor: 'pointer',
                },
                [MapClasseNames.selectFieldContainer]: {
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    transition: "transform 0.8s linear",
                    "&:hover": {
                        transform: "scale(1.03)",
                        transition: "transform 1s linear",
                    }
                },
                [MapClasseNames.selectField]: {
                    appearance: "none",
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "rgb(68, 68, 68)",
                    lineHeight: "1.3",
                    padding: "0.6em 1.4em 0.5em 0.8em",
                    boxSizing: "border-box",
                    margin: "0",
                    border: "1px solid rgb(170, 170, 170)",
                    boxShadow: "rgba(0, 0, 0, 0.04) 0px 1px 0px 1px",
                    borderRadius: "0.5em",
                    backgroundColor: "rgb(255, 255, 255)",
                    backgroundImage: "linear-gradient(rgb(255, 255, 255) 0%, rgb(229, 229, 229) 100%)",
                    backgroundRepeat: "repeat",
                    backgroundPosition: "0px 0px",
                    backgroundSize: "100%",
                    fontFamily: "inherit",
                    WebkitAppearance: "none",
                    width: "100%",
                },
                [MapClasseNames.optionSelect]: {
                    background: "rgb(229, 229, 229)",
                    fontFamily: "inherit",
                },
                [MapClasseNames.selectFieldHolder]: {
                    display: "block",
                    width: "100%",
                },
                [MapClasseNames.selectFieldLabel]: {

                },
                [MapClasseNames.selectIconDownArrow]: {
                    position: "absolute",
                    zIndex: "1",
                    marginRight: "2px",
                },
                [MapClasseNames.selectIconUpArrow]: {
                    position: "absolute",
                    zIndex: "1",
                    marginRight: "2px",
                    transform: "scale(1.2)",
                },
            },
                {
                    "@media screen and (max-width: 1000px)": {
                        [MapClasseNames.container]: {
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            gridGap: '2%',
                        },
                        [MapClasseNames.leftContainer]: {
                            gridRow: '1',
                            gridColumn: '1',
                        },
                        [MapClasseNames.rightContainer]: {
                            gridRow: '2',
                            gridColumn: '1',
                        },
                        [MapClasseNames.centerContainer]: {
                            gridRow: '3',
                            gridColumn: '1',
                        },
                        [MapClasseNames.paginationContainer]: {
                            gridRow: '4',
                            gridColumn: '1',
                        }
                    },
                }
            )(
                StateManagerHOC(GlobalComponent),
                "emui-style-id-" + this.id,
            )),
            {
                ...this.props,
            }
        );
    }
};

export default StyleSynchronizer;
