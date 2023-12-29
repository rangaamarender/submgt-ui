import { Sidebar } from 'primereact/sidebar';
import { TabView, TabPanel } from 'primereact/tabview';
import React, { useState } from 'react';
import './viewer.css';

const ViewerWithTabs = ({ visible, onHide, tabs, header }) => {
    const [activeIndex, setActiveIndex] = useState(0);
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
            <div className="sidebar-header">{header}</div>
            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} className="p0">
                {tabs.map((tab, index) => (
                    <TabPanel key={index} header={tab.label}>
                        {tab.content}
                    </TabPanel>
                ))}
            </TabView>
        </Sidebar>
    );
};

export default ViewerWithTabs;
