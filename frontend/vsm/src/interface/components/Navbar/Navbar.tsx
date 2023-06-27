import { useState } from "react"
import { Button } from "@mui/material"
import LoginIcon from "@mui/icons-material/Login"
import { RiLoginCircleLine } from "react-icons/ri"

import "./stylesNavbar.scss"

function Navbar() {
    const [user, setUser] = useState("John")
    return (
        <div id="NAVBAR">
            <div className="nav__left">
                <div className="user">Welcome {user}!</div>
            </div>
            <div className="nav__right">
                <Button
                    variant="outlined"
                    endIcon={<LoginIcon />}
                    className="button__admin"
                    style={{ textTransform: "none" }}
                >
                    Go to Django Admin
                </Button>
                <Button
                    variant="contained"
                    endIcon={<RiLoginCircleLine />}
                    className="button__form"
                    style={{ textTransform: "none" }}
                >
                    Check Out Forms
                </Button>
            </div>
        </div>
    )
}

export default Navbar
