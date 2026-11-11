import { NavLink } from "react-router-dom"
import useCart from "../hooks/useCart"
import styles from "./NavBar.module.css"

export default function NavBar(){
    const { totalItems } = useCart()

    return (
        <nav className={styles.nav}>
            <NavLink to="/" end className={styles.link}>Home</NavLink>
            <NavLink to="/shop" className={styles.link}>Shop</NavLink>
            <NavLink to="/cart" className={styles.link}>Cart{totalItems > 0 ? ` (${totalItems})` : ''}</NavLink>
        </nav>
    )
}