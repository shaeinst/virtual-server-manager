import { SnackbarOrigin } from "@mui/material/Snackbar"
import { useState } from "react"

function useAuthentication() {
    const [loading, setLoading] = useState(false)
    const [errMsg, setErrMsg] = useState("")

    const [notify, setNotify] = useState<SnackbarOrigin & { open: boolean }>({
        open: false,
        vertical: "top",
        horizontal: "right",
    })

    const login = async (username: string, password: string) => {
        // initial
        setLoading(true)
        setErrMsg("")

        // perform login

        setLoading(false)
        setErrMsg("login failed")
        setNotify((prev) => ({ ...prev, open: true }))
    }

    const logout = () => {
        //
    }

    return {
        login: login,
        logout: logout,
        loading: loading,
        errMsg: errMsg,
        notify: notify,
    }
}

export default useAuthentication
