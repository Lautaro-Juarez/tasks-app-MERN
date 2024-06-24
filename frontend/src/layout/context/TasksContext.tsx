import { createContext, useEffect, useState } from "react"
import { createTaskApi, deleteTaskApi, getTasksApi, updateTaskApi } from "../../api/ApiTask"
import { CreateTask, Task, UpdateTask } from "../../models/tasks.model"

interface TaskContextValue {
    tasks: Task[],
    createTask: (task: Task) => Promise<void>,
    deleteTask: (id: string) => Promise<void>,
    updateTask: (id: string, task: UpdateTask) => Promise<void>
}

export const TasksContext = createContext<TaskContextValue>({
    tasks: [],
    createTask: async () => { },
    deleteTask: async () => { },
    updateTask: async () => { }
})

interface Props {
    children: React.ReactNode
}

export const TasksProvider: React.FC<Props> = ({ children }) => {

    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        getTasksApi()
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

    const createTask = async (task: CreateTask) => {
        const res = await createTaskApi(task)
        const data = await res.json()
        task.title === '' ? alert('must be something on inputs') : setTasks([...tasks, data])

    }

    const deleteTask = async (id: string) => {
        const res = await deleteTaskApi(id)
        if (res.status === 204) {
            setTasks(tasks.filter(task => task._id !== id))
        }

    }

    const updateTask = async (id: string, task: UpdateTask) => {
        const res = await updateTaskApi(id, task)
        const data = await res.json()
        setTasks(
            tasks.map(task => (task._id === id ? { ...task, ...data } : task))
        )
    }

    return (
        <TasksContext.Provider value={{ tasks, createTask, deleteTask, updateTask }}>
            {children}
        </TasksContext.Provider>
    )

}

