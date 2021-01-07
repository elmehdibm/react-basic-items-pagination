import React from 'react';

import SearchInput from './filters/SearchInput';
import TagButtons from './filters/TagButtons';
import CheckBoxes from './filters/CheckBoxes';
import SelectField from './filters/SelectField';
import SwitchButton from './filters/SwitchButton';
import MultiSelectField from './filters/MultiSelectField';
import AutoCompleteField from './filters/AutoCompleteField';
import RadioButtons from './filters/RadioButtons';

import {
    row,
    col,
    FilperColRow,
    styleRenderer,
} from '../styles/filterStyles';
import { MapClasseNames } from '../styles/constants';


const KeyFilterComponents = {
    searchInput: SearchInput,
    tagButtons: TagButtons,
    checkBoxes: CheckBoxes,
    radioButtons: RadioButtons,
    selectField: SelectField,
    switchButton: SwitchButton,
    multiSelectField: MultiSelectField,
    autoCompleteField: AutoCompleteField,
};

const recursiveProcessFilterRenderer = (
    template,
    value,
    classNames,
) => {
    const templateKeys = Object.keys(template);
    return templateKeys.map((_, index) => {
    const element = template[value + (index + 1)];
    // element have a specific format should handleErrors of it
    console.log("this is the element ", element);
    return (element && element.content && <div
        key={(Math.random().toFixed(3))}
        className={value === row ? MapClasseNames.filterRowContainer : MapClasseNames.filterColContainer}
        style={styleRenderer(
            value,
            element,
            templateKeys.length
        )}>
        {
            (typeof element.content === 'object')
            && recursiveProcessFilterRenderer(
                element.content,
                FilperColRow[value],
                classNames,
            )
        }
        {
            (typeof element.content === 'function')
            && React.createElement(
                element.content
            )
        }
        {
            (typeof element.content === 'string')
            && KeyFilterComponents[element.content]
            && React.createElement(
                KeyFilterComponents[element.content],
                {
                    ...element,
                    inputProps: element.inputProps || {},
                    options: element.options || [],
                    classNames,
                }
            )
        }
    </div>
    );
})};

export default React.memo((
    {
        className,
        template,
        classNames,
    }
) => (
        <div className={className}>
            {recursiveProcessFilterRenderer(template, row, classNames)}
        </div>
    )
);
