import "./stylesDashboard.scss"
import { LogDisplay, ServerStat } from "$exporter/component"

function Dashboard() {
    //

    return (
        <div id="DASHBOARD">
            <ServerStat />
            <LogDisplay />
            <div className="bottom">
                <h3>this is bottom</h3>
            </div>
        </div>
    )
}

export default Dashboard
