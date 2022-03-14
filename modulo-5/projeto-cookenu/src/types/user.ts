export type authenticatorData = {
    id: string
}

export const userTableName = 'cookenu_users'
export const recipesTableName = 'cookenu_recipes'

export type user = {
    id: string,
    name: string,
    email: string,
    password: string
}

