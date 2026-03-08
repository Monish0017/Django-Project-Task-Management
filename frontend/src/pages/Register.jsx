import { useState } from "react"
import { registerUser } from "../api/auth"

function Register({ setPage }) {

    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(password !== confirmPassword){
            alert("Passwords do not match")
            return
        }

        await registerUser({
            username,
            email,
            password,
            confirm_password: confirmPassword
        })

        alert("Account created successfully")
        setPage("login")
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 flex items-center justify-center">

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-xl rounded-xl p-8 w-96 space-y-4"
            >

                <h2 className="text-2xl font-bold text-center text-gray-700">
                    Register
                </h2>

                <input
                    className="border p-3 w-full rounded focus:ring-2 focus:ring-blue-400"
                    placeholder="Username"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                />

                <input
                    className="border p-3 w-full rounded focus:ring-2 focus:ring-blue-400"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <input
                    type="password"
                    className="border p-3 w-full rounded focus:ring-2 focus:ring-blue-400"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <input
                    type="password"
                    className="border p-3 w-full rounded focus:ring-2 focus:ring-blue-400"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                />

                <button
                    className="bg-blue-600 hover:bg-blue-700 transition text-white w-full py-2 rounded-lg"
                >
                    Register
                </button>

                <p className="text-sm text-center text-gray-500">
                    Already have an account?
                    <button
                        type="button"
                        className="text-blue-600 ml-1 font-semibold"
                        onClick={()=>setPage("login")}
                    >
                        Login
                    </button>
                </p>

            </form>

        </div>
    )
}

export default Register