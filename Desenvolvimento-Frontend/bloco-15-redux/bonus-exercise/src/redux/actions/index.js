export const IS_AUTH = "IS_AUTH"
export const CHANGE_CLIENTS = "CHANGE_CLIENTS"

export const isAuth = (auth) => ({ type: IS_AUTH, auth })

export const changeClients = (clients) => ({ type: CHANGE_CLIENTS, clients })
