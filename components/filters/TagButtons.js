import React, { useState } from 'react';
import { cx, changeCssProperty } from '../../libs/styledComponent';
import {
    MapClasseNames,
} from '../../styles/constants';

/*

options = [
    {
        id: id,
        value: text,
        textColor: color,
        color: color,
        icon
    }
]

*/

const TagButton = ({
    id,
    color,
    textColor,
    value,
    onClick,
    defaultSelected,
    className
}) => {
    const [isActive, setActive] = useState(Boolean(defaultSelected));
    return (
        <button
            className={cx(
                className,
                (isActive ? MapClasseNames.tagButtonActive : MapClasseNames.tagButtonInactive)
            )}
            type="button"
            onClick={() => {
                if(typeof onClick === "function"){
                    onClick({
                        setActive,
                        isActive,
                        value,
                        props: {
                            id,
                            color,
                            textColor
                        }
                    });
                }
                setActive(!isActive);
            }}
            style={{
                backgroundColor: (color || 'grey'),
                color: (textColor || 'white'),
                textShadow: `${(textColor || 'white')} 0px 1px 1px`,
            }}
        >
            {value}
        </button>
    );
};

export default React.memo((
    {
        classNames,
        options,
        isVertical,
        gap,
    }
) => {
    changeCssProperty(
        MapClasseNames.tagButtonsContainer, {
            gridAutoFlow: isVertical ? 'row' : 'column',
            gap: gap ? gap : '12px',
        }
    );
    console.log("ClassNames in TagButtons are ", classNames);
    return (
        <div
            className={cx(
                MapClasseNames.tagButtonsContainer,
                classNames.tagButtonsContainer,
            )}
        >
            {options.map(
                tagOption => (
                    <TagButton
                        key={tagOption.id || tagOption.value}
                        {
                            ...tagOption
                        }
                        className={cx(
                            MapClasseNames.tagButton,
                            classNames.tagButton,
                        )}
                    />
                )
            )}
        </div>
    );
    }
);
