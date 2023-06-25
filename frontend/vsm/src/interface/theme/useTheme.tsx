import { useEffect, useState } from "react"

import { themeStorage } from "$exporter"
import { ThemeModeType } from "$exporter/type"

function useTheme() {
    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        if (darkMode) document.body.classList.add("MODE__DARK")
        else document.body.classList.remove("MODE__DARK")
    }, [darkMode])

    const getThemeMode = async () => {
        return themeStorage.getThemeMode()
    }
    const setThemeMode = async (mode: ThemeModeType) => {
        return themeStorage.setThemeMode(mode).then(() => {
            setDarkMode(mode.mode === "dark" ? true : false)
        })
    }

    return { getThemeMode, setThemeMode }
}

export default useTheme
