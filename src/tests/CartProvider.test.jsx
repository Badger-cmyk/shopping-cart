import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import CartProvider from "../context/CartProvider";
import useCart from "../hooks/useCart";

const backpack = { id: 1, title: 'Backpack', price: 109.95, image: 'b.jpg'}
const shirt = { id: 2, title: 'T-Shirt', price: 22.3, image: 't.jpg'}

function setup(){
    return renderHook(() => useCart(), { wrapper: CartProvider })
}

describe('CartProvider', () => {
    it('starts empty', () => {
        const { result } = setup()

        expect(result.current.items).toEqual([])
        expect(result.current.totalItems).toBe(0)
    })

    it('adds a product with a quantity', () => {
        const { result } = setup()

        act(() => result.current.addToCart(backpack, 2))

        expect(result.current.items).toHaveLength(1)
        expect(result.current.totalItems).toBe(2)
    })

    it('combines repeated addition of the same product', () => {
        const { result } = setup()

        act(() => result.current.addToCart(backpack, 1))
        act(() => result.current.addToCart(backpack, 3))

        expect(result.current.items).toHaveLength(1)
        expect(result.current.items[0].quantity).toBe(4)
    })

    it('counts items across different products', () => {
        const { result } = setup()

        act(() => result.current.addToCart(backpack, 2))
        act(() => result.current.addToCart(shirt, 1))

        expect(result.current.totalItems).toBe(3)
    })

    it('updates and removes items', () => {
        const { result } = setup()

        act(() => result.current.addToCart(backpack, 2))
        act(() => result.current.updateQuantity(1, 5))
        expect(result.current.totalItems).toBe(5)

        act(() => result.current.removeFromCart(1))
        expect(result.current.items).toEqual([])
    })
})