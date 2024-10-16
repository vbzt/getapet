import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/pages/Home"
import Register from "./components/pages/Auth/Register"
import Login from "./components/pages/Auth/Login"
import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer"

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/login" element = {<Login></Login>}></Route>
        <Route path="/register" element = {<Register></Register>}></Route>
        <Route path="/" element = {<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  )
}

export default App
