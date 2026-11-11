import { useState } from "react";
import QuantityInput from "./QuantityInput";
import styles from "./CartItem.module.css"

export default function CartItem({ item, onQuantityChange, onRemove }){
    const [draft, setDraft] = useState(item.quantity)

    function handleChange(value){
        setDraft(value)

        if(value !== ''){
            onQuantityChange(item.id, value)
        }
    }

    return (
        <li className={styles.item}>
            <img className={styles.image} src={item.image} alt={item.title} />
            <div className={styles.details}>
                <h2>{item.title}</h2>
                <p>{item.price.toFixed(2)} each</p>
            </div>
            <div>
                <QuantityInput 
                    value={draft}
                    onChange={handleChange}
                    label={`Quantity for ${item.title}`}    
                />
            </div>
            <p className={styles.lineTotal}>${(item.price * item.quantity).toFixed(2)}</p>
            <button
                className={styles.remove}
                type="button"
                aria-label={`Remove ${item.title}`}
                onClick={() => onRemove(item.id)}
            >
                Remove
            </button>
        </li>
    ) 
}