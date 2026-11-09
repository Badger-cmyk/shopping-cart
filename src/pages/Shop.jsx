import useProducts from "../hooks/useProducts"
import ProductCard from "../components/ProductCard"

function Shop(){
    const { products, loading, error } = useProducts()

    if(loading) return <p>Loading products...</p>
    if(error) return <p>Something went wrong: {error}</p>

    return (
        <main>
            <h1>Shop</h1>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </main>
    )
}

export default Shop