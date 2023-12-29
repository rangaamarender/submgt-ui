import {
    cilAddressBook,
    cilBuilding,
    cilCreditCard,
    cilFile,
    cilGift,
    cilGroup,
    cilHome,
    cilTask,
} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CNavItem } from '@coreui/react';
import React from 'react';

const NavBarMenu = [
    {
        component: CNavItem,
        name: 'Dashboard',
        to: '/submgt/dashboard',
        icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
    },

    {
        component: CNavItem,
        name: 'Tenants',
        to: '/submgt/tenants',
        icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Users',
        to: '/submgt/users',
        icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Address Book',
        to: '/submgt/addressBook',
        icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
    },

    {
        component: CNavItem,
        name: 'Payments',
        to: '/submgt/payments',
        icon: <CIcon icon={cilCreditCard} customClassName="nav-icon" />,
    },

    {
        component: CNavItem,
        name: 'Tasks',
        to: '/submgt/tasks',
        icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Invoices',
        to: '/submgt/invoices',
        icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Promotions',
        to: '/submgt/promotions',
        icon: <CIcon icon={cilGift} customClassName="nav-icon" />,
    },
];

export default NavBarMenu;
