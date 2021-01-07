import React, { useCallback, useMemo, useState } from 'react';
import { cx } from '../libs/styledComponent';
import { MapClasseNames } from '../styles/constants';


const SVGArrowLeftIcon = () => (
    <svg
        version="1.1" width="24" height="24" viewBox="0 0 24 24"
    >
        <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
    </svg>
);

const SVGArrowRightIcon = () => (
    <svg
        version="1.1" width="24" height="24" viewBox="0 0 24 24"
    >
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </svg>
);

const SVGDoubleArrowLeftIcon = () => (
    <svg
        version="1.1" width="24" height="24" viewBox="0 0 24 24"
    >
        <path d="M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z" />
    </svg>
);

const SVGDoubleArrowRightIcon = () => (
    <svg
        version="1.1" width="24" height="24" viewBox="0 0 24 24"
    >
        <path d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z" />
    </svg>
);

const Block = (
    {
        number,
        children,
        action,
        className,
    }
) => {
    console.log("Render Block");
    console.log("Number : ", number);
    return (
        <button
            className={className}
            onClick={
                () => {
                    console.log("We'll perform the action", number, action);
                    action(number);
                }
            }
        >
            {(number + 1) || children}
        </button>
    );
};

export default React.memo((
    {
        currentPage,
        onChangePage,
        totalPages,
        classNames,
        displayLimitNumber
    }
) => {
    console.log("Rendering Pagination");

    const blockClassName = cx(
        MapClasseNames.paginationBlock,
        classNames && classNames.paginationBlock || "",
    );

    const blocks = useMemo(
        () => {
            // mock limit number
            const lm = displayLimitNumber || 4;
            const elements = [];
            console.log("Rendering the blocks");
            for (let index = 0; index < totalPages; index++) {
                elements.push(
                    <Block
                        className={
                            cx(
                                blockClassName,
                                (currentPage === index) ? cx(
                                    MapClasseNames.paginationBlock_active,
                                    classNames && classNames.paginationBlock_active || "",
                                ) : ""
                            )
                        }
                        key={index}
                        number={index}
                        action={onChangePage}
                    />
                )
            }
            if(totalPages <= lm){
                return [
                    ...elements
                ];
            }
            const indexOfStart = currentPage - Math.floor(lm / 2);

            return [
                ...( indexOfStart > -1 ? [elements[0]] : []),
                ...( indexOfStart > -1 ? [<div style={{lineHeight: 1.5}} key="1..."> ... </div>] : []),
                ...(elements.slice(
                    Math.max(
                        Math.min(
                            indexOfStart + 1,
                            totalPages - (lm - 1),
                        ),
                        0
                    ),
                    Math.min(
                        Math.max(indexOfStart + 1,0) + (lm - 1),
                        totalPages,
                    )
                )),
                ...(Math.max(indexOfStart,0) + lm < totalPages ? [<div style={{lineHeight: 1.5}} key="2..."> ... </div>] : []),
                ...(Math.max(indexOfStart,0) + lm < totalPages ? [elements[totalPages - 1]] : []),
            ];
        },
        [
            totalPages,
            currentPage,
            displayLimitNumber,
        ]
    );

    console.log("Blocks are ", blocks);

    const actionDoubleArrowLeft = useCallback(() => {
        if (currentPage !== 0) {
            onChangePage(0);
        }
    }, [currentPage, onChangePage]);

    const actionArrowLeft = useCallback(() => {
        if (currentPage !== 0) {
            onChangePage(currentPage - 1);
        }
    }, [currentPage, onChangePage]);

    const actionDoubleArrowRight = useCallback(() => {
        if (currentPage !== totalPages - 1) {
            onChangePage(totalPages - 1);
        }
    }, [currentPage, onChangePage, totalPages]);

    const actionArrowRight = useCallback(() => {
        if (currentPage !== totalPages - 1) {
            onChangePage(currentPage + 1);
        }
    }, [currentPage, onChangePage, totalPages]);

    return (
        <div
            className={
                cx(
                    MapClasseNames.paginationHolder,
                    classNames && classNames.paginationHolder || ""
                )
            }
        >
            <Block
                className={cx(
                    blockClassName,
                    ((currentPage === 0)) && MapClasseNames.paginationBlock_inactive,
                )}
                action={actionDoubleArrowLeft}
            >
                <SVGDoubleArrowLeftIcon />
            </Block>
            <Block
                className={cx(
                    blockClassName,
                    ((currentPage === 0)) && MapClasseNames.paginationBlock_inactive,
                )}
                action={actionArrowLeft}
            >
                <SVGArrowLeftIcon />
            </Block>
            {blocks}
            <Block
                className={cx(
                    blockClassName,
                    ((currentPage === totalPages - 1)) && MapClasseNames.paginationBlock_inactive,
                )}
                action={actionArrowRight}
            >
                <SVGArrowRightIcon />
            </Block>
            <Block
                className={cx(
                    blockClassName,
                    ((currentPage === totalPages - 1)) && MapClasseNames.paginationBlock_inactive,
                )}
                action={actionDoubleArrowRight}
            >
                <SVGDoubleArrowRightIcon />
            </Block>
        </div>
    )
});
