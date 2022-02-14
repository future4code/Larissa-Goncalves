import axios from 'axios'
import { URL_BASE } from './URL_BASE'

//A)Não, por que any pode receber qualquer valor
//B)Sim, o sistema entende o mapeamento do array de maneira fácil
//C)
type user = {
	id: string;
	name: string;
	email: string;
}

const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${URL_BASE}/subscribers`);
    return response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
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