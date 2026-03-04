import { logoutUser } from "../api/auth"

function Navbar({ setAuth }) {

    const handleLogout = async () => {
        await logoutUser()
        setAuth(false)
    }

    return (
        <div className="flex justify-between bg-blue-600 text-white p-4">
            <h1 className="font-bold">Task Manager</h1>

            <button
                className="bg-red-500 px-3 py-1 rounded"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    )
}

export default Navbar