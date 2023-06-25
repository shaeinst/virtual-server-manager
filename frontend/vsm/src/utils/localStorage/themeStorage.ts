import localforage from "localforage"

import constants from "./constants"
import { ThemeModeType } from "$exporter/type"

const { THEME_MODE } = constants

const getThemeMode = async (): Promise<ThemeModeType | undefined> => {
    try {
        const mode: ThemeModeType | null = await localforage.getItem(THEME_MODE)
        if (mode !== null) return mode
    } catch (err) {
        console.log(err)
    }
}

const setThemeMode = async (mode: ThemeModeType): Promise<boolean> => {
    // return 'true' on successfully storing mode to async storage else return 'false'
    try {
        await localforage.setItem(THEME_MODE, mode)
        return true
    } catch (err) {
        console.log(err)
        return false
    }
}

export default {
    getThemeMode,
    setThemeMode,
}
