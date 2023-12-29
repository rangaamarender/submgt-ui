import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CustomDataTable from '../../../components/datatable/CustomDataTable';
import ViewerWithTabs from '../../../components/viewers/ViewerWithTabs';
import handlePromotionsAction from '../config/handlePromotionsAction';
import promotionsActionMenu from '../config/promotionsActionMenu';
import promotionsSelectedColumns from '../config/promotionsSelectedColumns';
import viewPromotionsTabs from '../config/viewPromotionsTabs';
import { fetchPromotionRequest, selectPromotionRequest } from '../../../redux/actions/promotionActions';
import { useMemo } from 'react';

const AllPromotionsListTab = ({ handleFilterClick, columnConfig }) => {
    const dispatch = useDispatch();
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(15);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    //Handle Row select in datatable
    const handleRowSelect = (event) => {
        const id = event.data.id;
        dispatch(selectPromotionRequest(id));
        console.log('  id:' + id);
        setSidebarVisible(!sidebarVisible);
    };

    const handleRowUnselect = (event) => {
        //Nothing to do
        setSidebarVisible(sidebarVisible);
    };
    //default search criteria
    const searchCriteria = useMemo(
        () => ({
            page: page,
            pageSize: pageSize,
        }),
        [page, pageSize]
    );

    //Handle on page change rows/next/previous/first/last navigation
    const handleOnPageChange = (event) => {
        setPage(event.first);
        setPageSize(event.rows);
        searchCriteria.page = event.first;
        searchCriteria.pageSize = event.rows;
        console.log('handle onpagechange' + event.first + '  ' + event.rows);
        dispatch(fetchPromotionRequest(searchCriteria));
    };

    //UseEffect load the data per searchCriteria
    useEffect(() => {
        dispatch(fetchPromotionRequest(searchCriteria));
    }, [dispatch, searchCriteria]);

    //select the required data from the redux
    const { promotions, navigationData, pageable, loading, error } = useSelector((state) => state.promotion);
    console.log(loading, error);
    return (
        <Card>
            <ViewerWithTabs visible={sidebarVisible} onHide={toggleSidebar} tabs={viewPromotionsTabs} />
            <CustomDataTable
                data={promotions}
                onRowSelect={handleRowSelect}
                onRowUnselect={handleRowUnselect}
                actionMenu={promotionsActionMenu}
                handleFilterClick={handleFilterClick}
                columnConfig={columnConfig}
                selectedColumns={promotionsSelectedColumns}
                handleAction={handlePromotionsAction}
                handleOnPageEvent={handleOnPageChange}
                navigationData={navigationData}
                pageable={pageable}
            />
        </Card>
    );
};

export default AllPromotionsListTab;
