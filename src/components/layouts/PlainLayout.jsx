import { CContainer } from '@coreui/react';
import React from 'react';
import AppFooter from './AppFooter';
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';
import { Outlet } from 'react-router-dom';

const PlainLayout = () => {
    return (
        <div>
            <AppSidebar />
            <div className="wrapper d-flex flex-column min-vh-100 ">
                <AppHeader />
                <div className="body flex-grow-1 px-2">
                    <CContainer fluid>
                        <Outlet />
                    </CContainer>
                </div>
                <AppFooter />
            </div>
        </div>
    );
};

export default PlainLayout;
