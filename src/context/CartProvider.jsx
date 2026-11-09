import { useState } from "react";
import { CartContext } from "./CartContext";

export default function CartProvider({children}){
    const [items, setItems] = useState([])

    function addToCart(product, quantity){
        setItems((current) => {
            const existing = current.find((item) => item.id === product.id)

            if(existing){
                return current.map((item) => 
                item.id === product.id ? {...item, quantity: item.quantity + quantity} : item
                )
            }

            return [...current, 
                {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    quantity
                }
            ]
        })
    }

    function updateQuantity(id, quantity){
        setItems((current) =>
            current.map((item) => (item.id === id ? { ...item, quantity }: item))
        )
    }

    function removeFromCart(id){
        setItems((current) => current.filter((item) => item.id !== id))
    }

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <CartContext.Provider
        value={{ items, addToCart, updateQuantity, removeFromCart, totalItems }}>
            {children}
        </CartContext.Provider>
    )
}