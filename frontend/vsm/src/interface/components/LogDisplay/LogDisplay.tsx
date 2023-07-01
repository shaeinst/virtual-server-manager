import { useState } from "react"
import { AiOutlineClear } from "react-icons/ai"
import StopCircleIcon from "@mui/icons-material/StopCircle"

import "./stylesLogDisplay.scss"
import FilterServer from "./FilterServer"
import { Button } from "$exporter/component"

function LogDisplay() {
    //

    const [commandExecuting, setCommandExecuting] = useState(true)

    const handleTerminate = () => {
        // handle the execution of command on server
        setCommandExecuting(false)
    }

    const { DisplayServerFilter, logs, clearLogs } = FilterServer()

    return (
        <div className="LOGDISPLAY">
            <div className="actions">
                <DisplayServerFilter />
                <Button
                    title="Clear"
                    icon={<AiOutlineClear />}
                    onClick={clearLogs}
                />
                <Button
                    title="Terminate"
                    icon={<StopCircleIcon />}
                    type={commandExecuting ? "danger" : null}
                    disabled={commandExecuting ? false : true}
                    onClick={handleTerminate}
                />
            </div>

            <div className="container">
                {logs.map((log, index) => {
                    return (
                        <div className="log" key={index}>
                            [<span className="server">{log.server}</span>]
                            &nbsp;
                            <p>{log.msg}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default LogDisplay
