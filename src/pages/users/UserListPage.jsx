import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataExportModal from '../../components/exportUtils/DataExportModal';
import FilterMenu from '../../components/filterUtils/filterMenu';
import { initFilters } from '../../components/filterUtils/tableDataFilterUtils';
import TabMenuContainer from '../../components/tabmenu/TabMenuContainer';
import userColumnConfig from './config/usersColumnConfig';

import usersTabs from './config/usersTabs';
import { setCurrentPageName } from '../../redux/actions/headerTitleActions';

const UserListPage = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [showExportModal, setShowExportModal] = useState(false);
    const [columnConfig, setColumnConfig] = useState(userColumnConfig);
    const [handleFilterClick, setHandleFilterClick] = useState(false);
    const dataTableRef = useRef(null);
    const columnFilterButtonRef = useRef(null);

    const { users, loading, error } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentPageName('User'));
    }, [dispatch]);

    useEffect(() => {
        if (columnConfig.length > 0) {
            initFilters(columnConfig);
        }
    }, [columnConfig]);

    const exportUserActionHandler = () => {
        setShowExportModal(true);
    };
    const columnFilterUserActionHandler = (event) => {
        columnFilterButtonRef.current.toggle(event);
        event.stopPropagation();
    };
    const filterUserActionHandler = () => {
        setHandleFilterClick(!handleFilterClick);
    };

    const addTenantActionHandler = () => {
        setSidebarVisible(true);
    };

    const closeAddTenantActionHandler = () => {
        setSidebarVisible(false);
    };
    const handleCheckboxChange = (event) => {
        const updatedColumn = columnConfig?.map((col) => {
            if (col.field === event.target.name) {
                col.isSelected = !col.isSelected;
                col.isChecked = !col.isChecked;
            }
            return col;
        });
        setColumnConfig(updatedColumn);
    };

    const actionButtons = [
        {
            label: 'Export',
            icon: 'pi pi-fw pi-download',
            actionHandler: exportUserActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-server',
            actionHandler: columnFilterUserActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-filter',
            actionHandler: filterUserActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-plus',
            actionHandler: addTenantActionHandler,
        },
    ];
    console.log(sidebarVisible,closeAddTenantActionHandler,loading, error)
    return (
        <>
            <DataExportModal
                showExportModal={showExportModal}
                setShowExportModal={setShowExportModal}
                columnConfig={columnConfig}
                exportData={users}
                dataTableRef={dataTableRef}
            />

            <FilterMenu
                columnConfig={columnConfig}
                setColumnConfig={setColumnConfig}
                handleCheckboxChange={handleCheckboxChange}
                columnFilterButtonRef={columnFilterButtonRef}
            />

            <TabMenuContainer tabItems={usersTabs({ columnConfig, handleFilterClick })} actionButtons={actionButtons} />
        </>
    );
};

export default UserListPage;
