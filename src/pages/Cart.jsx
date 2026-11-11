import { Link } from "react-router-dom"
import useCart from "../hooks/useCart"
import CartItem from "../components/CartItem"
import styles from "./Cart.module.css";

function Cart(){
    const { items, updateQuantity, removeFromCart } = useCart()

    if(items.length === 0){
        return(
            <main className={`${styles.page} ${styles.empty}`}>
                <h1 className={styles.heading}>Your Cart</h1>
                <p>Your cart is empty</p>
                <Link to="/shop" className={styles.link}>Browse the shop</Link>
            </main>
        )
    }

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <main className={styles.page}>
            <h1 className={styles.heading}>Your Cart</h1>
            <ul className={styles.list}>
                {items.map((item) => (
                    <CartItem 
                        key={item.id}
                        item={item}
                        onQuantityChange={updateQuantity}
                        onRemove={removeFromCart}
                    />
                ))}
            </ul>
            <p className={styles.summary}>Total: ${total.toFixed(2)}</p>
        </main>
    )
}

export default Cart