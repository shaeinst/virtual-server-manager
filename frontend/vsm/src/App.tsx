import { useSelector } from "react-redux"

import { RootState } from "$exporter/redux"
import { Authentication, Home } from "$exporter/screen"

function App() {
    const isSignedIn = useSelector(
        (state: RootState) => state.authentication.isSignedIn
    )

    return (
        <div>
            {isSignedIn ? (
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
