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
        <div className="min-h-screen bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 flex items-center justify-center">

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-xl rounded-xl p-8 w-96 space-y-4"
            >

                <h2 className="text-2xl font-bold text-center text-gray-700">
                    Login
                </h2>

                <input
                    className="border p-3 w-full rounded focus:ring-2 focus:ring-blue-400"
                    placeholder="Username"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                />

                <input
                    type="password"
                    className="border p-3 w-full rounded focus:ring-2 focus:ring-blue-400"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <button
                    className="bg-blue-600 hover:bg-blue-700 transition text-white w-full py-2 rounded-lg"
                >
                    Login
                </button>

                <p className="text-sm text-center text-gray-500">
                    Don't have an account?
                    <button
                        type="button"
                        className="text-blue-600 ml-1 font-semibold"
                        onClick={()=>setPage("register")}
                    >
                        Register
                    </button>
                </p>

            </form>

        </div>
    )
}

export default Login