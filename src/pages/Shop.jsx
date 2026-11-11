import useProducts from "../hooks/useProducts"
import ProductCard from "../components/ProductCard"
import useCart from "../hooks/useCart"
import styles from "./Shop.module.css"

function Shop(){
    const { products, loading, error } = useProducts()
    const { addToCart } = useCart()

    if(loading) return <p className={styles.status}>Loading products...</p>
    if(error) return <p className={styles.status}>Something went wrong: {error}</p>

    return (
        <main className={styles.page}>
            <h1 className={styles.heading}>Shop</h1>
            <div className={styles.grid}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onAddToCart={addToCart}/>
                ))}
            </div>
        </main>
    )
}

export default Shop