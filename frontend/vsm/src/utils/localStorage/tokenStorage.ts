import { TokenInterface } from "$exporter/type"
import constants from "./constants"
import localforage from "localforage"

const getToken = async (): Promise<TokenInterface | undefined> => {
    try {
        const item: TokenInterface | null = await localforage.getItem(
            constants.TOKEN
        )
        if (item !== null) {
            return item
        }
    } catch (err) {
        console.log(err)
    }
}

const setToken = async (token: TokenInterface): Promise<boolean> => {
    // return 'true' on successfully storing token to async storage else return 'false'
    try {
        await localforage.setItem(constants.TOKEN, token)
        return true
    } catch (err) {
        console.log(err)
        return false
    }
}

const removeToken = async (): Promise<boolean> => {
    // return "true" on successfully removing token else return "false"

    try {
        await localforage.removeItem(constants.TOKEN)
        return true
    } catch (err) {
        console.log(err)
    }

    return false
}

export default {
    getToken: getToken,
    setToken: setToken,
    removeToken: removeToken,
}
