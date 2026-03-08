import { useEffect, useState } from "react"
import { getTasks, createTask, toggleTask, deleteTask } from "../api/tasks"
import TaskCard from "../components/TaskCard"
import Navbar from "../components/Navbar"
import CreateTask from "../components/CreateTask"

function Dashboard({ setAuth }) {

    const [tasks, setTasks] = useState([])
    const [filter, setFilter] = useState("ALL")

    const loadTasks = async () => {
        const data = await getTasks()

        // Move completed tasks to bottom
        const sorted = data.sort((a,b)=>a.completed - b.completed)

        setTasks(sorted)
    }

    useEffect(()=>{
        loadTasks()
    },[])

    const handleCreate = async(taskData)=>{
        await createTask(taskData)
        loadTasks()
    }

    const handleToggle = async(task)=>{
        await toggleTask(task.id, task.completed)
        loadTasks()
    }

    const handleDelete = async(id)=>{
        await deleteTask(id)
        loadTasks()
    }

    const filteredTasks = tasks.filter(task=>{
        if(filter === "PENDING") return !task.completed
        if(filter === "COMPLETED") return task.completed
        return true
    })

    return (
        <div className="min-h-screen bg-gray-100">

            <Navbar setAuth={setAuth}/>

            <div className="max-w-6xl mx-auto p-6">

                {/* CREATE TASK SECTION */}
                <div className="mb-8">
                    <CreateTask onCreate={handleCreate}/>
                </div>

                {/* FILTER */}
                <div className="flex gap-3 mb-6">

                    <button
                        onClick={()=>setFilter("ALL")}
                        className="px-4 py-2 bg-gray-200 rounded"
                    >
                        All
                    </button>

                    <button
                        onClick={()=>setFilter("PENDING")}
                        className="px-4 py-2 bg-yellow-200 rounded"
                    >
                        Pending
                    </button>

                    <button
                        onClick={()=>setFilter("COMPLETED")}
                        className="px-4 py-2 bg-green-200 rounded"
                    >
                        Completed
                    </button>

                </div>

                {/* TASK GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    {filteredTasks.length === 0 && (
                        <p className="text-gray-500">No tasks found</p>
                    )}

                    {filteredTasks.map(task=>(
                        <TaskCard
                            key={task.id}
                            task={task}
                            onToggle={handleToggle}
                            onDelete={handleDelete}
                        />
                    ))}

                </div>

            </div>

        </div>
    )
}

export default Dashboard