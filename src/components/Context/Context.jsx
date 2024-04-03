import {createContext, useState} from "react" //Aca se importa el useState y el createcontext
export const tasksContext = createContext() //Aca se crea el contexto

//Esta función es para proveer las tareas 
export const TasksProvider  = ({children}) =>{ //El children va a utilizar los valores de provider
    const [tasks, setTasks] = useState ([]); //Esto son los estados de la función 
    return(
        <tasksContext.Provider value = {{tasks, setTasks}}>{children}
        </tasksContext.Provider>
    )
} 