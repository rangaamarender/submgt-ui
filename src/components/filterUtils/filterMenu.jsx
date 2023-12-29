import { Menu } from 'primereact/menu';
import React from 'react';
import { columnFilterUtils } from './columnFilterUtils';

const FilterMenu = ({ columnConfig, setColumnConfig, handleCheckboxChange,columnFilterButtonRef, ...rest }) => {
    // const columnFilterButtonRef = useRef(null);

    // const columnFilterUserActionHandler = (event) => {
    //     columnFilterButtonRef.current.toggle(event);
    //     event.stopPropagation();
    // };
    return (
        <div>
            <Menu
                model={columnFilterUtils({
                    columnConfig,
                    setColumnConfig,
                    handleCheckboxChange,
                })}
                popup
                id="popup_menu_right"
                popupAlignment="right"
                className="p-2"
                ref={columnFilterButtonRef}
                {...rest}
            />
        </div>
    );
};

export default FilterMenu;
