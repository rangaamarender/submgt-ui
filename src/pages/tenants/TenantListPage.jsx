import React, { useEffect, useState } from 'react';


import EntityDashboardCounts from '../../components/dashboard/EntityDashboardCounts';
import TabMenuContainer from '../../components/tabmenu/TabMenuContainer';
import WizardComponent from '../../components/viewers/WizardComponent';
import tenantDashboardCounts from './config/tenantDashboardCount';
import tenantTabs from './config/tenantTabs';
import tenantWizardSteps from './config/tenantWizardSteps';
import { useDispatch } from 'react-redux';
import { setCurrentPageName } from '../../redux/actions/headerTitleActions';

const TenantListPage = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentPageName('Tenant'));
    }, [dispatch]);
    const exportTenantActionHandler = () => {
        // Your code to open the sidebar
    };

    const filterTenantActionHandler = () => {
        // Your code to open the sidebar
    };

    const addTenantActionHandler = () => {
        setSidebarVisible(true);
    };

    const closeAddTenantActionHandler = () => {
        setSidebarVisible(false);
    };

    const actionButtons = [
        {
            label: 'Export',
            icon: 'pi pi-fw pi-download',
            actionHandler: exportTenantActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-filter',
            actionHandler: filterTenantActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-plus',
            actionHandler: addTenantActionHandler,
        },
    ];
    return (
        <>
            <WizardComponent
                title="Create New Tenant1111"
                visible={sidebarVisible}
                onHide={closeAddTenantActionHandler}
                steps={tenantWizardSteps}
            />
            <EntityDashboardCounts widgetList={tenantDashboardCounts} />
            <TabMenuContainer tabItems={tenantTabs} actionButtons={actionButtons} />
        </>
    );
};

export default TenantListPage;
