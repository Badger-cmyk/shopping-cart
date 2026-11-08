import { describe, it, expect, vi, afterEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import useProducts from "../hooks/useProducts";

const fakeProducts = [
    { id: 1, title: "Backpack", price: 109.95 },
    { id: 2, title: "T-Shirt", price: 22.3 }
]

describe('useProducts', () => {
    afterEach(() => {
        vi.unstubAllGlobals()
    })

    it('starts in a loading state', () => {
        vi.stubGlobal('fetch', 
            vi.fn(() => new Promise(() => {}))
        )

        const { result } = renderHook(() => useProducts())
        expect(result.current.loading).toBe(true)
        expect(result.current.products).toEqual([])
    })

    it('returns the products after a successful fetch', async () => {
        vi.stubGlobal('fetch', 
            vi.fn(() => Promise.resolve({ ok: true, json: () => Promise.resolve(fakeProducts)}))
        )

        const { result } = renderHook(() => useProducts())

        await waitFor(() => expect(result.current.loading).toBe(false))
        expect(result.current.products).toEqual(fakeProducts)
        expect(result.current.error).toBeNull
    })

    it('reports an error when the server responds with a failure', async () => {
        vi.stubGlobal(
            'fetch', vi.fn(() => Promise.resolve({ ok: false, status: 500 }))
        )

        const { result } = renderHook(() => useProducts())

        await waitFor(() => expect(result.current.loading).toBe(false))
        expect(result.current.error).toMatch(/500/)
        expect(result.current.products).toEqual([])
    })

    it('reports an error when the network request fails', async () => {
        vi.stubGlobal(
            'fetch', vi.fn(() => Promise.reject(new Error('Network down')))
        )

        const { result } = renderHook(() => useProducts())

        await waitFor(() => expect(result.current.error).toBe('Network down'))
    })
})