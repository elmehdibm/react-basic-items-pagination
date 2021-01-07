// Compare Two Objects that holds the Props of the global component helper

// This Function instead of Comparing JSON stringify for more Performance ;)
// Cause the props contain a lot of data to deserialize :)
export const comparePropsHolders = (holder1, holder2) => {
    if (
        (holder1.height && holder2.height &&
            holder1.height !== holder2.height)
    ) {
        return true;
    }
    if (
        (holder1.verticalSpacing && holder2.verticalSpacing &&
            holder1.verticalSpacing !== holder2.verticalSpacing)
    ) {
        return true;
    }
    if (
        (holder1.horizontalSpacing && holder2.horizontalSpacing &&
            holder1.horizontalSpacing !== holder2.horizontalSpacing)
    ) {
        return true;
    }
    if (
        (holder1.itemsPerRow && holder2.itemsPerRow &&
            holder1.itemsPerRow !== holder2.itemsPerRow)
    ) {
        return true;
    }
    if (
        (holder1.itemsNumber && holder2.itemsNumber &&
            holder1.itemsNumber !== holder2.itemsNumber)
    ) {
        return true;
    }
    if (
        (holder1.withImage && holder2.withImage &&
            holder1.withImage !== holder2.withImage)
    ) {
        return true;
    }
    if (
        (holder1.data && holder2.data &&
            JSON.stringify(holder1.data) !== JSON.stringify(holder2.data))
    ) {
        return true;
    }
    if (
        (holder1.imageStyle && holder2.imageStyle &&
            JSON.stringify(holder1.imageStyle) !== JSON.stringify(holder2.imageStyle))
    ) {
        return true;
    } if (
        (holder1.contentStyle && holder2.contentStyle &&
            JSON.stringify(holder1.contentStyle) !== JSON.stringify(holder2.contentStyle))
    ) {
        return true;
    } if (
        (holder1.titleStyle && holder2.titleStyle &&
            JSON.stringify(holder1.titleStyle) !== JSON.stringify(holder2.titleStyle))
    ) {
        return true;
    } if (
        (holder1.descriptionStyle && holder2.descriptionStyle &&
            JSON.stringify(holder1.descriptionStyle) !== JSON.stringify(holder2.descriptionStyle))
    ) {
        return true;
    } if (
        (holder1.childrenContent && holder2.childrenContent &&
            holder1.childrenContent.toString() !== holder2.childrenContent.toString())
    ) {
        return true;
    } if (
        (holder1.childrenStyle && holder2.childrenStyle &&
            JSON.stringify(holder1.childrenStyle) !== JSON.stringify(holder2.childrenStyle))
    ) {
        return true;
    } if (
        (holder1.boxStyle && holder2.boxStyle &&
            JSON.stringify(holder1.boxStyle) !== JSON.stringify(holder2.boxStyle))
    ) {
        return true;
    }
    return false;
};

// if undefined must return an empty object

export const checkProp = (prop, message) => {
    if (prop === undefined) {
        console.log('%c' + message + ' is missing! ', 'background: #222; color: #bada55');
        return {};
    }
    // Must move it in handle errors
    if (message === "The children content") {
        if ((typeof prop) !== "function") {
            throw new Error("The ChildrenContent Prop must be of type Function !");
        }
    }
    return prop;
};

/* handle Data Errors */

const DATA_FORMAT =
    " \n► Expecting Data Format :\n" +
    " {\n" +
    "  'title': (string),\n" +
    "  'image': (image source url),\n" +
    "  'description': (string),\n" +
    " .... \n" +
    " }";

const FORMAT_URL_PARAM_DATA_FORMAT = "(url: string, page: number, size: number, ...queries: any[]) => \n" +
    "   {\n" +
    "       return url: string;\n"
"       .... \n" +
    "   }";

// @TODO: Elaborate the function that fetch data ( promises and stuff ...)
const HANDLE_FETCH_DATA_PARAM_DATA_FORMAT = "";

const PARAM_DATA_FORMAT =
    " \n► Expecting Pram Data Format :\n" +
    " {\n" +
    "  'url': (string),\n" +
    "  'size': (image source url),\n" +
    "  'formatUrl': (function)," + FORMAT_URL_PARAM_DATA_FORMAT + "\n" +
    "  'handleFetchData': (function)," + HANDLE_FETCH_DATA_PARAM_DATA_FORMAT + "\n" +
    " .... \n" +
    " }";


export const handleDataErrors = (elem, withImage) => {
    if (elem.title === undefined) {
        throw new Error("Missing title prop in the Data" + DATA_FORMAT);
    };
    if (elem.description === undefined) {
        throw new Error("Missing description prop in the Data" + DATA_FORMAT);
    };
    if (withImage && elem.image === undefined) {
        throw new Error("Missing image prop in the Data" + DATA_FORMAT);
    };
};

export const handleClassNamesErrors = classNames => {

};

export const handleStyleErrors = styles => {

};

export const handleContentOrderTemplateErrors = (
    contentOrderTemplate,
    withImage,
) => {

};


/*  handle Props Input Errors */

export const handleWarnings = (
    paramData,
    itemsNumberPerPage,
    flexRow,
    itemsPerRow,
) => {
    if (paramData && itemsNumberPerPage) {
        console.warn("The prop 'itemsNumberPerPage' will be ignored because the 'paramData' is setted - 'size' in 'paramData' that represents the 'itemsNumberPerPage' ");
    };
    if (flexRow && itemsPerRow) {
        console.warn("The prop 'itemsPerRow' will be ignored because the 'flexRow' is setted to true - 'itemsPerRow' is variable ");
    };
};

export const handleErrors = (
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
) => {
    if (!data && !paramData) {
        throw new Error(
            "Data Missing Error -> Required 'data' Prop Or 'paramData' Prop :" +
            " \nFor 'data' Prop : \n" + DATA_FORMAT +
            " \nFor 'paramData' Prop : \n" + PARAM_DATA_FORMAT
        );
    };
    if (paramData && !paramData.size) {
        throw new Error("Missing size prop in the paramData" + PARAM_DATA_FORMAT);
    };
    if (paramData && !paramData.url) {
        throw new Error("Missing url prop in the paramData" + PARAM_DATA_FORMAT);
    };
    if (childrenContent && (typeof childrenContent) !== "function") {
        throw new Error("The ChildrenContent Prop must be of type Function !");
    };
    if (childrenTitle && (typeof childrenTitle) !== "function") {
        throw new Error("The ChildrenTitle Prop must be of type Function !");
    };
    if (flexRow && !minWidthItem && !maxWidthItem) {
        throw new Error("Props Required if flexRow is set to true -> Required 'minWidthItem' Prop And 'maxWidthItem' Prop");
    };
    if(data && itemsPerRow > data.length) {
        throw new Error("Input Value Error of 'itemsPerRow' -> The number of items per row should be inferior then the size of provided data");
    };
    // height and verticalSpacing and horizontalSpacing and itemsPerRow and itemsNumberPerPage Must be of Type number
    // and also minWidthItem and maxWidthItem
    // alignItems should be enum 'center' or 'right' or 'left'
};
