import { useState } from "react"
import {
    Alert,
    Box,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Snackbar,
    TextField,
} from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import LoadingButton from "@mui/lab/LoadingButton"

import "./stylesLogin.scss"
import { useAuthentication } from "$exporter/backend"

function Login() {
    //
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const { login, loading, errMsg, notify } = useAuthentication()

    return (
        <div id="LOGIN">
            <Box
                component="form"
                noValidate
                autoComplete="off"
                className="container"
            >
                <div className="container__input">
                    <TextField
                        required
                        id="outlined-required"
                        label="Username"
                        type="text"
                        onChange={({ target }) => setUsername(target.value)}
                    />
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">
                            Password
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? "text" : "password"}
                            onChange={({ target }) => setPassword(target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() =>
                                            setShowPassword((show) => !show)
                                        }
                                        onMouseDown={(event) =>
                                            event.preventDefault()
                                        }
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </div>
                <LoadingButton
                    style={{ background: "#1565C0" }}
                    onClick={() => login(username, password)}
                    loading={loading}
                    variant="contained"
                >
                    <span>Login</span>
                </LoadingButton>
            </Box>
            <Snackbar
                open={notify.open}
                autoHideDuration={1000}
                anchorOrigin={{
                    vertical: notify.vertical,
                    horizontal: notify.horizontal,
                }}
            >
                <Alert severity="error">{errMsg}</Alert>
            </Snackbar>
        </div>
    )
}

export default Login
