import { Task } from "../../../models/tasks.model"
import { IoCheckmarkDone, IoTrash } from 'react-icons/io5'
import { useTasks } from "../../hooks/useTasks"

interface Props {
    task: Task
}

export const TaskItem = ({ task }: Props) => {

    const { deleteTask, updateTask } = useTasks()

    return (
        <div key={task._id} className="bg-gray-900 p-2 my-2 flex justify-between hover:bg-gray-800 hover:cursor-pointer">
            <div>
                <h1>{task.title}</h1>
                <p>{task.description}</p>
            </div>
            <div className="flex gap-x-2">
                {task.done ? (
                    <IoCheckmarkDone className="text-green-500" onClick={() => {
                        updateTask(task._id, {
                            done: !task.done
                        })
                    }}></IoCheckmarkDone>
                ) : (<IoCheckmarkDone className="text-gray-500" onClick={() => {
                    updateTask(task._id, {
                        done: !task.done
                    })
                }}></IoCheckmarkDone>)}

                <IoTrash onClick={async () => {
                    if (!window.confirm("Are you sure?")) return
                    await deleteTask(task._id)
                }}>delete
                </IoTrash>
            </div>
        </div>
    )
}

