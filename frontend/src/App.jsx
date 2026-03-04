import { useState } from "react"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"

function App(){

  const [auth,setAuth] = useState(false)
  const [page,setPage] = useState("login")

  if(auth){
    console.log("gone");
    return <Dashboard setAuth={setAuth}/>
  }

  if(page === "register"){
    return <Register setPage={setPage}/>
  }

  return <Login setAuth={setAuth} setPage={setPage}/>
}

export default App