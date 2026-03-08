import { useState } from "react"

function CreateTask({ onCreate }) {

    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [priority,setPriority] = useState("MEDIUM")
    const [dueDate,setDueDate] = useState("")

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
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">

            <h2 className="text-xl font-semibold mb-4">
                Create New Task
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

                <input
                    className="border w-full p-3 rounded"
                    placeholder="Task Title"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    required
                />

                <textarea
                    className="border w-full p-3 rounded"
                    placeholder="Task Description"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                />

                <div className="flex gap-4">

                    <div className="flex flex-col w-1/2">
                        <label className="text-sm mb-1">Priority</label>

                        <select
                            className="border p-2 rounded"
                            value={priority}
                            onChange={(e)=>setPriority(e.target.value)}
                        >
                            <option value="LOW">Low</option>
                            <option value="MEDIUM">Medium</option>
                            <option value="HIGH">High</option>
                        </select>
                    </div>

                    <div className="flex flex-col w-1/2">
                        <label className="text-sm mb-1">Due Date & Time</label>

                        <input
                            type="datetime-local"
                            className="border p-2 rounded"
                            value={dueDate}
                            onChange={(e)=>setDueDate(e.target.value)}
                        />
                    </div>

                </div>

                <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                    Add Task
                </button>

            </form>

        </div>
    )
}

export default CreateTask