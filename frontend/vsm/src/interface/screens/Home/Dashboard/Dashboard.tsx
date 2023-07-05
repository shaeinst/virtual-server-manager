import "./stylesDashboard.scss"
import { LogDisplay, ServerDisplay, ServerStat } from "$exporter/component"

function Dashboard() {
    //

    return (
        <div id="DASHBOARD">
            <ServerStat />
            <LogDisplay />
            <ServerDisplay />
        </div>
    )
}

export default Dashboard
