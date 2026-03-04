import { useState } from "react"

function CreateTask({ onCreate }) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("MEDIUM")
    const [dueDate, setDueDate] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        onCreate({
            title,
            description,
            priority,
            due_date: dueDate
        })

        setTitle("")
        setDescription("")
        setPriority("MEDIUM")
        setDueDate("")
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow p-4 rounded mb-6 space-y-3"
        >

            <input
                className="border p-2 w-full"
                placeholder="Task Title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                required
            />

            <textarea
                className="border p-2 w-full"
                placeholder="Description"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
            />

            <div className="flex gap-3">

                <select
                    className="border p-2"
                    value={priority}
                    onChange={(e)=>setPriority(e.target.value)}
                >
                    <option value="LOW">Low</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HIGH">High</option>
                </select>

                <input
                    type="datetime-local"
                    className="border p-2"
                    value={dueDate}
                    onChange={(e)=>setDueDate(e.target.value)}
                />

            </div>

            <button
                className="bg-green-600 text-white px-4 py-2 rounded"
            >
                Create Task
            </button>

        </form>
    )
}

export default CreateTask