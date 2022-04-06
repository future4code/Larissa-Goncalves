export const goToSearchPage = (history) => {
    history.push('/')
}

export const goToModels = (history, id) => {
    history.push(`${id}/modelos`)
}