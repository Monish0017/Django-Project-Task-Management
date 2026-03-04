import { useEffect, useState } from "react"
import { getTasks, createTask, toggleTask } from "../api/tasks"
import TaskCard from "../components/TaskCard"
import Navbar from "../components/Navbar"
import CreateTask from "../components/CreateTask"

function Dashboard({ setAuth }) {

    const [tasks, setTasks] = useState([])

    const loadTasks = async () => {
        const data = await getTasks()
        setTasks(data)
    }

    useEffect(() => {
        loadTasks()
    }, [])

    const handleCreate = async (taskData) => {
        await createTask(taskData)
        loadTasks()
    }

    const handleToggle = async (task) => {
        await toggleTask(task.id, task.completed)
        loadTasks()
    }

    return (
        <div className="min-h-screen bg-gray-100">

            <Navbar setAuth={setAuth} />

            <div className="max-w-3xl mx-auto p-6">

                <CreateTask onCreate={handleCreate} />

                <h2 className="text-xl font-semibold mb-4">
                    Your Tasks
                </h2>

                <div className="space-y-4">
                    {tasks.length === 0 && (
                        <p className="text-gray-500">No tasks yet</p>
                    )}

                                {tasks.map(task => (
                <TaskCard
                    key={task.id}
                    task={task}
                    onToggle={handleToggle}
                />
            ))}
                </div>

            </div>

        </div>
    )
}

export default Dashboard