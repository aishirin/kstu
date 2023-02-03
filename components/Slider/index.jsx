import { useEffect, useRef, useState } from 'react'

export const Slider = ({
    auto = true,
    imgs,
    style = {}
}) => {
    const [index, setIndex] = useState(0)
    const timer = useRef(null)

    const nextImage = () => {
        if(timer.current) clearTimeout(timer.current)

        if(index + 1 === imgs.length) setIndex(0)
        else setIndex(index + 1)
    }

    const prevImage = () => {
        if(timer.current) clearTimeout(timer.current)

        console.log(index)

        if(index <= 0) setIndex(imgs.length - 1)
        else if(index < (imgs.length - 1)) setIndex(index - 1)
        else setIndex(0)
    }

    useEffect(() => {
        if(auto) {
            if(timer.current) clearTimeout(timer.current)

            timer.current = setTimeout(() => {
                nextImage()
            }, 4500)
        }
    }, [auto, index])

    return (
        <div className='main-slider' style={{ ...style }}>
            <img 
                className='main-slider__icon left' 
                onClick={prevImage} 
                src='media/icons/btn-left.svg' 
                data-testid='slider-btn-prev'
            />

            <img 
                className='main-slider__icon right' 
                onClick={nextImage} 
                src='media/icons/btn-right.svg' 
                data-testid='slider-btn-next'
            />

            {
                imgs.map((img, i) => (
                    <img 
                        key={i}
                        src={img} 
                        alt='slider-img' 
                        className='main-slider__slide' 
                        style={{ opacity: index === i ? '1' : '0' }} 
                        role='slider-img'
                    />
                ))
            }
        </div>
    )
}