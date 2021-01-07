import React, { useState } from 'react';
import { cx } from '../../libs/styledComponent';

import {
    MapClasseNames,
} from '../../styles/constants';

const SVGSearchIcon = (
    {
        classNameIcon,
        classNameIconContainer,
    }
) => (
        <div
            className={classNameIconContainer}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 24 24"
                className={classNameIcon}
            >
                <path
                    d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                />
            </svg>
        </div>
    );

export default React.memo((
    {
        classNames,
        placeHolder,
        inputProps,
        onClick,
        onInputChange,
    }
) => {
    const [effectIconClassName, setEffectIconClassName] = useState("");
    const [value, setValue] = useState();
    console.log("classNames in Search Input are", classNames);
    return (
        <div
            className={cx(
                classNames.searchInputContainer || "",
                MapClasseNames.searchInputContainer,
            )}
        >
            <input
                onFocus={
                    () => {
                        setEffectIconClassName(MapClasseNames.transformSearchIconInEffect);
                    }
                }
                onBlur={
                    () => {
                        setEffectIconClassName(MapClasseNames.transformSearchIconOutEffect);
                    }
                }
                className={cx(
                    classNames.searchInputField || "",
                    MapClasseNames.searchInputField,
                )}
                placeholder={placeHolder || "Type your search .."}
                type="text"
                value={value}
                onChange={
                    e => {
                        if(typeof onInputChange === "function") {
                            onInputChange(e);
                        }

                        setValue(e.target.value);
                    }
                }
                {...inputProps}
            />
            <SVGSearchIcon
                classNameIconContainer={cx(
                    classNames.searchInputIconContainer || "",
                    MapClasseNames.searchInputIconContainer,
                )}
                classNameIcon={cx(
                    classNames.searchInputIcon || "",
                    MapClasseNames.searchInputIcon,
                    effectIconClassName,
                )}
                onClick={
                    () => {
                        if(typeof onClick === "function") {
                            onClick(value);
                        }
                    }
                }
            />
        </div >
    );
}
);
