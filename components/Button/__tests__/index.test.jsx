import { fireEvent, screen, render } from '@testing-library/react'
import { Button } from '..'
import '@testing-library/jest-dom'

describe('Button testing -', () => {
    it('children passed correctly', () => {
        const { getByRole } = render(
            <Button>
                <span role='test-text'>DEMO</span>
            </Button>
        )

        expect(getByRole('test-text')).toBeInTheDocument()
        expect(getByRole('test-text')).toHaveTextContent('DEMO')
    })

    it('onClick event works ok', async () => {
        const onClick = jest.fn()

        render(
            <Button onClick={onClick}>
                <span role='test-text'>DEMO</span>
            </Button>
        )

        fireEvent.click(await screen.findByTestId('button'))

        expect(onClick).toHaveBeenCalledTimes(1)
    })
})