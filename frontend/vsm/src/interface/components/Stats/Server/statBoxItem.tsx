import { LuServer } from "react-icons/lu"
import CloudQueueIcon from "@mui/icons-material/CloudQueue"
import { AiOutlineDownCircle } from "react-icons/ai"
import { FaRegStopCircle } from "react-icons/fa"
import CloudOffIcon from "@mui/icons-material/CloudOff"

export const statBoxItems = [
    {
        title: "Servers",
        count: "107",
        style: { background: "#bbdefb", color: "#1565c0" },
        icon: <LuServer />,
    },
    {
        title: "Online",
        count: "98",
        style: { background: "#DBFCE8", color: "#136638" },
        icon: <CloudQueueIcon />,
    },
    {
        title: "Degraded",
        count: "05",
        style: { background: "#FFCDD2", color: "#F5433D" },
        icon: <AiOutlineDownCircle />,
    },
    {
        title: "Idle",
        count: "03",
        style: { background: "#FFE0B2", color: "#EF6C00" },
        icon: <FaRegStopCircle />,
    },
    {
        title: "Offline",
        count: "01",
        style: { background: "#F3F4F6", color: "#374151" },
        icon: <CloudOffIcon />,
    },
]
