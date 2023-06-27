import { useEffect, useState } from "react"

import "./stylesLogDisplay.scss"

const fakeLogs = [
    "log record 1",
    "log record 2",
    "log record 3",
    "log record 4",

    "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
]

function LogDisplay() {
    //
    const [logs, setLogs] = useState<any[]>([""])

    useEffect(() => {
        setLogs(fakeLogs)
    }, [])

    const Display = () => {
        return (
            <div className="LOGDISPLAY">
                {logs.map((log, index) => {
                    return (
                        <p className="log" key={index}>
                            {log}
                        </p>
                    )
                })}
            </div>
        )
    }

    return {
        Display,
        setLogs,
    }
}

export default LogDisplay
