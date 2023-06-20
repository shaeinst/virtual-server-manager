import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import { AuthStateInterface } from "$exporter/type"
import tokenStorage from "../localStorage/tokenStorage"
// i don't know why, but importing as following for tokenStorage will break whole code.
// there is some conflict with importing and exporting
// import { tokenStorage } from "$exporter";

const initialState: AuthStateInterface = {
    token: {
        access: null,
        refresh: null,
    },
    isSignedIn: false,
}

// Load the token from storage and set it in the initial state
tokenStorage.getToken().then((token) => {
    if (token) {
        initialState.token = token
        initialState.isSignedIn = Boolean(token.access)
    }
})

export const authSlice = createSlice({
    name: "authentication",
    initialState: initialState,
    reducers: {
        setAuthState: (state, action: PayloadAction<AuthStateInterface>) => {
            state.token = action.payload.token
            state.isSignedIn = action.payload.isSignedIn
        },
        resetAuthState: (state) => {
            state.token = {
                access: null,
                refresh: null,
            }
            state.isSignedIn = false
        },
    },
})

export const { setAuthState, resetAuthState } = authSlice.actions
export default authSlice.reducer
