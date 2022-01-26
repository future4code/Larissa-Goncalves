//2
export type tasks = {
    "userId": number,
    "id" : number,
    "title" : string,
    "completed" : boolean
 }

 //3
export const toDoList: tasks[] = [
    {
        userId: 1,
        id: 1,
        title: "estudar",
        completed: true,
    },
    {
        userId: 1,
        id: 2,
        title: "comer",
        completed: false,
    },
    {
        userId: 1,
        id: 3,
        title: "desenhar",
        completed: true,
    },
    {
        userId: 2,
        id: 1,
        title: "desenhar flores",
        completed: false,
    },
    {
        userId: 2,
        id: 2,
        title: "passear com o cachorro",
        completed: false,
    },
    {
        userId: 3,
        id: 1,
        title: "Ler",
        completed: false,
    },
    
]