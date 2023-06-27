import { RiDashboard3Line } from "react-icons/ri"
import { LogoutModal, SidebarButton } from "$exporter/component"
import SettingsIcon from "@mui/icons-material/Settings"
import LogoutIcon from "@mui/icons-material/Logout"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

import "./stylesSidebar.scss"
import { CONST_ROUTES } from "$exporter"
import { useLocation } from "react-router-dom"

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
                icon={<RiDashboard3Line />}
                route={SIDEBAR.DASHBOARD}
            />
            <Button
                active={pathname === SIDEBAR.SETTING.path}
                icon={<SettingsIcon />}
                route={SIDEBAR.SETTING}
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
