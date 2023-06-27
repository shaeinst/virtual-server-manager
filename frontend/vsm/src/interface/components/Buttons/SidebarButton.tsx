import { useState } from "react"
import "./stylesButton.scss"
import { useNavigate } from "react-router-dom"

type ButtonType = {
    icon: React.ReactNode
    active?: boolean
    route: {
        path: string
        label: string
    }
    onClick?: () => void
}

function SidebarButton() {
    //
    const [collapse, setCollapse] = useState(false)
    const navigate = useNavigate()

    const Button = ({ icon, active, route, onClick }: ButtonType) => {
        //
        const handleClick = () => {
            if (onClick) onClick()
            if (route.path === "logout") return
            if (route.path === "collapse") {
                setCollapse((prev) => !prev)
                return
            }
            navigate(route.path)
        }

        return (
            <div
                id="SIDEBARBUTTON"
                className={active ? "active__button" : "non__active-button"}
                onClick={handleClick}
            >
                <div className="button__icon">{icon}</div>
                {collapse ? null : <div>{route.label}</div>}
            </div>
        )
    }
    return {
        Button,
        state: {
            collapse,
            setCollapse,
        },
    }
}

export default SidebarButton
