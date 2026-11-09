import useProducts from "../hooks/useProducts"
import ProductCard from "../components/ProductCard"
import useCart from "../hooks/useCart"

function Shop(){
    const { products, loading, error } = useProducts()
    const { addToCart } = useCart()

    if(loading) return <p>Loading products...</p>
    if(error) return <p>Something went wrong: {error}</p>

    return (
        <main>
            <h1>Shop</h1>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart}/>
            ))}
        </main>
    )
}

export default Shop