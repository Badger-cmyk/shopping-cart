import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from "../components/ProductCard";

const product = {
    id: 1,
    title: "Backpack",
    price: 109.95,
    image: "backpack.jpg"
}

describe('ProductCard', () => {
    it('shows the product title and price', () => {
        render(<ProductCard product={product}/>)

        expect(screen.getByRole('heading', { name: /backpack/i})).toBeInTheDocument()
        expect(screen.getByText('$109.95')).toBeInTheDocument()
    })

    it('adds the chosen quantity to the cart', async () => {
        const user = userEvent.setup()
        const handleAdd = vi.fn()
        render(<ProductCard product={product} onAddToCart={handleAdd} />)

        await user.click(screen.getByRole('button', { name: /increase/i}))
        await user.click(screen.getByRole('button', { name: /add to cart/i}))

        expect(handleAdd).toHaveBeenCalledWith(product, 2)
    })
})