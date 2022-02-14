import axios from 'axios'
import { URL_BASE } from './URL_BASE'

//A)é um post, pois vai ser adicionado um dado a API
//B) async await
type news  = {
    title: string
    content: string
    date: number
};

const noticies: news = {
    title: 'Notícia',
    content:'novas notícias',
    date: Date.now()
}

const createNews = (news: news):Promise<any> => {
    return axios.put(`${URL_BASE}/news`, noticies)
}

const main = async():Promise<void> => {
    try{
        await createNews(noticies)
        console.log(createNews)
    }catch(err: any){
        console.log(err.reponse?.data || err.message)
    }
}
main()