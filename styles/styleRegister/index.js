import {
    contentOrderTitleUpImageLeftTemplate,
    contentOrderTitleDownImageLeftTemplate,
    contentOrderNoTitleImageLeftTemplate,
    contentOrderFullTitleUpImageLeftTemplate,
    contentOrderFullTitleDownImageLeftTemplate,
    contentOrderImageOnlyTemplate,
    contentOrderTitleUpContentLeftTemplate,
    contentOrderTitleDownContentLeftTemplate,
    contentOrderNoTitleContentLeftTemplate,
    contentOrderFullTitleUpContentLeftTemplate,
    contentOrderFullTitleDownContentLeftTemplate,
    contentOrderContentOnlyTemplate,
    contentOrderTitleUpImageUpTemplate,
    contentOrderTitleDownImageUpTemplate,
    contentOrderTitleUpContentUpTemplate,
    contentOrderTitleDownContentUpTemplate,
    contentOrderTitleUpImageOnlyTemplate,
    contentOrderTitleDownImageOnlyTemplate,
    contentOrderTitleUpContentOnlyTemplate,
    contentOrderTitleDownContentOnlyTemplate,
} from './contentOrderTemplateConstants';

export default {
    // All Possibilities when image is left :
    [JSON.stringify(contentOrderTitleUpImageLeftTemplate)]: {
        boxContainerStyle: props => ({
            gridTemplateColumns: `${props.imageContainerRate} ${props.contentContainerRate}`,
            gridTemplateRows: `${props.titleContainerHeight} ${props.height}`,
        }),
        titleContainerStyle: props => ({
            gridColumn: '2',
            borderBottomStyle: 'solid',
            borderBottomWidth: props.borderWidth,
        }),
        imageContainerStyle: props => ({
            gridColumn: '1',
            gridRow: '1 / 3',
            borderRightStyle: 'solid',
            borderRightWidth: props.borderWidth,
        }),
        contentContainerStyle: props => ({
            gridColumn: '2',
        }),
        elements: ['title', 'image', 'content'],
    },
    [JSON.stringify(contentOrderTitleDownImageLeftTemplate)]: {
        boxContainerStyle: props => ({
            gridTemplateColumns: `${props.imageContainerRate} ${props.contentContainerRate}`,
            gridTemplateRows: `${props.height} ${props.titleContainerHeight}`,
        }),
        titleContainerStyle: props => ({
            gridColumn: '2',
            gridRow: '2',
            borderTopStyle: 'solid',
            borderTopWidth: props.borderWidth,
        }),
        imageContainerStyle: props => ({
            gridColumn: '1',
            gridRow: '1 / 3',
            borderRightStyle: 'solid',
            borderRightWidth: props.borderWidth,
        }),
        contentContainerStyle: props => ({
            gridColumn: '2',
        }),
        elements: ['title', 'image', 'content'],
    },
    [JSON.stringify(contentOrderNoTitleImageLeftTemplate)]: {
        boxContainerStyle: props => ({
            gridTemplateColumns: `${props.imageContainerRate} ${props.contentContainerRate}`,
            gridTemplateRows: `${props.height}`,
        }),
        titleContainerStyle: props => ({
        }),
        imageContainerStyle: props => ({
            gridColumn: '1',
            borderRightStyle: 'solid',
            borderRightWidth: props.borderWidth,
        }),
        contentContainerStyle: props => ({
            gridColumn: '2',
        }),
        elements: ['image', 'content'],
    },
    [JSON.stringify(contentOrderFullTitleUpImageLeftTemplate)]: {
        boxContainerStyle: props => ({
            gridTemplateColumns: `${props.imageContainerRate} ${props.contentContainerRate}`,
            gridTemplateRows: `${props.titleContainerHeight} ${props.height}`,
        }),
        titleContainerStyle: props => ({
            gridColumn: '1 / 3',
            borderBottomStyle: 'solid',
            borderBottomWidth: props.borderWidth,
        }),
        imageContainerStyle: props => ({
            gridColumn: '1',
            gridRow: '2',
            borderRightStyle: 'solid',
            borderRightWidth: props.borderWidth,
        }),
        contentContainerStyle: props => ({
            gridColumn: '2',
            gridRow: '2',
        }),
        elements: ['title', 'image', 'content'],
    },
    [JSON.stringify(contentOrderFullTitleDownImageLeftTemplate)]: {
        boxContainerStyle: props => ({
            gridTemplateColumns: `${props.imageContainerRate} ${props.contentContainerRate}`,
            gridTemplateRows: `${props.height} ${props.titleContainerHeight}`,
        }),
        titleContainerStyle: props => ({
            gridColumn: '1 / 3',
            gridRow: '2',
            borderTopStyle: 'solid',
            borderTopWidth: props.borderWidth,
        }),
        imageContainerStyle: props => ({
            gridColumn: '1',
            gridRow: '1',
            borderRightStyle: 'solid',
            borderRightWidth: props.borderWidth,
        }),
        contentContainerStyle: props => ({
            gridColumn: '2',
            gridRow: '1',
        }),
        elements: ['title', 'image', 'content'],
    },
    [JSON.stringify(contentOrderImageOnlyTemplate)]: {
        boxContainerStyle: props => ({
            gridTemplateRows: `${props.height}`,
        }),
        titleContainerStyle: props => ({
        }),
        imageContainerStyle: props => ({
            width: '100%',
            height: '100%', 
        }),
        contentContainerStyle: props => ({
        }),
        elements: ['image'],

    },
    // All Possibilities when content is left :
    [JSON.stringify(contentOrderTitleUpContentLeftTemplate)]: {
        boxContainerStyle: props => ({
            gridTemplateColumns: `${props.contentContainerRate} ${props.imageContainerRate}`,
            gridTemplateRows: `${props.titleContainerHeight} ${props.height}`,
        }),
        titleContainerStyle: props => ({
            gridColumn: '2',
            borderBottomStyle: 'solid',
            borderBottomWidth: props.borderWidth,
        }),
        contentContainerStyle: props => ({
            gridColumn: '1',
            gridRow: '1 / 3',
            borderRightStyle: 'solid',
            borderRightWidth: props.borderWidth,
        }),
        imageContainerStyle: props => ({
            gridColumn: '2',
        }),
        elements: ['title', 'image', 'content'],
    },
    [JSON.stringify(contentOrderTitleDownContentLeftTemplate)]: {
        boxContainerStyle: props => ({
            gridTemplateColumns: `${props.contentContainerRate} ${props.imageContainerRate}`,
            gridTemplateRows: `${props.height} ${props.titleContainerHeight}`,
        }),
        titleContainerStyle: props => ({
            gridColumn: '2',
            gridRow: '2',
            borderTopStyle: 'solid',
            borderTopWidth: props.borderWidth,
        }),
        contentContainerStyle: props => ({
            gridColumn: '1',
            gridRow: '1 / 3',
            borderRightStyle: 'solid',
            borderRightWidth: props.borderWidth,
        }),
        imageContainerStyle: props => ({
            gridColumn: '2',
        }),
        elements: ['title', 'image', 'content'],
    },
    [JSON.stringify(contentOrderNoTitleContentLeftTemplate)]: {
        boxContainerStyle: props => ({
            gridTemplateColumns: `${props.contentContainerRate} ${props.imageContainerRate}`,
            gridTemplateRows: `${props.height}`,
        }),
        titleContainerStyle: props => ({
        }),
        contentContainerStyle: props => ({
            gridColumn: '1',
            borderRightStyle: 'solid',
            borderRightWidth: props.borderWidth,
        }),
        imageContainerStyle: props => ({
            gridColumn: '2',
            gridRow: '1',
        }),
        elements: ['image', 'content'],

    },
    [JSON.stringify(contentOrderFullTitleUpContentLeftTemplate)]: {
        boxContainerStyle: props => ({
            gridTemplateColumns: `${props.contentContainerRate} ${props.imageContainerRate}`,
            gridTemplateRows: `${props.titleContainerHeight} ${props.height}`,
        }),
        titleContainerStyle: props => ({
            gridColumn: '1 / 3',
            borderBottomStyle: 'solid',
            borderBottomWidth: props.borderWidth,
        }),
        contentContainerStyle: props => ({
            gridColumn: '1',
            gridRow: '2',
            borderRightStyle: 'solid',
            borderRightWidth: props.borderWidth,
        }),
        imageContainerStyle: props => ({
            gridColumn: '2',
            gridRow: '2',
        }),
        elements: ['title', 'image', 'content'],
    },
    [JSON.stringify(contentOrderFullTitleDownContentLeftTemplate)]: {
        boxContainerStyle: props => ({
            gridTemplateColumns: `${props.contentContainerRate} ${props.imageContainerRate}`,
            gridTemplateRows: `${props.height} ${props.titleContainerHeight}`,
        }),
        titleContainerStyle: props => ({
            gridColumn: '1 / 3',
            gridRow: '2',
            borderTopStyle: 'solid',
            borderTopWidth: props.borderWidth,
        }),
        contentContainerStyle: props => ({
            gridColumn: '1',
            gridRow: '1',
            borderRightStyle: 'solid',
            borderRightWidth: props.borderWidth,
            height: props.height,
        }),
        imageContainerStyle: props => ({
            gridColumn: '2',
            gridRow: '1',
            height: props.height,
        }),
        elements: ['title', 'image', 'content'],
    },
    [JSON.stringify(contentOrderContentOnlyTemplate)]: {
        boxContainerStyle: props => ({
            gridTemplateRows: `${props.height}`,
        }),
        titleContainerStyle: props => ({
        }),
        imageContainerStyle: props => ({
        }),
        contentContainerStyle: props => ({
            width: '100%',
            height: '100%',


        }),
        elements: ['content'],
    },
    // All Possibilites when the items are on full width
    [JSON.stringify(contentOrderTitleUpImageUpTemplate)]: {
        boxContainerStyle: props => ({
            gridTemplateRows: `${props.titleContainerHeight} ${props.height} auto`,
        }),
        titleContainerStyle: props => ({
            gridRow: '1',
        }),
        imageContainerStyle: props => ({
            gridRow: '2',
            borderTopStyle: 'solid',
            borderTopWidth: props.borderWidth,
            borderBottomStyle: 'solid',
            borderBottomWidth: props.borderWidth,
        }),
        contentContainerStyle: props => ({
            gridRow: '3',
        }),
        elements: ['title', 'image', 'content'],
    },
    [JSON.stringify(contentOrderTitleDownImageUpTemplate)]: {
        boxContainerStyle: props => ({
            gridTemplateRows: `${props.height} ${props.titleContainerHeight} auto`,
        }),
        imageContainerStyle: props => ({
            gridRow: '1',
        }),
        titleContainerStyle: props => ({
            gridRow: '2',
            borderTopStyle: 'solid',
            borderTopWidth: props.borderWidth,
            borderBottomStyle: 'solid',
            borderBottomWidth: props.borderWidth,
        }),
        contentContainerStyle: props => ({
            gridRow: '3',
        }),
        elements: ['title', 'image', 'content'],
    },
    [JSON.stringify(contentOrderTitleUpContentUpTemplate)]: {
        boxContainerStyle: props => ({
            gridTemplateRows: `${props.titleContainerHeight} auto ${props.height}`,
        }),
        titleContainerStyle: props => ({
            gridRow: '1',
        }),
        contentContainerStyle: props => ({
            gridRow: '2',
            borderTopStyle: 'solid',
            borderTopWidth: props.borderWidth,
            borderBottomStyle: 'solid',
            borderBottomWidth: props.borderWidth,
        }),
        imageContainerStyle: props => ({
            gridRow: '3',
        }),
        elements: ['title', 'image', 'content'],
    },
    [JSON.stringify(contentOrderTitleDownContentUpTemplate)]: {
        boxContainerStyle: props => ({
            gridTemplateRows: `auto ${props.titleContainerHeight} ${props.height}`,
        }),
        titleContainerStyle: props => ({
            gridRow: '2',
            borderTopStyle: 'solid',
            borderTopWidth: props.borderWidth,
            borderBottomStyle: 'solid',
            borderBottomWidth: props.borderWidth,
        }),
        contentContainerStyle: props => ({
            gridRow: '1',
        }),
        imageContainerStyle: props => ({
            gridRow: '3',
        }),
        elements: ['title', 'image', 'content'],
    },
    [JSON.stringify(contentOrderTitleUpImageOnlyTemplate)]: {
        boxContainerStyle: props => ({
            gridTemplateRows: `${props.titleContainerHeight} ${props.height}`,
        }),
        titleContainerStyle: props => ({
            gridRow: '1',
        }),
        imageContainerStyle: props => ({
            gridRow: '2',
            borderTopStyle: 'solid',
            borderTopWidth: props.borderWidth,
        }),
        contentContainerStyle: props => ({
        }),
        elements: ['title', 'image'],
    },
    [JSON.stringify(contentOrderTitleDownImageOnlyTemplate)]: {
        boxContainerStyle: props => ({
            gridTemplateRows: `${props.height} ${props.titleContainerHeight}`,
        }),
        titleContainerStyle: props => ({
            gridRow: '2',
        }),
        imageContainerStyle: props => ({
            gridRow: '1',
            borderBottomStyle: 'solid',
            borderBottomWidth: props.borderWidth,
        }),
        contentContainerStyle: props => ({

        }),
        elements: ['title', 'image'],
    },
    [JSON.stringify(contentOrderTitleUpContentOnlyTemplate)]: {
        boxContainerStyle: props => ({
            gridTemplateRows: `${props.titleContainerHeight} ${props.height}`,
        }),
        titleContainerStyle: props => ({
            gridRow: '1',
        }),
        imageContainerStyle: props => ({
        }),
        contentContainerStyle: props => ({
            gridRow: '2',
            borderTopStyle: 'solid',
            borderTopWidth: props.borderWidth,
        }),
        elements: ['title', 'content'],
    },
    [JSON.stringify(contentOrderTitleDownContentOnlyTemplate)]: {
        boxContainerStyle: props => ({
            gridTemplateRows: `${props.height} ${props.titleContainerHeight}`,
        }),
        titleContainerStyle: props => ({
            gridRow: '2',
        }),
        contentContainerStyle: props => ({
            gridRow: '1',
            borderBottomStyle: 'solid',
            borderBottomWidth: props.borderWidth,
        }),
        imageContainerStyle: props => ({

        }),
        elements: ['title', 'content'],
    },
};
