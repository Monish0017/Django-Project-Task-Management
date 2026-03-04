function TaskCard({ task, onToggle }) {

    return (
        <div className="bg-white shadow rounded p-4">

            <div className="flex justify-between items-center">

                <h3 className={`font-semibold text-lg ${
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

            <div className="flex justify-between items-center mt-3">

                <p className="text-sm text-gray-500">
                    {task.completed ? "Completed" : "Pending"}
                </p>

                <button
                    onClick={() => onToggle(task)}
                    className={`px-3 py-1 text-white rounded ${
                        task.completed
                        ? "bg-gray-500"
                        : "bg-green-600"
                    }`}
                >
                    {task.completed ? "Mark Pending" : "Mark Done"}
                </button>

            </div>

        </div>
    )
}

export default TaskCard