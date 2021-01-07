import { handleContentOrderTemplateErrors, handleClassNamesErrors, handleStyleErrors } from "../flow/helpers";

import { addMediaQuery, changeCssProperty } from "../libs/styledComponent";
import {
    MapClasseNames,
} from './constants';
import styleRegister from "./styleRegister";

/// Must Add Docs here
export default (
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
) => {
    console.log("Managing the contentOrderTemplate ...");

    // Must manage the per default contentOrderTemplate depending on the withImage Prop
    const contentOrderTemplateKeyValue = JSON.stringify(
        contentOrderTemplate
    ).toLowerCase();
    const styleRegisterValue = styleRegister[contentOrderTemplateKeyValue];

    console.log(" the style of register value : ", styleRegisterValue);

    console.log("Handling errors of styling");
    handleClassNamesErrors(classNames);
    handleStyleErrors(styles);
    handleContentOrderTemplateErrors(
        contentOrderTemplate,
        withImage,
    );
    // Handling the holder of boxes
    if (alignItems) {
        changeCssProperty(
            MapClasseNames.boxesContainer,
            {
                justifyContent: alignItems,
            }
        );
    };
    // Handling Just the Box Style
    // The organization of the box in rows
    // Must add borderBoxValue per default 2
    const borderValueToSubstract = borderWidth ? (2 * borderWidth) : 4;
    if (flexRow) {
        let valueToSubstract = horizontalSpacing ? (2 * horizontalSpacing) : 0;
        changeCssProperty(
            MapClasseNames.boxContainer,
            {
                minWidth: `${(minWidthItem - valueToSubstract - borderValueToSubstract)}px`,
                maxWidth: `${(maxWidthItem - valueToSubstract - borderValueToSubstract)}px`,
            }
        );
    } else {
        let itemsPerRowValue = '100%';
        if (itemsPerRow) {
            itemsPerRowValue = (100 / itemsPerRow) + '%';
        }
        const calculatedWidth = `calc(${itemsPerRowValue} - ${borderValueToSubstract}px - ${horizontalSpacing ? (horizontalSpacing * 2) : 0}px)`;
        changeCssProperty(
            MapClasseNames.boxContainer,
            {
                width: calculatedWidth,
            }
        );
    };
    // Handling the inside of the box : image , title , content ...
    // There is 18 possibilites :

    // Must add border Props for ( title , box , content , image)

    changeCssProperty(
        MapClasseNames.boxContainer,
        {
            margin: `${verticalSpacing ? verticalSpacing : 0} ${horizontalSpacing ? horizontalSpacing : 0}`,
            borderWidth: borderWidth ? (borderWidth + 'px') : '2px',
            height: (height && flexRow) ? `${height}px` : 'auto',
            ...styleRegisterValue.boxContainerStyle({
                titleContainerHeight: (titleContainerHeight) ? (titleContainerHeight + 'px') : 'auto',
                imageContainerRate: imageContainerRate ? (imageContainerRate + '%') : '1fr',
                contentContainerRate: contentContainerRate ? (contentContainerRate + '%') : '1fr',
            }),
        },
    );

    changeCssProperty(
        MapClasseNames.titleContainer,
        {
            justifyContent: titleContainerJustifyContent ? titleContainerJustifyContent : 'center',
            alignItems: titleContainerAlignItems ? titleContainerAlignItems : 'center',
            padding: titleContainerPadding || '2px',
            ...styleRegisterValue.titleContainerStyle({
                borderWidth: borderWidth ? (borderWidth + 'px') : '2px',
            }),
        },
    );

    changeCssProperty(
        MapClasseNames.imageContainer,
        {
            height: (height && !flexRow) ? height : '100%',
            ...styleRegisterValue.imageContainerStyle({
                borderWidth: borderWidth ? (borderWidth + 'px') : '2px',
            }),
        },
    );

    changeCssProperty(
        MapClasseNames.contentContainer,
        {
            padding: contentContainerPadding || '2px',
            ...styleRegisterValue.contentContainerStyle({
                borderWidth: borderWidth ? (borderWidth + 'px') : '2px'
            }),
        },
    );

    changeCssProperty(
        MapClasseNames.imageContent,
        {
            width: imageWidthRate ? (imageWidthRate + '%') : '100%',
            height: imageHeightRate ? (imageHeightRate + '%') : '100%',
        }
    );


    // Management of left & right
    if (templateLeftFilters) {
        changeCssProperty(
            MapClasseNames.paginationContainer,
            {
                "gridColumn": "2",
            }
        );
    }
    if (templateLeftFilters && templateRightFilters) {
        changeCssProperty(
            MapClasseNames.container,
            {
                "gridTemplateColumns": "20% 1fr 20%",
            }
        );
    }
    if (templateLeftFilters && !templateRightFilters) {
        changeCssProperty(
            MapClasseNames.container,
            {
                "gridTemplateColumns": "30% 1fr",
            }
        );
    }
    if (templateRightFilters && !templateLeftFilters) {
        changeCssProperty(
            MapClasseNames.container,
            {
                "gridTemplateColumns": "1fr 30%",
            }
        );
    }

    return styleRegisterValue.elements;
};
