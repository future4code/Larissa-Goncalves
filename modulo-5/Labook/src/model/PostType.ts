export enum POST_ROLES {
    EVENT = 'EVENT',
    NORMAL = 'NORMAL'
}

export type posts = {
    id: string,
    photo: string,
    description: string,
    role: POST_ROLES,
    createdAt: Date,
    authorId: string
}

export interface InputCreatePost{
    photo: string,
    description: string,
    role: POST_ROLES,
    token: string
}

export interface InputGetId{
    id: string
}

export function toPostModel(obj: any): posts{
    return obj &&  {
        id: obj.id,
        photo: obj.photo,
        description: obj.description,
        role: obj.role,
        createdAt: obj.created_at,
        authorId: obj.author_id,
     }
}

