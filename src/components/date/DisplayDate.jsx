import React from 'react';
import { formatDateByMMDDYYY } from '../../utils/dateUtils';
const DisplayDate = (date) => {
    if (!date) {
        return;
    }
    return (
        <>
            <span>{formatDateByMMDDYYY(date)}</span>
        </>
    );
};

export default DisplayDate;
