
// if undefined must return an empty object
export const checkProp = (prop, message) => {
    if(prop === undefined){
        console.log('%c'+message+' is missing! ', 'background: #222; color: #bada55');        
        return {};
    }
    return prop;
};

// handle Errors 

export const handleErrors = (
    itemsNumber,
    data,
    withImage,
    imageStyle
) => {
    if(data === undefined){throw new Error("Data Missing Error -> Required Data Prop" + DATA_FORMAT);};
    if(itemsNumber > 1000){throw new Error("Basic Items Large Capacity Error -> Couldn't render more than 1000 Items");};
    if(data.length > itemsNumber){throw new Error("Unsupported Size of provided Data Error -> Couldn't render items without data ");};
    if(withImage) {
        if(
            imageStyle === undefined 
            || imageStyle.heightRate === undefined
            || imageStyle.widthRate === undefined
        ) {
            throw new Error("Image Style is Required with the props heightRate and widthRate !\n Otherwise set withImage Prop to false");
        }
    }
};

// handle Data Errors

export const handleDataErrors = (elem, withImage) => {
    if(elem.title === undefined){
        throw new Error("Missing title prop in the Data" + DATA_FORMAT);
    };
    if(elem.description === undefined){
        throw new Error("Missing description prop in the Data" + DATA_FORMAT);
    };
    if(withImage && elem.image === undefined){
        throw new Error("Missing image prop in the Data" + DATA_FORMAT);
    };
};

const DATA_FORMAT = 
    " \n► Expecting Data Format :\n" +
    " {\n"+
    "  'title': (string),\n" +
    "  'image': (image source url),\n" +
    "  'description': (string),\n" +
    " .... \n"+
    " }";
