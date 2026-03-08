function TaskCard({ task, onToggle, onDelete }) {

    const dueDate = task.due_date
        ? new Date(task.due_date)
        : null

    const formattedDate = dueDate
        ? dueDate.toLocaleString()
        : "No due date"

    const isOverdue =
        dueDate && !task.completed && dueDate < new Date()

    return (
        <div className="bg-white shadow-md rounded-lg p-5 border">

            {/* Due Date */}
            <p className={`font-bold mb-2 ${
                isOverdue ? "text-red-600" : "text-gray-700"
            }`}>
                Due: {formattedDate}
            </p>

            <div className="flex justify-between items-center">

                <h3 className={`text-lg font-semibold ${
                    task.completed ? "line-through text-gray-400" : ""
                }`}>
                    {task.title}
                </h3>

                <span className={`text-xs px-2 py-1 rounded
                    ${task.priority === "HIGH" ? "bg-red-200" :
                      task.priority === "MEDIUM" ? "bg-yellow-200" :
                      "bg-green-200"}
                `}>
                    {task.priority}
                </span>

            </div>

            <p className="text-gray-600 mt-2">
                {task.description}
            </p>

            <div className="flex justify-between items-center mt-4">

                <span className="text-sm text-gray-500">
                    {task.completed ? "Completed" : "Pending"}
                </span>

                <div className="flex gap-2">

                    <button
                        onClick={()=>onToggle(task)}
                        className={`px-3 py-1 rounded text-white ${
                            task.completed
                            ? "bg-gray-500"
                            : "bg-green-600"
                        }`}
                    >
                        {task.completed
                            ? "Mark Pending"
                            : "Mark Done"}
                    </button>

                    <button
                        onClick={()=>onDelete(task.id)}
                        className="px-3 py-1 rounded bg-red-600 text-white"
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>
    )
}

export default TaskCard