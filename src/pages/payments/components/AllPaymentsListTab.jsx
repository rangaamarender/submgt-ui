import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomDataTable from '../../../components/datatable/CustomDataTable';
import { fetchPaymentsRequest } from '../../../redux/actions/paymentActions';
import handlePaymentsAction from '../config/handlePaymentsAction';
import paymentsActionMenu from '../config/paymentsActionMenu';
import paymentsColumnConfig from '../config/paymentsColumnConfig';
import { paymentsData } from '../config/paymentsData';
import paymentsSelectedColumns from '../config/paymentsSelectedColumns';
import ViewerWithTabs from '../../../components/viewers/ViewerWithTabs';
import HeaderViewerWithTabs from '../../../components/viewers/HeaderViewerWithTabs';

const AllPaymentsListTab = ({ handleFilterClick, columnConfig }) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const total = 10;
    const [first, setFirst] = useState(0);
    const [last, setLast] = useState(total);
    const handleRowSelect = (event) => {
        console.log(event);
        setSidebarVisible(!sidebarVisible);
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPaymentsRequest());
    }, [dispatch]);
    const { payments } = useSelector((state) => state.payment);
    console.log(payments);

    const handleRowUnselect = (e) => {
        setSidebarVisible(!sidebarVisible);
    };

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    const onCustomPage = (event) => {
        setFirst(event.first);
        setLast(event.last);
        // setCurrentPage(event.page);
    };

    return (
        <div>
            <ViewerWithTabs
                visible={sidebarVisible}
                onHide={toggleSidebar}
                tabs={[]}
                header={
                    <HeaderViewerWithTabs
                        name="Abhishek Pulluri"
                        employeeType="W2 Employee"
                        tags="Submitted"
                        showTag={true}
                        // buttons={resourceHeaderViewerBtn}
                        // options={resourceHeaderViewerOptions}
                        // buttonFlag={false}
                        // onClick={toggleSidebar}
                    />
                }
            />
            <CustomDataTable
                data={paymentsData}
                onRowSelect={handleRowSelect}
                onRowUnselect={handleRowUnselect}
                actionMenu={paymentsActionMenu}
                columnsConfig={paymentsColumnConfig}
                selectedColumns={paymentsSelectedColumns}
                handleFilterClick={handleFilterClick}
                columnConfig={columnConfig}
                handleAction={handlePaymentsAction}
                rows={10}
                paginator
                first={first}
                last={last}
                totalRecords={total}
                currentPageReportTemplate={`{first} to {last} of ${total}`}
                onPage={onCustomPage}
                rowsPerPageOptions={[10, 25, 50]}
            />
        </div>
    );
};

export default AllPaymentsListTab;
