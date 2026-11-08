import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import QuantityInput from "../components/QuantityInput";

describe('QuantityInput', () => {
    it('increases the quantity by one', async () => {
        const user = userEvent.setup()
        const handleChange = vi.fn()
        render(<QuantityInput value={3} onChange={handleChange} />)

        await user.click(screen.getByRole('button', { name: /increase/i}))

        expect(handleChange).toHaveBeenCalledWith(4)
    })

    it('decreases the quantity by one', async () => {
        const user = userEvent.setup()
        const handleChange = vi.fn()
        render(<QuantityInput value={3} onChange={handleChange} />)

        await user.click(screen.getByRole('button', { name: /decrease/i}))
        
        expect(handleChange).toHaveBeenCalledWith(2)
    })

    it('never goes below one', async () => {
        const user = userEvent.setup()
        const handleChange = vi.fn()
        render(<QuantityInput value={1} onChange={handleChange} />)

        await user.click(screen.getByRole('button', { name: /decrease/i}))

        expect(handleChange).toHaveBeenCalledWith(1)
    })
})