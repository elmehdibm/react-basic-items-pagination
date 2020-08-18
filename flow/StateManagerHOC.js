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
                paramData,
                childrenContent,
                childrenTitle,
                withImage,
                verticalSpacing,
                horizontalSpacing,
                itemsPerRow,
                itemsNumberPerPage,
                flexRow,
                minWidthItem,
                maxWidthItem,
                alignItems,
            } = props;
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
            // Building the Data if data exist
            const inbuildData = data ? buildData(
                data,
                withImage
            ) : null;
            // Here I will perform some pagination management ....
            const elements = inbuildData;
            this.state = {
                currentPage: 1,
                elements,
            };
        }

        shouldComponentUpdate() {

        }

        async requestCallAction() {
            // Here we'll use Fetch the request

        }


        render() {
            console.log("Render the state manager ...");
            const {elements} = this.state;
            // We must not pass the data to the element
            const {
                data,
                ...otherProps
            } = this.props;
            return (
                React.createElement(
                    component,
                    {
                        ...otherProps,
                        elements
                    }
                )
            );
        }
    };
};


