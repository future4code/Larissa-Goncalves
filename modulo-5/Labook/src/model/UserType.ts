export type authenticationData = {
    id: string,
}

export type user = {
    id: string,
    name: string,
    email: string,
    password: string
}

export interface InputSignUp {
    name: string,
    email: string,
    password: string
}

export interface InputLogin{
    email: string,
    password: string
}

export function toUserModel(obj: any): user{
    return obj && {
        id: obj.id,
        email: obj.email,
        name: obj.name,
        password: obj.password,
    }
}