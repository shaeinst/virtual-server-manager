import { Route, Routes } from "react-router-dom"

import { LoginScreen, NotFound404Page, RegisterScreen } from "$exporter/screen"

function RouteAuthentication() {
    return (
        <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />

            {/* if no url matchs (404 not found) */}
            <Route path="*" element={<NotFound404Page />} />
        </Routes>
    )
}

export default RouteAuthentication
