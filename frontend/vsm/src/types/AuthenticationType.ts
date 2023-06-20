export interface TokenInterface {
    refresh: string | null
    access: string | null
}

export interface AuthStateInterface {
    token: TokenInterface | null
    isSignedIn: boolean
}
