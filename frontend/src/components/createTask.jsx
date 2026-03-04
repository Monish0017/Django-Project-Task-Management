import { useState } from "react"

function CreateTask({ onCreate }) {

    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [priority,setPriority] = useState("MEDIUM")

    const handleSubmit = (e) => {
        e.preventDefault()

        onCreate({
            title,
            description,
            priority
        })

        setTitle("")
        setDescription("")
        setPriority("MEDIUM")
    }

    return (
        <div className="bg-white shadow rounded p-5 mb-6">

            <h2 className="text-lg font-semibold mb-3">
                Create New Task
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">

                <input
                    className="border w-full p-2 rounded"
                    placeholder="Task title"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    required
                />

                <textarea
                    className="border w-full p-2 rounded"
                    placeholder="Description"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                />

                <div className="flex justify-between">

                    <select
                        className="border p-2 rounded"
                        value={priority}
                        onChange={(e)=>setPriority(e.target.value)}
                    >
                        <option value="LOW">Low</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="HIGH">High</option>
                    </select>

                    <button className="bg-green-600 text-white px-4 py-2 rounded">
                        Add Task
                    </button>

                </div>

            </form>

        </div>
    )
}

export default CreateTask