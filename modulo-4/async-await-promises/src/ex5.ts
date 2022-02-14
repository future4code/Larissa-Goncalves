import axios from "axios";
import { URL_BASE } from "./URL_BASE";

//usando tehn e catch
type user = {
    id: string
    email: string
    name: string
}

const getUserById = () => {
 return axios.get(`${URL_BASE}/subscribers`)
 .then(res => res.data)
}

const notifyAllSubscribers = (subscribers : user[]) => {
    subscribers.forEach((user) => {
        axios.post(`${URL_BASE}/notifications`, {
            subscriberId: user.id,
            message: 'EXTRA EXTRA olha as meias da labenu passando na sua rua!'
        })
        .then(res => console.log(`Notificação enviada com sucesso a ${user.name}`))
        .catch(err => console.log(`Erro ao enviar notificação a ${user.name}`))
    })
}
getUserById()
    .then(notifyAllSubscribers)