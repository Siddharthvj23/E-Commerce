import "./index.css"
import Signin from "./Components/Signin"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Signup from "./Components/Signup"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import SecondaryNav from "./Components/SecondaryNav"
import { Provider } from "react-redux"
import store from "./redux/store"

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<> <Navbar /><Home /></>} />
        <Route path="/Signin" element={<>   <SecondaryNav />     <Signin /></>} />
        <Route path="/signup" element={<><SecondaryNav /><Signup /></>} />
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
