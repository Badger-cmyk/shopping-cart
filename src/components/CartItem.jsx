import { useState } from "react";
import QuantityInput from "./QuantityInput";

export default function CartItem({ item, onQuantityChange, onRemove }){
    const [draft, setDraft] = useState(item.quantity)

    function handleChange(value){
        setDraft(value)

        if(value !== ''){
            onQuantityChange(item.id, value)
        }
    }

    return (
        <li>
            <img src={item.image} alt={item.title} width="80" />
            <h2>{item.title}</h2>
            <p>${item.price.toFixed(2)} each</p>
            <QuantityInput 
                value={draft}
                onChange={handleChange}
                label={`Quantity for ${item.title}`}    
            />
            <p>${(item.price * item.quantity).toFixed(2)}</p>
            <button
                type="button"
                aria-label={`Remove ${item.title}`}
                onClick={() => onRemove(item.id)}
            >
                Remove
            </button>
        </li>
    ) 
}