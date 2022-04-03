import { BASE_URL } from "../../constants/url/URL.js"
import axios from 'axios'
import { goToModels } from "../../routes/Coordinator.js"


export const searchForModelsCar = (marks, history) => {
    axios.get(`${BASE_URL}/carros/marcas/${marks.codigo}/modelos`
    ).then((res) => {
        console.log((res.data))
        goToModels(history, marks.codigo)
    }).catch((err) => {
        console.log(err.data)
    })
}

export const searchForModelsMotorcycle = (marks, history) => {
    axios.get(`${BASE_URL}/motos/marcas/${marks.codigo}/modelos`
    ).then((res) => {
        console.log((res.data))
        goToModels(history, marks.codigo)
    }).catch((err) => {
        console.log(err.data)
    })
}

export const searchForModelsTruck = (marks, history) => {
    axios.get(`${BASE_URL}/caminhoes/marcas/${marks.codigo}/modelos`
    ).then((res) => {
        console.log((res.data))
        goToModels(history, marks.codigo)
    }).catch((err) => {
        console.log(err.data)
    })
}
