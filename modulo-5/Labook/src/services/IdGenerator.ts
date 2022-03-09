import { v4 } from 'uuid';

export class IdGenerator{
    generateId = () : string => v4()
}
//gera um id aleatorio para cada usuário ou post