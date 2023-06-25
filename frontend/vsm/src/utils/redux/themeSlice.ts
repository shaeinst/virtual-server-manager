import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import { ThemeModeType } from "$exporter/type"
import themeStorage from "../localStorage/themeStorage"

const initialState: ThemeModeType = {
    mode: "light",
}

// Load the theme mode from storage and set it in the initial state
// if theme is not initilized, initialize it
themeStorage.getThemeMode().then((value) => {
    if (value) initialState.mode = value.mode
    else themeStorage.setThemeMode({ mode: "light" })
})

export const authSlice = createSlice({
    name: "THEME_MODE",
    initialState: initialState,
    reducers: {
        setThemeModeState: (state, action: PayloadAction<ThemeModeType>) => {
            state.mode = action.payload.mode
        },
    },
})

export const { setThemeModeState } = authSlice.actions
export default authSlice.reducer
