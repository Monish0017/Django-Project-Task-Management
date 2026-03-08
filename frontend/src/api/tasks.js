const API = "http://localhost:8000"

export const getTasks = async () => {

    const res = await fetch(`${API}/api/tasks/`, {
        method: "GET",
        credentials: "include"
    })

    console.log("Task API status:", res.status)

    const data = await res.json()

    console.log("Tasks data:", data)

    return data
}

export const createTask = async (task) => {
    const res = await fetch(`${API}/api/tasks/`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    return res.json()
}

export const toggleTask = async (id, completed) => {

    await fetch(`${API}/api/tasks/${id}/`, {
        method: "PATCH",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            completed: !completed
        })
    })
}


export const deleteTask = async (id) => {

    await fetch(`${API}/api/tasks/${id}/`, {
        method: "DELETE",
        credentials: "include"
    })
}