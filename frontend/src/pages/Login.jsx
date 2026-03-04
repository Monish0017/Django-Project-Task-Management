import { useState } from "react"
import { loginUser } from "../api/auth"

function Login({ setAuth, setPage }) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        await loginUser({ username, password })

        setAuth(true)
    }
    
    return (
        <div className="min-h-screen bg-gray-100">

            {/* Navbar */}
            <div className="bg-blue-600 text-white p-4 flex justify-between">
                <h1 className="font-bold">Task Manager</h1>

                <button
                    onClick={() => setPage("register")}
                    className="bg-white text-blue-600 px-3 py-1 rounded"
                >
                    Register
                </button>
            </div>

            <div className="flex items-center justify-center h-screen">

                <form
                    onSubmit={handleSubmit}
                    className="border p-6 rounded w-80 space-y-4 bg-white"
                >

                    <h2 className="text-xl font-bold">Login</h2>

                    <input
                        className="border p-2 w-full"
                        placeholder="Username"
                        onChange={(e)=>setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        className="border p-2 w-full"
                        placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)}
                    />

                    <button
                        className="bg-blue-600 text-white w-full py-2"
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>
    )
}

export default Login