import { TaskItem } from "./components/TaskItem"
import { useTasks } from "../hooks/useTasks"

export const TaskList = () => {

  const {tasks} = useTasks()

  return (
    <div>
      {
        tasks.map(task => (
          <TaskItem task={task} key={task._id}/>
        ))
      }
    </div>
  )
}

