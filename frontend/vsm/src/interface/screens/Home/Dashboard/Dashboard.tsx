import { AiOutlineClear } from "react-icons/ai"
import StopCircleIcon from "@mui/icons-material/StopCircle"

import "./stylesDashboard.scss"
import { Button, LogDisplay, ServerStat } from "$exporter/component"

function Dashboard() {
    //
    const { Display, setLogs } = LogDisplay()

    return (
        <div id="DASHBOARD">
            <div className="top">
                <div className="serverstat">
                    <ServerStat />
                </div>
                <div className="log__container">
                    <div className="logdisplay">
                        <Display />
                    </div>

                    <div className="actions">
                        <Button
                            title="Clear"
                            icon={<AiOutlineClear />}
                            onClick={() => setLogs([])}
                        />
                        <Button
                            title="Terminate"
                            icon={<StopCircleIcon />}
                            type="danger"
                        />
                    </div>
                </div>
            </div>
            <div className="bottom">botttom</div>
        </div>
    )
}

export default Dashboard
