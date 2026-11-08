import useProducts from "../hooks/useProducts"

function Shop(){
    const { products, loading, error } = useProducts()

    if(loading) return <p>Loading products...</p>
    if(error) return <p>Something went wrong: {error}</p>

    return (
        <main>
            <h1>Shop</h1>
            <p>{products.length} products loaded</p>
        </main>
    )
}

export default Shop