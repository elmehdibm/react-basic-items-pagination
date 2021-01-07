import React, { useState } from 'react';
import { changeCssProperty, cx } from '../../libs/styledComponent';
import { MapClasseNames } from '../../styles/constants';

const SVGCheckIcon = (
    {
        className,
    }
) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 24 24"
            className={className}
        >
            <path
                d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"
            />
        </svg>
    );


const CheckBox = ({
    id,
    value,
    onClick,
    defaultChecked,
    classNameContainer,
    classNameLabel,
    classNameInput,
    classNameCheckIcon,
    className,
    inputProps,
    labelProps,
    name,
}) => {
    console.log("default cHECKED in check box is ", defaultChecked);
    const [isActive, setActive] = useState(Boolean(defaultChecked));

    return (
        <div
            className={classNameContainer}
            onClick={
                () => {
                    if (typeof onClick === "function") {
                        onClick({
                            setActive,
                            isActive,
                            value,
                            props: {
                                id,
                            }
                        });
                    }
                    setActive(!isActive);
                }
            }
        >
            <div
                className={className}
            >
                <input
                    className={cx(
                        classNameInput,
                        isActive ? MapClasseNames.checkBoxInputCheckAddOn : "",
                    )}
                    type="checkbox"
                    value={isActive}
                    checked={isActive}
                    name={name}
                    {
                    ...inputProps
                    }
                />
                {isActive && <SVGCheckIcon
                    className={classNameCheckIcon}
                />}
            </div>
            <div
                className={classNameLabel}
                {
                ...labelProps
                }
            >
                {value}
            </div>
        </div>
    );
};

export default React.memo((
    {
        classNames,
        options,
        isVertical,
        gap,
        name,
        inputProps,
    }
) => {
    changeCssProperty(
        MapClasseNames.checkBoxesContainer, {
        gridAutoFlow: isVertical ? 'row' : 'column',
        gap: gap ? gap : '4px',
    }
    );
    return (
        <div className={cx(
            MapClasseNames.checkBoxesContainer,
            classNames.checkBoxesContainer,
        )}>
            {options.map(
                checkBoxOption => (
                    <CheckBox
                        key={checkBoxOption.id || checkBoxOption.value}
                        {
                        ...checkBoxOption
                        }
                        name={name}
                        classNameContainer={
                            cx(
                                MapClasseNames.checkBoxContainer,
                                classNames.checkBoxContainer,
                            )
                        }
                        className={
                            cx(
                                MapClasseNames.checkBox,
                                classNames.checkBox,
                            )
                        }
                        classNameLabel={
                            cx(
                                MapClasseNames.checkBoxLabel,
                                classNames.checkBoxLabel,
                            )
                        }
                        classNameInput={
                            cx(
                                MapClasseNames.checkBoxInput,
                                classNames.checkBoxInput,
                            )
                        }
                        classNameCheckIcon={
                            cx(
                                MapClasseNames.checkIcon,
                                classNames.checkIcon,
                            )
                        }
                        inputProps={inputProps}
                    />
                )
            )}
        </div>
    );
}
);
