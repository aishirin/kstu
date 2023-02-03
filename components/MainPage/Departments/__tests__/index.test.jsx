import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Departments } from '..'

describe('Main page - Departments testing', () => {
    it('checks clicking list items', () => {
        const { getAllByRole } = render(<Departments />)

        const depsItems = getAllByRole('deps-item')

        expect(depsItems[0]).toHaveClass('main-deps__grid__item is-open')

        fireEvent.click(depsItems[1])

        expect(depsItems[1]).toHaveClass('main-deps__grid__item is-open')
        expect(depsItems[0]).toHaveClass('main-deps__grid__item')
    })
})