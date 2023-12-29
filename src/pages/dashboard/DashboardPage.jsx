import { Card } from 'primereact/card';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPageName } from '../../redux/actions/headerTitleActions';

const DashboardPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentPageName('Dashboard'));
    }, [dispatch]);
    return <Card title="Dashboard"></Card>;
};

export default DashboardPage;
