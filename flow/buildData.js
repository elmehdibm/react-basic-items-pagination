import Item from "../prototypes/Item";
import {handleDataErrors} from "../flow/helpers";

const buildData = (signature, data, withImage) => {
    let inbuiltData = {};
    if(data){
        data.forEach((elem, index) => {
            handleDataErrors(elem, withImage);
            const item = new Item(signature + index);
            item.title = elem.title;
            item.description = elem.description;
            item.image = elem.image;
            inbuiltData[signature + index] = item;
        });
    }
    return inbuiltData;
};

export default buildData;
