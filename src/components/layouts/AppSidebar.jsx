import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react';
import favicon from '../../assets/images/favicon.png';
import { AppSidebarNav } from './AppSidebarNav';
import lucidIcon from '../../assets/images/lucidicon.png';
import RAVES from '../../assets/images/RAVES.png';
import 'simplebar-core/dist/simplebar.css';
// sidebar nav config
import NavBarMenu from '../../utils/NavBarMenu';
import { Button } from 'primereact/button';
import ExpandMenu from '../ExpandMenu';

const AppSidebar = () => {
    const dispatch = useDispatch();
    const unfoldable = useSelector((state) => state.sidebar.sidebarUnfoldable);
    const sidebarShow = useSelector((state) => state.sidebar.sidebarShow);
    const [visible, setVisible] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = (event) => {
        const viewerBody = event.target;
        setScrollPosition(viewerBody.scrollTop);
    };
    return (
        <>
            <ExpandMenu visible={visible} setVisible={setVisible} />

            <CSidebar
                position="fixed"
                unfoldable={unfoldable}
                visible={sidebarShow}
                onVisibleChange={(visible) => {
                    dispatch({ type: 'set', sidebarShow: visible });
                }}
            >
                <CSidebarBrand className="d-none d-md-flex" to="/recruit/">
                    <div className="sidebar-brand-full">
                        <div className="flex justify-content-center align-items-center ps-2 gap-3">
                            <img src={lucidIcon} alt="lucidIcon" className=" cursor-pointer" />
                            <img src={RAVES} alt="RAVES" className=" cursor-pointer" />
                        </div>
                    </div>
                    <img src={favicon} alt="Narrow Logo" className="sidebar-brand-narrow cursor-pointer" />
                </CSidebarBrand>
                <CSidebarBrand>
                    <div className="sidebar-brand-full w-100">
                        <div className="createButtonFull">
                            <Button
                                onClick={() => setVisible(true)}
                                label="Create"
                                icon="pi pi-plus mr-3"
                                className="w-full rounded-pill text-left ps-3 gap-1"
                            />
                        </div>
                    </div>

                    <div className="sidebar-brand-narrow">
                        <Button icon="pi pi-plus" className="createButtonNarrow" />
                    </div>
                </CSidebarBrand>

                <div onScroll={handleScroll} className={`sidebar-custom ${scrollPosition > 0 && 'shadow'}`}>
                    <CSidebarNav>
                        <AppSidebarNav items={NavBarMenu} />
                    </CSidebarNav>
                </div>
                <CSidebarToggler
                    className="d-none d-lg-flex"
                    onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
                />
            </CSidebar>
        </>
    );
};

export default React.memo(AppSidebar);
