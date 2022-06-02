import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <DashboardIcon/>,
        link:"/Dashboard"
    },
    {
        title: "Authentication",
        icon: <VpnKeyIcon/>,
        link:"/Authentication"
    },
    {
        title: "Applicant",
        icon: <AccountBoxIcon/>,
        link:"/Applicant"
    },
    {
        title: "Job",
        icon: <WorkOutlineIcon/>,
        link:"/Job"
    },
    {
        title: "Job Settings",
        icon: <SettingsIcon/>,
        link:"/JobSettings"
    }
]