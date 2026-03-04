import { useEffect, useState } from "react"
import { getTasks, createTask } from "../api/tasks"
import TaskCard from "../components/TaskCard"
import Navbar from "../components/Navbar"
import CreateTask from "../components/CreateTask"

function Dashboard({ setAuth }) {

    const [tasks, setTasks] = useState([])

    const loadTasks = async () => {
        console.log("Loading tasks...")
        const data = await getTasks()
        console.log("Tasks received:", data)
        setTasks(data)
    }

    useEffect(() => {
        loadTasks()
    }, [])

    const handleCreate = async (taskData) => {

        await createTask(taskData)

        // reload tasks after creating
        loadTasks()
    }

    return (
        <div>

            <Navbar setAuth={setAuth} />

            <div className="p-6">

                {/* Create Task UI */}
                <CreateTask onCreate={handleCreate} />

                {/* Task List */}
                <div className="grid gap-4">

                    {tasks.map(task => (
                        <TaskCard key={task.id} task={task} />
                    ))}

                </div>

            </div>

        </div>
    )
}

export default Dashboard