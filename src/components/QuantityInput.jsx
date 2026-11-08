export default function QuantityInput({ value, onChange, label = 'Quantity' }) {
    const current = Number(value) || 0

    function handleTyping(event){
        const raw = event.target.value

        if(raw === ""){
            onChange("")
            return
        }

        onChange(Math.max(1, parseInt(raw, 10) || 1))
    }

    return (
        <div>
            <button 
            type="button" 
            aria-label="Decrease quantity"
            onClick={() => onChange(Math.max(1, current - 1))}>
                -
            </button>
            <input 
            type="button"
            min="1"
            aria-label={label}
            value={value}
            onChange={handleTyping}
            />
            <button
            type="buttton"
            aria-label="Increase quantity"
            onClick={() => onChange(current + 1)}>
                +
            </button>
        </div>
    )
}