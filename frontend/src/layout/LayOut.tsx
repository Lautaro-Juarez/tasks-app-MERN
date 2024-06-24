import { TaskForm } from "./TaskForm"
import { TaskList } from "./TaskList"
import { TasksProvider } from "./context/TasksContext"

export const LayOut = () => {
  return (
    <div>
      <TasksProvider>
        <TaskForm />
        <TaskList />
      </TasksProvider>
    </div>
  )
}
