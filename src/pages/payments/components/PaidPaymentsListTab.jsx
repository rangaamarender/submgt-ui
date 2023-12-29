import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import CustomDataTable from '../../../components/datatable/CustomDataTable';
import handlePaymentsAction from '../config/handlePaymentsAction';
import paymentsActionMenu from '../config/paymentsActionMenu';
import { paymentsData } from '../config/paymentsData';
import paymentsSelectedColumns from '../config/paymentsSelectedColumns';

const PaidPaymentsTab = ({handleFilterClick,columnConfig}) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const handleRowSelect = (event) => {
      setSidebarVisible(!sidebarVisible);
  };

  const handleRowUnselect = (e) => {
      setSidebarVisible(!sidebarVisible);
  };

  const toggleSidebar = () => {
      setSidebarVisible(!sidebarVisible);
  };
  const data = [];
  console.log(data,toggleSidebar);
return (
  <Card>
  <CustomDataTable
      data={paymentsData}
      onRowSelect={handleRowSelect}
      onRowUnselect={handleRowUnselect}
      actionMenu={paymentsActionMenu}
      handleFilterClick={handleFilterClick}
      columnConfig={columnConfig}
      selectedColumns={paymentsSelectedColumns}
      handleAction={handlePaymentsAction}
  />
  </Card>
)
}


export default PaidPaymentsTab