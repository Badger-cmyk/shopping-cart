import { useState } from "react";
import QuantityInput from "./QuantityInput";

export default function ProductCard({ product, onAddToCart = () => {}}){
    const [quantity, setQuantity] = useState(1)

    function handleAdd(){
        const amount = Number(quantity) || 1
        onAddToCart(product, amount)
        setQuantity(1)
    }

    return(
        <article>
           <img src={product.image} alt={product.title} width="120" /> 
           <h2>{product.title}</h2>
           <p>${product.price.toFixed(2)}</p>
           <QuantityInput 
            value={quantity}
            onChange={setQuantity}
            label={`Quantity for ${product.title}`}
           />
           <button type="button" onClick={handleAdd}>
            Add to Cart
           </button>

        </article>
    )
}