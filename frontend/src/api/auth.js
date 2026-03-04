const API = "http://localhost:8000"

export const loginUser = async (data) => {

    const res = await fetch(`${API}/auth/login/`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const responseData = await res.json()

    console.log("Login response:", responseData)

    return responseData
}

export const registerUser = async (data) => {
    const res = await fetch(`${API}/auth/register/`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    return res.json()
}

export const logoutUser = async () => {
    await fetch(`${API}/auth/logout/`, {
        method: "POST",
        credentials: "include"
    })
}