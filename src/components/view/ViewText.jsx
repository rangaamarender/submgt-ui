import React from 'react';
import { FormattedMessage } from 'react-intl';

const ViewText = ({ labelId, value }) => {
    return (
        <>
            <div className="col-12 md:col-6">
                <label className="label-name text-500">
                    <FormattedMessage id={labelId} defaultMessage={labelId} />
                </label>
                <p className="label-name-view text-900">{value}</p>
            </div>
        </>
    );
};

export default ViewText;
