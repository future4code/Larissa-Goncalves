export const goToLogin = (history) => {
    history.push("/login")
}

export const goToFeed = (history) => {
    history.push("/")
}

export const goToPost = (history, id) => {
    history.push(`/Postagem/${id}`)
}

export const goToSignUp = (history) => {
    history.push("/cadastro")
}

export const goToCommit = (history, id) => {
    history.push(`/comentarios/${id}`)
}