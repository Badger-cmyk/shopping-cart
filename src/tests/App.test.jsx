import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe('App', () => {
    beforeEach(() => {
        vi.stubGlobal(
            'fetch', vi.fn(() => Promise.resolve({ ok: true, json: () => Promise.resolve([])}))
        )
    })

    afterEach(() => {
        vi.unstubAllGlobals()
    })

    it('should render the home page when navigating to "/"', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        )

        expect(screen.getByRole('heading', { name: /home/i})).toBeInTheDocument()
    })

    it('should render the shop page when navigating to "/shop"', async () => {
        render(
            <MemoryRouter initialEntries={['/shop']}>
                <App />
            </MemoryRouter>
        )

        expect(await screen.findByRole('heading', { name: /shop/i})).toBeInTheDocument()
    })


    it('should render the cart page when navigating to "/cart"', () => {
        render(
            <MemoryRouter initialEntries={['/cart']}>
                <App />
            </MemoryRouter>
        )

        expect(screen.getByRole('heading', { name: /cart/i})).toBeInTheDocument()
    })
})