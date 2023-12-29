import { Sidebar } from 'primereact/sidebar';
import React from 'react';
import './viewer.css';

const Viewer = ({ visible, onHide, contentComponent, header }) => {
    const showCloseIcon = false;
    const blockScroll = true;

    return (
        <Sidebar
            visible={visible}
            onHide={onHide}
            position="right"
            showCloseIcon={showCloseIcon}
            blockScroll={blockScroll}
        >
            <div className="">{header}</div>
            <div className="sidebar-content">{contentComponent}</div>
        </Sidebar>
    );
};

export default Viewer;
