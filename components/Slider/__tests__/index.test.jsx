import { screen, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Slider } from '..'

describe('Slider testing', () => {
    it('checks opacity in all images', async () => {
        const { getAllByRole } = render(
            <Slider
                auto={false}
                imgs={[
                    'img-1.png',
                    'img-2.png',
                    'img-3.png'
                ]}
            />
        )

        expect(getAllByRole('slider-img')[0]).toHaveStyle('opacity: 1;')
        expect(getAllByRole('slider-img')[1]).toHaveStyle('opacity: 0;')
        expect(getAllByRole('slider-img')[2]).toHaveStyle('opacity: 0;')
    })

    it('checks changing img after clicking next button', async () => {
        const { getAllByRole, getByTestId } = render(
            <Slider
                auto={false}
                imgs={[
                    'img-1.png',
                    'img-2.png',
                    'img-3.png'
                ]}
            />
        )

        fireEvent.click(getByTestId('slider-btn-next'))
        fireEvent.click(getByTestId('slider-btn-prev'))

        expect(getAllByRole('slider-img')[0]).toHaveStyle('opacity: 1;')
        expect(getAllByRole('slider-img')[1]).toHaveStyle('opacity: 0;')
        expect(getAllByRole('slider-img')[2]).toHaveStyle('opacity: 0;')
    })

    it('checks changing img automatic after 5s', async () => {
        const { getAllByRole } = render(
            <Slider
                auto
                imgs={[
                    'img-1.png',
                    'img-2.png',
                    'img-3.png'
                ]}
            />
        )
        
        setTimeout(() => {
            expect(getAllByRole('slider-img')[1]).toHaveStyle('opacity: 1;')
        }, 5000)
    })
})