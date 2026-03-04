function TaskCard({ task }) {

    return (
        <div className="border p-4 rounded shadow">
            <h3 className="font-bold text-lg">{task.title}</h3>

            <p>{task.description}</p>

            <p className="text-sm text-gray-500">
                Priority: {task.priority}
            </p>

            <p>
                {task.completed ? "✅ Completed" : "❌ Pending"}
            </p>
        </div>
    )
}

export default TaskCard