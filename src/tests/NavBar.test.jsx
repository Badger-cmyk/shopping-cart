import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";
import CartProvider from "../context/CartProvider";

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
})