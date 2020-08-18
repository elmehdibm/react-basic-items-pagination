import Item from "../prototypes/Item";
import {handleDataErrors} from "../flow/helpers";
 
export default (data, withImage) => {
    const inbuiltData = [];
    /// did I need a register key value for better search ??
    if(data){
        data.forEach((elem) => {
            handleDataErrors(elem, withImage);
            const signature = "emui-item_" + Math.floor(Math.random().toFixed(5) * 10000);
            const item = new Item(signature);
            item.title = elem.title;
            item.description = elem.description;
            item.image = elem.image;
            inbuiltData.push(item);
        });
    }
    return inbuiltData;
};
