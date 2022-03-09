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


