import React from 'react'
// import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
// import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
// import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
// import LogoutIcon from '@mui/icons-material/Logout';

import { MdViewQuilt } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { MdAdminPanelSettings
} from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";





export const SidebarData = [

    {
        title: "Overview",
        // icon: <ViewQuiltIcon />,
        icon: <MdViewQuilt />,
        link: "/dashboard"
    },
    {
        title: "Users",
        // icon: <PeopleOutlineIcon />,
        icon: <FiUsers />,
        link: "/dashboard/user"
    },
    {
        title: "Admins",
        // icon: <AdminPanelSettingsIcon />,
        icon: <MdAdminPanelSettings />,
        link: "/dashboard/admin"
    },
    {
        title: "Logout",
        // icon: <LogoutIcon />,
        icon: <RiLogoutBoxRLine />,
        link: "/login"
    },
]
