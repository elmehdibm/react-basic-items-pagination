// all possible contentOrderImageLeftTemplate consists when image is on the left side
export const contentOrderTitleUpImageLeftTemplate = {
    row1: {
        col1: 'image',
        col2: {
            row1: 'title',
            row2: 'content',
        },
    },
};
export const contentOrderTitleDownImageLeftTemplate = {
    row1: {
        col1: 'image',
        col2: {
            row1: 'content',
            row2: 'title',
        },
    },
};
// This style is added on 02/01/2020
export const contentOrderTitleLeftUpImageLeftTemplate = {
    row1: {
        col1: {
            row1: 'title',
            row2: 'image',
        },
        col2: 'content',
    },
};
export const contentOrderTitleLeftDownImageLeftTemplate = {
    row1: {
        col1: {
            row1: 'image',
            row2: 'title',
        },
        col2: 'content',
    },
};
// Haha I did forget about this case fortunately it's scalable

export const contentOrderNoTitleImageLeftTemplate = {
    row1: {
        col1: 'image',
        col2: 'content',
    },
};
export const contentOrderFullTitleUpImageLeftTemplate = {
    row1: 'title',
    row2: {
        col1: 'image',
        col2: 'content'
    },
};
export const contentOrderFullTitleDownImageLeftTemplate = {
    row1: {
        col1: 'image',
        col2: 'content'
    },
    row2: 'title',
};
export const contentOrderImageOnlyTemplate = {
    row1: 'image',
};

// all possible contentOrderContentLeftTemplate consists when content is on the left side
export const contentOrderTitleUpContentLeftTemplate = {
    row1: {
        col1: 'content',
        col2: {
            row1: 'title',
            row2: 'image',
        },
    },
};
export const contentOrderTitleDownContentLeftTemplate = {
    row1: {
        col1: 'content',
        col2: {
            row1: 'image',
            row2: 'title',
        },
    },
};
// This style is added on 02/01/2020
export const contentOrderTitleLeftUpContentLeftTemplate = {
    row1: {
        col1: {
            row1: 'title',
            row2: 'content',
        },
        col2: 'image',
    },
};
export const contentOrderTitleLeftDownContentLeftTemplate = {
    row1: {
        col1: {
            row1: 'content',
            row2: 'title',
        },
        col2: 'image',
    },
};
// Haha I did forget about this case fortunately it's scalable
export const contentOrderNoTitleContentLeftTemplate = {
    row1: {
        col1: 'content',
        col2: 'image',
    },
};
export const contentOrderFullTitleUpContentLeftTemplate = {
    row1: 'title',
    row2: {
        col1: 'content',
        col2: 'image'
    },
};
export const contentOrderFullTitleDownContentLeftTemplate = {
    row1: {
        col1: 'content',
        col2: 'image'
    },
    row2: 'title',
};
export const contentOrderContentOnlyTemplate = {
    row1: 'content',
};

// all possible contentOrderTemplateconsists when image and content are in full width size
export const contentOrderTitleUpImageUpTemplate = {
    row1: 'title',
    row2: 'image',
    row3: 'content'
};
export const contentOrderTitleDownImageUpTemplate = {
    row1: 'image',
    row2: 'title',
    row3: 'content'
};
export const contentOrderTitleUpContentUpTemplate = {
    row1: 'title',
    row2: 'content',
    row3: 'image'
};
export const contentOrderTitleDownContentUpTemplate = {
    row1: 'content',
    row2: 'title',
    row3: 'image'
};

export const contentOrderTitleUpImageOnlyTemplate = {
    row1: 'title',
    row2: 'image',
};
export const contentOrderTitleDownImageOnlyTemplate = {
    row1: 'image',
    row2: 'title'
};
export const contentOrderTitleUpContentOnlyTemplate = {
    row1: 'title',
    row2: 'content',
};
export const contentOrderTitleDownContentOnlyTemplate = {
    row1: 'content',
    row2: 'title'
};
