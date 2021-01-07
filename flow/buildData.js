import Item from "../prototypes/Item";
import {handleDataErrors} from "../flow/helpers";
 
export default (data, withImage) => {
    const inbuiltData = [];
    /// did I need a register key value for better search ??
    if(data){
        data.forEach((elem) => {
            handleDataErrors(elem, withImage);
            const serial = Math.floor(Math.random().toFixed(10) * 1000000000);
            const signature = "emui-item_" + serial;
            const item = new Item(signature, serial);
            item.id = elem.id || serial;
            item.title = elem.title;
            item.description = elem.description;
            item.image = elem.image;
            item.content = elem.content;
            item.imageContent = elem.imageContent;
            item.titleProps = elem.titleProps || (() => ({}));
            item.contentProps = elem.contentProps || (() => ({}));
            item.imageProps = elem.imageProps || (() => ({}));
            item.containerImageProps = elem.containerImageProps || (() => ({}));
            inbuiltData.push(item);
        });
    }
    return inbuiltData;
};
