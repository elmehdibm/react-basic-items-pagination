import React, { Component } from 'react';

import buildData from "./buildData";
import { handleErrors, handleWarnings } from './helpers';

export default component => {
    return class StateManagerHOC extends Component {
        constructor(props) {
            console.log("Construction of the state Manager");
            super(props);
            const {
                data,
                itemsNumberPerPage, // Optional if changeDataMode is false
                changeDataMode,
                totalElements,
                onChangePage,
                paramData, // Expected for another release
                paginationMode, // Expected for another release
                childrenContent,
                childrenTitle,
                withImage,
                verticalSpacing,
                horizontalSpacing,
                itemsPerRow,
                flexRow,
                minWidthItem,
                maxWidthItem,
                alignItems,
            } = props;
            // Must Add this rules :
            // if changeDataMode is true , we'll require this props : 
            //     • itemsNumberPerPage
            //     • totalElements
            //     • onChangePage (asynchron method)
            //     There will be also actions for filters ..... (struct of prop ..)
            //  or pass it in the element and the function must know the page and the size
            // itemsNumberPerPage is optional if changeDataMode is false

            // Must Add also templateXFilters ....
            /// Must also handle the types of props erors like strings and objects ...
            // Handling Errors of props Input Here
            console.log("Handling Errors ...");
            handleErrors(
                paramData,
                data,
                childrenContent,
                childrenTitle,
                verticalSpacing,
                horizontalSpacing,
                itemsPerRow,
                flexRow,
                minWidthItem,
                maxWidthItem,
                alignItems,
            );
            // Handle Warnings
            console.log("Handling Warnings ...");
            handleWarnings(
                paramData,
                itemsNumberPerPage,
                flexRow,
                itemsPerRow,
            );

            let elements = [];
            let showPagination = false;
            if (data) {
                // Building the Data if data exist
                const inbuildData = buildData(
                    data,
                    withImage
                );
                this.itemsNumberPerPage = itemsNumberPerPage;
                if (changeDataMode) {
                    this.totalElements = totalElements;
                    this.totalPages = Math.ceil(totalElements / itemsNumberPerPage);
                    // The onChangePage with changeDataMode
                    this.onChangePage = async (
                        page,
                    ) => {
                        const newElements = await onChangePage(
                            page,
                            this.itemsNumberPerPage, // as a size
                            this.totalElements, // as the totalElements
                            this.state.elements, // as old elements
                        );
                        this.setState({
                            currentPage: page,
                            elements: newElements,
                        });
                    };
                } else {
                    if (
                        itemsNumberPerPage
                        && inbuildData.length > itemsNumberPerPage // Or Maybe Add it on error or let it and add it on warnings
                    ) {
                        this.allElements = inbuildData;
                        this.totalPages = Math.ceil(inbuildData.length / itemsNumberPerPage);
                        elements = inbuildData.slice(0, itemsNumberPerPage);
                        // The Generated onChangePage
                        this.onChangePage = (
                            page,
                        ) => {
                            this.setState(
                                {
                                    currentPage: page,
                                    elements: this.allElements.slice(
                                        (this.itemsNumberPerPage * page), // Maybe for safety add Math.min but logically it shouldn't be superior
                                        Math.min(
                                            (this.itemsNumberPerPage * (page + 1)),
                                            this.allElements.length,
                                        ),
                                    ),
                                },
                            );
                        };
                        showPagination = true;
                    } else {
                        elements = inbuildData;
                    }
                }
            } else if (paramData) {
                // TODO: In another release of the lib
                showPagination = true;
            }

            // Here I will perform some pagination management ....

            this.state = {
                currentPage: 0,
                elements,
                // totalPages, // Must know whether to add it as a prop // Remove this comment if it works 
                showPagination,
            };


        }

        // Must Check if the user change the prop of data , will it pass also in construction ?
        // Or Just Specify that the data and certain props must be immutable
        componentWillReceiveProps() {

        }

        shouldComponentUpdate() {
            // the compareProps Must move it here
            return true;
        }

        render() {
            console.log("Render the state manager ...");
            const {
                elements,
                currentPage,
                showPagination,
            } = this.state;
            // We must not pass the data to the element
            const {
                data,
                ...otherProps
            } = this.props;
            // Here it doesn't contain design logics
            // Only passing methods and params that manage the states
            return (
                React.createElement(
                    component,
                    {
                        ...otherProps,
                        elements,
                        currentPage,
                        showPagination,
                        onChangePage: this.onChangePage,
                        totalPages: this.totalPages,
                        totalElements: this.totalElements,
                        itemsNumberPerPage: this.itemsNumberPerPage,
                    }
                )
            );
        }
    };
};
