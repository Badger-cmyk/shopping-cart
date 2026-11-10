import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import NavBar from "../components/NavBar";
import CartProvider from "../context/CartProvider";
import useCart from "../hooks/useCart";

function Seed(){
    const { addToCart } = useCart()

    return(
        <button onClick={() => addToCart({ id: 1, title: 'Backpack', price: 10, image: 'b.jpg'}, 3)}>
            seed cart
        </button>
    )
}

describe('Navbar', () => {
    it('links to the home, shop and cart pages', () => {
        render(
            <MemoryRouter>
                <CartProvider>
                    <NavBar />
                </CartProvider>
            </MemoryRouter>
        )

        expect(screen.getByRole('link', { name: /home/i})).toHaveAttribute('href', '/')
        expect(screen.getByRole('link', { name: /shop/i})).toHaveAttribute('href', '/shop')
        expect(screen.getByRole('link', { name: /cart/i})).toHaveAttribute('href', '/cart')

    })

    it('shows the number of items in the cart', async () => {
        const user = userEvent.setup()

        render(
            <MemoryRouter>
                <CartProvider>
                    <NavBar />
                    <Seed />
                </CartProvider>
            </MemoryRouter>
        )

        expect(screen.getByRole('link', { name: /^cart$/i })).toBeInTheDocument()

        await user.click(screen.getByRole('button', { name: /seed cart/i }))

        expect(screen.getByRole('link', { name: /cart \(3\)/i })).toBeInTheDocument()
    })
})