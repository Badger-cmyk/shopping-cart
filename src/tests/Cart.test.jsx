import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import CartProvider from "../context/CartProvider";
import useCart from "../hooks/useCart";
import Cart from "../pages/Cart";

const backpack = { id: 1, title: 'Backpack', price: 109.95, image: 'b.jpg'}

function Seed(){
    const { addToCart } = useCart()
    return(
        <button onClick={() => addToCart(backpack, 2)}>seed cart</button>
    )
}

async function renderCartWithItem(){
    const user = userEvent.setup()
    render(
        <MemoryRouter>
            <CartProvider>
                <Seed />
                <Cart />
            </CartProvider>
        </MemoryRouter>
    )

    await user.click(screen.getByRole('button', { name: /seed cart/i }))
    return user
}

describe('Cart Page', () => {
    it('shows a message when the cart is empty', () => {
        render(
            <MemoryRouter>
                <CartProvider>
                    <Cart />
                </CartProvider>
            </MemoryRouter>
        )

        expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    })

    it('lists the items with their line price and the total', async () => {
        await renderCartWithItem()

        expect(screen.getByRole('heading', { name: /backpack/i })).toBeInTheDocument()
        expect(screen.getByLabelText(/quantity for backpack/i)).toHaveValue(2);
        expect(screen.getByText('Total: $219.90')).toBeInTheDocument()
    })

    it('updates the total when the quantity increases', async () => {
        const user = await renderCartWithItem()

        await user.click(screen.getByRole('button', { name: /increase quantity/i }))

        expect(screen.getByText('Total: $329.85')).toBeInTheDocument()
    })

    it('removes an item and shows the empty message', async () => {
        const user = await renderCartWithItem()

        await user.click(screen.getByRole('button', { name: /remove backpack/i }))

        expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    })
})