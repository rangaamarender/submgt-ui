import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Menu } from 'primereact/menu';
import React, { useRef, useState } from 'react';

const SimpleDataTable = ({
    data,
    dataKey,

    columnConfig,
    actionMenu,
    onRowSelect,
    onRowUnselect,
    handleAction,
}) => {
    const [activeRowMenu, setActiveRowMenu] = useState(null);

    const showMenu = (event, rowData) => {
        setActiveRowMenu(rowData);
        menuRef.current.show(event);
    };

    const onHideMenu = () => {
        setActiveRowMenu(null);
    };

    const menuRef = useRef(null);

    const menuItems = actionMenu.map((menuItem) => ({
        label: menuItem.label,
        icon: menuItem.icon,
        command: () => {
            handleAction(menuItem.action, activeRowMenu);
            onHideMenu();
        },
    }));

    const actionBodyTemplate = (rowData) => {
        return (
            <div className="action-buttons">
                <Button
                    icon="pi pi-ellipsis-v"
                    className="p-button-rounded p-button-secondary p-button-text"
                    onClick={(e) => showMenu(e, rowData)}
                />
                <Menu model={menuItems} popup ref={menuRef} onHide={onHideMenu} />
            </div>
        );
    };
console.log(actionBodyTemplate,"actionBodyTemplate");
    return (
        <div>
            <DataTable
                stripedRows
                size="small"
                value={data}
                dataKey={dataKey}
                responsiveLayout="stack"
                selectionMode="single"
                onRowSelect={onRowSelect}
                onRowUnselect={onRowUnselect}
                emptyMessage="No records found"
            >
                {columnConfig.map((col) => (
                    <Column
                        key={col.field}
                        field={col.field}
                        header={col.header}
                        body={col.body || ((rowData) => rowData[col.field])}
                    />
                ))}
            </DataTable>
        </div>
    );
};
export default SimpleDataTable;
