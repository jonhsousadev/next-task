import { useEffect, useState } from "react";
import Task from "../models/Task";

interface TasksTableProps {
  tasks: Array<Task>
}

export default function TasksTable(props: TasksTableProps) {

  const [tasks,setTasks] = useState([])

  useEffect(()=>{
    const tasksAux: Task[] = [
      new Task(1,'criar um novo projeto', true),
      new Task(2,'executar a atividade sem olhar', false)
    ]

    setTasks(tasksAux)
  },[])

  function renderHeader() {
    return (
      <tr className="text-left">
        <th className="p-4">Id</th>
        <th className="p-4">Title</th>
        <th className="p-4">Done</th>
      </tr>
    )
  }

  function renderTasks() {
    return tasks.map( t => (
      <tr
       className="text-left rounded"
       key={t.id}>
        <td className="p-4">{t.id}</td>
        <td className="p-4">{t.title}</td>
        {
          t.done ? (
            <td className="p-4 text-green-600">Completed</td>
          ) : (
            <td className="p-4 text-red-600">To do</td>
          )
        }
      </tr>
    ))
  }

  return (
    <div className="w-4/6 border rounded-lg">
      <table className="w-full">
        <thead className="w-full border-b-2 border-gray-100">
          {renderHeader()}
        </thead>
        <tbody>
          {renderTasks()}
        </tbody>
      </table>
    </div>
  )

}