import "./stylesDashboard.scss"
import { LogDisplay, ServerDisplay, ServerStat } from "$exporter/component"

function Dashboard() {
    //

    return (
        <div id="DASHBOARD">
            <ServerStat />
            <LogDisplay />
            <div className="bottom">
                <ServerDisplay />
            </div>
        </div>
    )
}

export default Dashboard
