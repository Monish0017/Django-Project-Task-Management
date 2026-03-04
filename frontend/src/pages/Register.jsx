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
        <div className="flex items-center justify-center h-screen">

            <form
                onSubmit={handleSubmit}
                className="border p-6 rounded w-80 space-y-4"
            >

                <h2 className="text-xl font-bold">Register</h2>

                <input
                    className="border p-2 w-full"
                    placeholder="Username"
                    onChange={(e)=>setUsername(e.target.value)}
                />

                <input
                    className="border p-2 w-full"
                    placeholder="Email"
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <input
                    type="password"
                    className="border p-2 w-full"
                    placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <input
                    type="password"
                    className="border p-2 w-full"
                    placeholder="Confirm Password"
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                />

                <button
                    className="bg-green-600 text-white w-full py-2"
                >
                    Register
                </button>

                <p className="text-sm text-center">
                    Already have account?
                    <button
                        type="button"
                        className="text-blue-500 ml-1"
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