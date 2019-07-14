// Compare Two Objects that holds the Props of the global component helper

// This Function instead of Comparing JSON stringify for more Performance ;)
// Cause the props contain a lot of data to deserialize :)
export const comparePropsHolders = (holder1, holder2) => {
    if(
        (holder1.height && holder2.height &&
        holder1.height !== holder2.height)
    ){
        return true;
    }
    if(
        (holder1.verticalSpacing && holder2.verticalSpacing &&
        holder1.verticalSpacing !== holder2.verticalSpacing)
    ){
        return true;
    }
    if(
        (holder1.horizontalSpacing && holder2.horizontalSpacing &&
        holder1.horizontalSpacing !== holder2.horizontalSpacing)
    ){
        return true;
    }
    if(
        (holder1.itemsPerRow && holder2.itemsPerRow &&
        holder1.itemsPerRow !== holder2.itemsPerRow)
    ){
        return true;
    }
    if(
        (holder1.itemsNumber && holder2.itemsNumber &&
        holder1.itemsNumber !== holder2.itemsNumber)
    ){
        return true;
    }
    if(
        (holder1.withImage && holder2.withImage &&
        holder1.withImage !== holder2.withImage)
    ){
        return true;
    }
    if(
        (holder1.data && holder2.data &&
        JSON.stringify(holder1.data) !== JSON.stringify(holder2.data))
    ){
        return true;
    }
    if(
        (holder1.imageStyle && holder2.imageStyle &&
        JSON.stringify(holder1.imageStyle) !== JSON.stringify(holder2.imageStyle))
    ){
        return true;
    }    if(
        (holder1.contentStyle && holder2.contentStyle &&
        JSON.stringify(holder1.contentStyle) !== JSON.stringify(holder2.contentStyle))
    ){
        return true;
    }    if(
        (holder1.titleStyle && holder2.titleStyle &&
        JSON.stringify(holder1.titleStyle) !== JSON.stringify(holder2.titleStyle))
    ){
        return true;
    }    if(
        (holder1.descriptionStyle && holder2.descriptionStyle &&
        JSON.stringify(holder1.descriptionStyle) !== JSON.stringify(holder2.descriptionStyle))
    ){
        return true;
    }    if(
        (holder1.childrenContent && holder2.childrenContent &&
        holder1.childrenContent.toString() !== holder2.childrenContent.toString())
    ){
        return true;
    }    if(
        (holder1.childrenStyle && holder2.childrenStyle &&
        JSON.stringify(holder1.childrenStyle) !== JSON.stringify(holder2.childrenStyle))
    ){
        return true;
    }    if(
        (holder1.boxStyle && holder2.boxStyle &&
        JSON.stringify(holder1.boxStyle) !== JSON.stringify(holder2.boxStyle))
    ){
        return true;
    }
    return false;
};

// if undefined must return an empty object
export const checkProp = (prop, message) => {
    if(prop === undefined){
        console.log('%c'+message+' is missing! ', 'background: #222; color: #bada55');        
        return {};
    }
    if(message === "The children content"){
        if((typeof prop) !== "function"){
            throw new Error("The ChildrenContent Prop must be of type Function !");
        }
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
