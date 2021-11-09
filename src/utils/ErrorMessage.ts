/* eslint-disable no-restricted-syntax */
import React from 'react';

export default function ErrorMessage(
    errorObject: Object,
    errorArray: Array<any>,
    setState: React.Dispatch<any>
) {
    for (const key of Object.keys(errorObject)) {
        errorArray
            .filter((item: any) => item.field === key)
            .forEach((item: any) => {
                setState((prev: { [x: string]: any }) => ({
                    ...prev,
                    [key]: prev[key] + item.msg,
                }));
            });
    }
}
