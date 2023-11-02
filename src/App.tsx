import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
export default function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}
