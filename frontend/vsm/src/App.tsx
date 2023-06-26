import { useSelector } from "react-redux"

import "./styles.scss"
import { RootState } from "$exporter/redux"
import { Authentication, Home } from "$exporter/screen"

function App() {
    const isSignedIn = useSelector(
        (state: RootState) => state.authentication.isSignedIn
    )

    return (
        <div className="MODE__LIGHT">
            {!isSignedIn ? (
                // if user is signed in
                <Home />
            ) : (
                // if user is logged out
                <Authentication />
            )}
        </div>
    )
}

export default App
