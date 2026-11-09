import { NavLink } from "react-router-dom"
import useCart from "../hooks/useCart"

export default function NavBar(){
    const { totalItems } = useCart()

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/cart">Cart{totalItems > 0 ? ` (${totalItems})` : ''}</NavLink>
        </nav>
    )
}