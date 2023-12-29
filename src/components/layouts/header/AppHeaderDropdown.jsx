import { cilUser, cilMoon, cilSun, cilAccountLogout, cilLockLocked, cilPencil } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CDropdown, CDropdownHeader, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react';
import { Avatar } from 'primereact/avatar';
import React from 'react';
import { CFormSwitch } from '@coreui/react';
import { useTheme } from '../../ThemeProvider';
import { useState } from 'react';

const AppHeaderDropdown = () => {
    const { isDarkTheme, toggleTheme } = useTheme();
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const handleThemeToggleClick = (e) => {
        e.preventDefault();
        toggleTheme();
    };

    return (
        <CDropdown variant="nav-item" onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
            <CDropdownToggle
                placement="bottom-end"
                className="flex justify-content-center align-items-center gap-2"
                caret={false}
            >
                {/* Avatar */}
                <Avatar shape="circle">J</Avatar>
                <i className="pi pi-angle-down" style={{ width: '8px' }}></i>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0 " placement="bottom-end" style={{ minWidth: '200px' }}>
                <CDropdownHeader className="bg-light flex  justify-content-start align-items-center gap-1">
                    <div>
                        <Avatar size="normal" shape="circle" label="J" />
                    </div>
                    <div>
                        <div className="fs-5 text-dark">Robert Smith</div>
                        <small>Hr Recruiter</small>
                    </div>
                </CDropdownHeader>
                <CDropdownItem href="#" className=" flex align-items-center justify-content-start">
                    <CIcon icon={cilUser} size="lg" className="me-2 text-secondary" />
                    <div>My profile</div>
                </CDropdownItem>
                <CDropdownItem href="#" className=" flex align-items-center justify-content-start">
                    <CIcon icon={cilPencil} size="lg" className="me-2 text-info" />
                    <div>Edit Profile</div>
                </CDropdownItem>
                <CDropdownItem href="#" className="flex align-items-center justify-content-start">
                    <CIcon icon={cilLockLocked} size="lg" className="me-2 text-success" />
                    <div>Change Password</div>
                </CDropdownItem>

                <CDropdownItem
                    href="#"
                    className="d-flex justify-content-start align-items-center ml-1"
                    onClick={handleThemeToggleClick}
                >
                    <CIcon icon={isDarkTheme ? cilSun : cilMoon} className="me-2" />
                    {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
                    <CFormSwitch id="formSwitchCheckDefault" className="ms-2 fs-5" checked={isDarkTheme} />
                </CDropdownItem>

                <CDropdownItem href="/submgt/" className=" flex ml-1">
                    <CIcon icon={cilAccountLogout} size="lg" className="text-danger fw-bold me-2" />
                    <div>Logout</div>
                </CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    );
};

export default AppHeaderDropdown;
