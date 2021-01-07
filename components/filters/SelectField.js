import React, { useCallback, useState } from 'react';
import { cx } from '../../libs/styledComponent';
import { MapClasseNames } from '../../styles/constants';

const SVGArrowMenuDownIcon = (
    {
        className,
    }
) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={className}
        >
            <path d="M7,10L12,15L17,10H7Z" />
        </svg>
    );

const SVGArrowMenuUpIcon = (
    {
        className,
    }
) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={className}
        >
            <path d="M7,15L12,10L17,15H7Z" />
        </svg>
    );

export default React.memo((
    {
        classNames,
        onChange,
        options,
        optionProps,
        name,
        id,
        formName,
        selectProps,
        labelName,
        labelOption,
        defaultValue,
    }
) => {
    // const [effectIconClassName, setEffectIconClassName] = useState("");
    const [isArrowDown, setArrowDown] = useState(true);

    return (
        <div className={cx(
            MapClasseNames.selectFieldHolder,
            classNames.selectFieldHolder,
        )}>
            {labelName && <div className={cx(
                MapClasseNames.selectFieldLabel,
                classNames.selectFieldLabel,
            )}>
                {labelName}
            </div>}
            <div className={cx(
                MapClasseNames.selectFieldContainer,
                classNames.selectFieldContainer,
            )}>
                {
                    isArrowDown
                        ? <SVGArrowMenuDownIcon className={cx(
                            MapClasseNames.selectIconDownArrow,
                            classNames.selectIconDownArrow,
                            // effectIconClassName,
                        )} />
                        : <SVGArrowMenuUpIcon className={cx(
                            MapClasseNames.selectIconUpArrow,
                            classNames.selectIconUpArrow,
                            // effectIconClassName,
                        )} />
                }
                <select
                    className={cx(
                        MapClasseNames.selectField,
                        classNames.selectField,
                    )}
                    name={name || "emui-select-value"}
                    id={id || MapClasseNames.selectFieldContainer}
                    onClick={
                        () => {
                            setArrowDown(!isArrowDown);
                        }
                    }
                    form={formName}
                    defaultValue={labelOption || defaultValue || null}
                    onBlur={
                        () => {
                            setArrowDown(true);
                        }
                    }
                    onChange={
                        e => {
                            if (typeof onChange === "function") {
                                onChange(
                                    e
                                );
                            }
                        }
                    }
                    {
                    ...selectProps
                    }
                >
                    {
                        options.map(
                            selectOption => (
                                <option
                                    className={cx(
                                        MapClasseNames.optionSelect,
                                        classNames.optionSelect,
                                    )}
                                    key={selectOption.id || selectOption.value || selectOption.label}
                                    value={selectOption.value || selectOption.label}
                                    {
                                    ...optionProps
                                    }
                                > {selectOption.label || selectOption.value}
                                </option>
                            )
                        )
                    }
                    {labelOption && <option value={labelOption} hidden disabled>{labelOption}</option>}
                </select>
            </div>
        </div>
    );
}
);
