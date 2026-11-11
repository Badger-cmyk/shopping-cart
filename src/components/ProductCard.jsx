import { useState } from "react";
import QuantityInput from "./QuantityInput";
import styles from "./ProductCard.module.css"

export default function ProductCard({ product, onAddToCart = () => {}}){
    const [quantity, setQuantity] = useState(1)

    function handleAdd(){
        const amount = Number(quantity) || 1
        onAddToCart(product, amount)
        setQuantity(1)
    }

    return(
        <article className={styles.card}>
           <img className={styles.image} src={product.image} alt={product.title} /> 
           <h2 className={styles.title}>{product.title}</h2>
           <p className={styles.price}>${product.price.toFixed(2)}</p>
           <div className={styles.controls}>
            <QuantityInput 
            value={quantity}
            onChange={setQuantity}
            label={`Quantity for ${product.title}`}
            />
            <button type="button" onClick={handleAdd}>
                Add to Cart
            </button>
           </div>
        </article>
    )
}