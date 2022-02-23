import { v4 } from 'uuid';

//Função que gera para mim um Id aleátorio para o usuário
export class IdGenerator{
    generate(): string{
        return v4()
    }
}