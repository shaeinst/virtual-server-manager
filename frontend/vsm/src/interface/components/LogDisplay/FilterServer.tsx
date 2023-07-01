import { useEffect, useState } from "react"
import { Autocomplete, TextField } from "@mui/material"

import "./stylesLogDisplay.scss"

const fakeLogs: ServerLogType[] = [
    {
        server: "SERVER 1",
        msg: "log record 1",
    },
    {
        server: "SERVER 2",
        msg: "log record 2",
    },
    {
        server: "SERVER 3",
        msg: "log record 3",
    },
]

type ServerLogType = {
    server: string
    msg: string
}

function FilterServer() {
    //

    const [logs, setLogs] = useState<ServerLogType[]>([])
    const [filteredLogs, setFilteredLogs] = useState<ServerLogType[]>([])
    const [servers, setServers] = useState<string[]>([])

    useEffect(() => {
        setLogs(fakeLogs)
        setFilteredLogs(fakeLogs)
    }, [])

    const clearLogs = () => {
        setLogs([])
        setFilteredLogs([])
    }

    const handleServerFilter = (_event: any, servers: string[]) => {
        setServers(servers)
        if (servers.length === 0) {
            // if non is selected, show logs for all servers
            setFilteredLogs(logs)
        } else {
            setFilteredLogs(logs.filter((log) => servers.includes(log.server)))
        }
    }

    const DisplayServerFilter = () => {
        return (
            <Autocomplete
                multiple
                limitTags={2}
                id="multiple-limit-tags"
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Filter logs with servers"
                        placeholder="Servers"
                    />
                )}
                options={
                    // example: ["Server name 1", "Server name 2"]
                    logs.map((log) => log.server)
                }
                getOptionLabel={(server) => server}
                onChange={handleServerFilter}
                value={servers}
            />
        )
    }
    return {
        DisplayServerFilter,
        logs: filteredLogs,
        clearLogs: clearLogs,
    }
}

export default FilterServer
