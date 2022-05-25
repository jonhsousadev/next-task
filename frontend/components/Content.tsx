import TasksTable from "./TasksTable";

export default function Content(props) {
  return (
    <div className="flex justify-center items-center
    h-screen w-screen bg">
      <TasksTable tasks={[]} />
    </div>
  )
}