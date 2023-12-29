import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import CustomModalHeader from './CustomModalHeader';

const ExpandMenu = ({ visible, setVisible }) => {
    const [expanded, setExpanded] = useState(false);
    const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth <= 767);

    const handleResize = () => {
        setIsMobileScreen(window.innerWidth <= 767);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setExpanded(!expanded);
    };
    const footerContent = (
        <div>
            <Button label={expanded ? 'Show Less' : 'Show More'} size="small" onClick={toggleMenu} autoFocus outlined />
        </div>
    );
    const handleMenuClose = () => {
        setVisible(false);
        setExpanded(false);
    };

    const iconsAndText = [
        { icon: 'pi pi-plus', text: 'Create a job' },
        { icon: 'pi pi-upload', text: 'Upload Resume' },
        { icon: 'pi pi-file', text: 'Contract', route: '/recruit/contracts' },
        { icon: 'pi pi-users', text: 'Resource', route: '/recruit/resources' },
        { icon: 'pi pi-building', text: 'Company', route: '/recruit/companies' },
        //
        { icon: 'pi  pi-clock', text: 'Time Sheets', route: '/recruit/timesheets' },
        { icon: 'pi pi-book', text: 'Invoice' },
        { icon: 'pi pi-server', text: 'Documents' },
        { icon: 'pi  pi-camera', text: 'Meetings' },
        { icon: 'pi pi-volume-up', text: 'Announcements' },
        //
        { icon: 'pi  pi-eject', text: 'Address' },
        { icon: 'pi pi-home', text: 'Department' },
        { icon: 'pi pi-envelope', text: 'Mail Template' },
        { icon: 'pi  pi-calendar-times', text: 'Holiday' },
        { icon: 'pi  pi-briefcase', text: 'Work Order' },
    ];

    const itemsPerColumn = 5;

    return (
        <>
            <Dialog
                header={CustomModalHeader({ title: 'Create', onClick: handleMenuClose })}
                visible={visible}
                draggable={false}
                onHide={handleMenuClose}
                footer={footerContent}
                position="top-left"
                className={`mt-7 ${expanded ? 'expanded' : ''}`}
                style={{
                    width: expanded && !isMobileScreen ? '600px' : '200px',
                    transition: 'width 0.8s ease height 0.6 ease',
                    marginLeft: '70px',
                }}
                closeIcon
                modal
                dismissableMask="true"
            >
                {isMobileScreen ? (
                    <>
                        <div className="column">
                            {iconsAndText.slice(0, itemsPerColumn).map(({ icon, text, route }, i) => (
                                <div
                                    key={i}
                                    className="flex  align-items-center cursor-pointer"
                                    // onClick={() => handleItemClick(route)}
                                    style={{ lineHeight: '30px ' }}
                                >
                                    <i className={`pi ${icon} mr-2`}></i>
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                        {expanded && (
                            <>
                                <div className="column">
                                    {iconsAndText
                                        .slice(itemsPerColumn, itemsPerColumn * 2)

                                        .map(({ icon, text, route }, i) => (
                                            <div
                                                key={i}
                                                className="flex align-items-center cursor-pointer"
                                                // onClick={() => handleItemClick(route)}
                                                style={{ lineHeight: '30px ' }}
                                            >
                                                <i className={`pi ${icon} mr-2`}></i>
                                                <span>{text}</span>
                                            </div>
                                        ))}
                                </div>
                                <div className="column">
                                    {iconsAndText
                                        .slice(itemsPerColumn * 2, itemsPerColumn * 3)

                                        .map(({ icon, text, route }, i) => (
                                            <div
                                                key={i}
                                                className="flex align-items-center cursor-pointer"
                                                // onClick={() => handleItemClick(route)}
                                                style={{ lineHeight: '30px ' }}
                                            >
                                                <i className={`pi ${icon} mr-2`}></i>
                                                <span>{text}</span>
                                            </div>
                                        ))}
                                </div>
                            </>
                        )}
                    </>
                ) : (
                    <div className={`d-flex ${expanded ? 'flex-wrap' : ''} justify-content-between overflow-hidden`}>
                        <div className="column">
                            {iconsAndText.slice(0, itemsPerColumn).map(({ icon, text, route }, i) => (
                                <div
                                    key={i}
                                    className="flex  align-items-center cursor-pointer"
                                    // onClick={() => handleItemClick(route)}
                                    style={{ lineHeight: '30px ' }}
                                >
                                    <i className={`pi ${icon} mr-2`}></i>
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>

                        {expanded && (
                            <>
                                <div className="column">
                                    {iconsAndText
                                        .slice(itemsPerColumn, itemsPerColumn * 2)
                                        .map(({ icon, text, route }, i) => (
                                            <div
                                                key={i}
                                                className="flex align-items-center cursor-pointer"
                                                // onClick={() => handleItemClick(route)}
                                                style={{ lineHeight: '30px ' }}
                                            >
                                                <i className={`pi ${icon} mr-2`}></i>
                                                <span>{text}</span>
                                            </div>
                                        ))}
                                </div>

                                <div className="column">
                                    {iconsAndText
                                        .slice(itemsPerColumn * 2, itemsPerColumn * 3)
                                        .map(({ icon, text, route }, i) => (
                                            <div
                                                key={i}
                                                className="flex  align-items-center  cursor-pointer"
                                                // onClick={() => handleItemClick(route)}
                                                style={{ lineHeight: '30px ' }}
                                            >
                                                <i className={`pi ${icon} mr-2`}></i>
                                                <span>{text}</span>
                                            </div>
                                        ))}
                                </div>
                            </>
                        )}
                    </div>
                )}
            </Dialog>
        </>
    );
};

export default ExpandMenu;
