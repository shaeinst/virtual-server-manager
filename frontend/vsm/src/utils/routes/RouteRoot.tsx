import { Route, Routes } from "react-router-dom"

import { CONST_ROUTES } from "$exporter"
import {
    DashboardScreen,
    NotFound404Page,
    SettingScreen,
} from "$exporter/screen"

function RouteHome() {
    const routes = CONST_ROUTES.SIDEBAR

    return (
        <Routes>
            <Route path={routes.DASHBOARD.path} element={<DashboardScreen />} />
            <Route path={routes.SETTINGS.path} element={<SettingScreen />} />

            {/* if no url matchs (404 not found) */}
            <Route path="*" element={<NotFound404Page />} />
        </Routes>
    )
}

export default RouteHome
