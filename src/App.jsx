import { Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"

function App(){
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App