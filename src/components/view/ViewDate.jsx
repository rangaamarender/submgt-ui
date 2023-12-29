import React from 'react';
import { FormattedMessage } from 'react-intl';
import DisplayDate from '../date/DisplayDate';

const ViewDate = ({ labelId, value }) => {
    return (
        <>
            <div className="col-12 md:col-6">
                <label className="label-name text-500">
                    <FormattedMessage id={labelId} defaultMessage={labelId} />
                </label>
                <p className="label-name-view text-900">
                    <DisplayDate>{value}</DisplayDate>
                </p>
            </div>
        </>
    );
};

export default ViewDate;
