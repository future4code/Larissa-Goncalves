import { Response } from 'express';
import axios from "axios";
import { URL_BASE } from "./URL_BASE";

//A) faz a requisição rodar toda de uma vez só, por exemplo chegando todas as notificações juntas
//B) envia todas de uma śo vez sem esperar que a anterior seja enviada antes, pode ser uma vantagem se você precisar notificar muitos usuários de uma só vez
//C) async await com all promise

type user = {
    id: string
    email: string
    name: string
}

const getUserById = () => {
 return axios.get(`${URL_BASE}/subscribers`)
 .then(res => res.data)
}

const notifyAllSubscribers = async (subscribers : user[]): Promise<void> => {
    try{
        const request = subscribers.map(id=> axios.post(`${URL_BASE}/notifications`, {
            subscriberId: id,
            message: 'EXTRA EXTRA olha as meias da labenu passando na sua rua!'
        }));
        await Promise.all(request)
        console.log(`Notificação enviada com sucesso`)
    }catch (err){
        console.log(`Erro ao enviar notificação`)
    }
}

const main = async () : Promise<void> => {
    try{
        const subscribers = await getUserById()
        await notifyAllSubscribers(subscribers)
    }catch(err: any){
        console.log(err.Response?.data || err.message)
    }
}

main()