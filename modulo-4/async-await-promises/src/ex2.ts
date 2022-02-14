import { URL_BASE } from './URL_BASE';
import axios from "axios"

//A) são tipagens diferentes, por que uma tipagem em um função assíncrona precisa ser uma promise de alguma coisa depedendo da tipagem
//B)

const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${URL_BASE}/subscribers`);
    return response.data;
  };

  const main = async () => {
    try{
        const subscribers = await getSubscribers()
        console.log(subscribers)
    }catch (err: any){
        console.log(err.response?.data || err.message)
    }
    
}

main()