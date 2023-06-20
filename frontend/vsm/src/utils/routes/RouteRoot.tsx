import { Route, Routes } from "react-router-dom"

import { CONST_ROUTES } from "$exporter"
import { HomepageScreen, NotFound404Page } from "$exporter/screen"

function RouteHome() {
    const routes = CONST_ROUTES.SIDEBAR

    return (
        <Routes>
            <Route path={routes.HOME.path} element={<HomepageScreen />} />

            {/* if no url matchs (404 not found) */}
            <Route path="*" element={<NotFound404Page />} />
        </Routes>
    )
}

export default RouteHome
