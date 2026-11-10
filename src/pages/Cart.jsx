import { Link } from "react-router-dom"
import useCart from "../hooks/useCart"
import CartItem from "../components/CartItem"

function Cart(){
    const { items, updateQuantity, removeFromCart } = useCart()

    if(items.length === 0){
        return(
            <main>
                <h1>Your Cart</h1>
                <p>Your cart is empty</p>
                <Link to="/shop">Browse the shop</Link>
            </main>
        )
    }

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <main>
            <h1>Your Cart</h1>
            <ul>
                {items.map((item) => (
                    <CartItem 
                        key={item.id}
                        item={item}
                        onQuantityChange={updateQuantity}
                        onRemove={removeFromCart}
                    />
                ))}
            </ul>
            <p>Total: ${total.toFixed(2)}</p>
        </main>
    )
}

export default Cart