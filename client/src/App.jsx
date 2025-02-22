import "./index.css"
import Signin from "./Components/Signin"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Signup from "./Components/Signup"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import SecondaryNav from "./Components/SecondaryNav"

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<> <Navbar /><Home /></>} />
        <Route path="/Signin" element={<>   <SecondaryNav />     <Signin /></>} />
        <Route path="/signup" element={<><SecondaryNav /><Signup /></>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
