import { ChangeEvent, FormEvent, useState } from 'react'
import { createTask } from '../../api/ApiTask'
import { useTasks } from '../hooks/useTasks'

export const TaskForm = () => {

  const [task, setTask] = useState({
    title: "",
    description: "",
    done: false
  })
  const { createTask } = useTasks()

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createTask(task)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2 " placeholder="Write a Title" name="title" onChange={handleChange} />
        <textarea name="description" rows={3}
          className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2 " placeholder="Write a Title" onChange={handleChange}></textarea>
        <label htmlFor="" className="inline-flex items-center gap-x-2">
          <input type="checkbox" name="" className="h-5 w-5 text-indigo-600" onClick={() => setTask({ ...task, done: !task.done })} />
          <span>Done</span>
        </label>
        <button className="bg-indigo-500 px-3 block py-2 w-full">Save</button>
      </form>
    </div>
  )
}

