import { useState } from "react"
import {
    Autocomplete,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
} from "@mui/material"
import { GridRowSelectionModel } from "@mui/x-data-grid"
import { BsTerminal } from "react-icons/bs"

const options = [
    "Restart VMS",
    "Shutdown VMS",
    "Re-Clone VMS",
    //
]

type PropsType = {
    selectedServers: GridRowSelectionModel
}

function Actions({ selectedServers }: PropsType) {
    //

    const [cmd, setCmd] = useState("")

    const handleCmdExecute = (cmd: string) => {
        console.log("cmd: ", cmd)
    }

    const handleAction = (cmd: string) => {
        console.log("action: ", cmd)
    }

    return (
        <div className="ACTIONS">
            <FormControl
                fullWidth
                disabled={selectedServers.length < 1 ? true : false}
            >
                <InputLabel htmlFor="outlined-adornment-amount">
                    Execute Command
                </InputLabel>
                <OutlinedInput
                    label="Execute Command"
                    startAdornment={
                        <InputAdornment position="start">
                            <BsTerminal />
                        </InputAdornment>
                    }
                    value={cmd}
                    onChange={({ target }) => setCmd(target.value)}
                    onKeyDown={(event: any) => {
                        if (event.key === "Enter" && cmd.length > 0)
                            handleCmdExecute(cmd)
                    }}
                />
            </FormControl>
            <Autocomplete
                id="controllable-states-demo"
                options={options}
                renderInput={(params) => (
                    <TextField {...params} label="Perform Actions" />
                )}
                disabled={selectedServers.length < 1 ? true : false}
                onChange={(_event: any, newValue: string | null) => {
                    if (newValue) handleAction(newValue)
                }}
            />
        </div>
    )
}

export default Actions
