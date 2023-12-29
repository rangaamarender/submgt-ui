import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useRef, useState } from 'react';
import { Menu } from 'primereact/menu';
import { Paginator } from 'primereact/paginator';
import { Dropdown } from 'primereact/dropdown';

const CustomDataTable = ({
    data,
    dataKey,
    selectedColumns,
    columnConfig,
    actionMenu,
    onRowSelect,
    onRowUnselect,
    handleAction,
    handleFilterClick,
    handleOnPageEvent,
    navigationData,
    pageable,
    currentPageReportTemplate,
    rows,
    first,
    last,
    onPageChange,
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

    const handleOptionClick = (event, rowData) => {
        event.stopPropagation();
        showMenu(event, rowData);
    };
    const actionBodyTemplate = (rowData) => {
        return (
            <div className="action-buttons">
                <i className="pi pi-ellipsis-v" onClick={(rowData) => handleOptionClick(rowData)} />
                <Menu model={menuItems} popup ref={menuRef} onHide={onHideMenu} />
            </div>
        );
    };

    const template2 = {
        layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
        RowsPerPageDropdown: (options) => {
            const dropdownOptions = [
                { label: 5, value: 5 },
                { label: 10, value: 10 },
                { label: 15, value: 15 },
            ];

            return (
                <React.Fragment>
                    <span className="mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                        Items per page:{' '}
                    </span>
                    <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />
                </React.Fragment>
            );
        },
        CurrentPageReport: (options) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            );
        },
    };

    return (
        <div>
            <DataTable
                stripedRows
                size="small"
                value={data}
                dataKey={dataKey}
                selectionMode="single"
                onRowSelect={onRowSelect}
                onRowUnselect={onRowUnselect}
                emptyMessage="No records found"
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"

            >
                {columnConfig.map(
                    (col) =>
                        selectedColumns.includes(col.field) && (
                            <Column
                                className={!col.isSelected && 'd-none'}
                                key={col.field}
                                field={col.field}
                                header={col.header}
                                body={col.body || ((rowData) => rowData[col.field])}
                                filter={handleFilterClick}
                                filterPlaceholder={`Search By ${col.header}`}
                                filterField={col.field}
                            />
                        )
                )}

                <Column header="Options" body={actionBodyTemplate} />
            </DataTable>
            <Paginator
                template={template2}
                first={navigationData?.number}
                rows={navigationData?.size}
                totalRecords={navigationData?.totalElements}
                onPageChange={handleOnPageEvent}
            />
        </div>
    );
};
export default CustomDataTable;
