import { useLocation } from "react-router-dom"
import SettingsIcon from "@mui/icons-material/Settings"
import LogoutIcon from "@mui/icons-material/Logout"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import DashboardIcon from "@mui/icons-material/Dashboard"

import "./stylesSidebar.scss"
import { CONST_ROUTES } from "$exporter"
import { LogoutModal, SidebarButton } from "$exporter/component"

const { SIDEBAR } = CONST_ROUTES

function Sidebar() {
    //
    const { pathname } = useLocation()

    const {
        Button,
        state: { collapse },
    } = SidebarButton()

    const { Logout, setModalOpen } = LogoutModal()

    return (
        <div id="SIDEBAR">
            <div className="sidebar__whitespace"></div>
            <Button
                active={pathname === SIDEBAR.DASHBOARD.path}
                icon={<DashboardIcon />}
                route={SIDEBAR.DASHBOARD}
            />
            <Button
                active={pathname === SIDEBAR.SERVERS.path}
                icon={<SettingsIcon />}
                route={SIDEBAR.SERVERS}
            />
            <Button
                icon={<LogoutIcon />}
                route={{ path: "logout", label: "logout" }}
                onClick={() => setModalOpen(true)}
            />
            <Button
                icon={collapse ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
                route={{ path: "collapse", label: "collapse" }}
            />

            <Logout />
        </div>
    )
}

export default Sidebar
