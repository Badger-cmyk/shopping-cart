import { useState, useEffect } from "react";

const API_URL = 'https://fakestoreapi.com/products'

export default function useProducts(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController()

        async function fetchProducts(){
            try {
                const response = await fetch(API_URL, {
                signal: controller.signal,
            })

                if(!response.ok){
                    throw new Error(`Request failed with status ${response.status}`)
                }

                const data = await response.json()
                setProducts(data)
            } catch(err) {
                if(err.name !== 'AbortError'){
                    setError(err.message)
                }
            } finally {
                if(!controller.signal.aborted) {
                    setLoading(false)
                }
            }
        }

        fetchProducts()
        return () => controller.abort()
    }, [])

    return { products, loading, error }
}