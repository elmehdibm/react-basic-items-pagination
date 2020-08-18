import { handleContentOrderTemplateErrors, handleClassNamesErrors, handleStyleErrors } from "../flow/helpers";

import { changeCssProperty, cx } from "../libs/styledComponent";
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
            boxesContainer,
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
            boxContainer,
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
            boxContainer,
            {
                width: calculatedWidth,
            }
        );
    };
    // Handling the inside of the box : image , title , content ...
    // There is 18 possibilites :

    // Must add border Props for ( title , box , content , image)

    changeCssProperty(
        boxContainer,
        {
            margin: `${verticalSpacing ? verticalSpacing : 0} ${horizontalSpacing ? horizontalSpacing : 0}`,
            borderWidth: borderWidth ? (borderWidth + 'px') : '2px',
            ...styleRegisterValue.boxContainerStyle({
                height: height ? (height + 'px') : '1fr',
                titleContainerHeight: (titleContainerHeight) ? (titleContainerHeight + 'px') : 'auto',
                imageContainerRate: imageContainerRate ? (imageContainerRate + '%') : '1fr',
                contentContainerRate: contentContainerRate ? (contentContainerRate + '%') : '1fr',            
            }),
        },
    );

    changeCssProperty(
        titleContainer,
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
        imageContainer,
        {
            height: (height && !flexRow) ? height : '100%',
            ...styleRegisterValue.imageContainerStyle({
                borderWidth: borderWidth ? (borderWidth + 'px') : '2px',
            }),
        },
    );

    changeCssProperty(
        contentContainer,
        {
            padding: contentContainerPadding || '2px',
            ...styleRegisterValue.contentContainerStyle({
                borderWidth: borderWidth ? (borderWidth + 'px') : '2px'
            }),
        },
    );

    changeCssProperty(
        imageContent,
        {
            width: imageWidthRate ? (imageWidthRate + '%') : '100%',
            height: imageHeightRate ? (imageHeightRate + '%') : '100%',
        }
    );

    return styleRegisterValue.elements;
};
