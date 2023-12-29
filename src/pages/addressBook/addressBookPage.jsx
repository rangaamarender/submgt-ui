import React, { useEffect } from 'react';
import TabMenuContainer from '../../components/tabmenu/TabMenuContainer';
import addressTabs from './config/addressTabs';
import { useDispatch } from 'react-redux';
import { setCurrentPageName } from '../../redux/actions/headerTitleActions';

const AddressBookPage = () => {
    // const [sidebarVisible, setSidebarVisible] = useState(false);

    // const addTenantActionHandler = () => {
    //     setSidebarVisible(true);
    // };
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentPageName('Address Book'));
    }, [dispatch]);
    const actionButtons = [
        {
            label: '',
            icon: 'pi pi-fw pi-plus',
            // actionHandler: addTenantActionHandler,
        },
    ];
    return (
        <>
            <TabMenuContainer tabItems={addressTabs} actionButtons={actionButtons} />
        </>
    );
};

export default AddressBookPage;
