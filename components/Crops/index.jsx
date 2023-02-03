export const Crops = ({ items, styles = {} }) => {
    return (
        <div className='nav-crops' style={styles}>
            {
                items.map((item, index) => {
                    const isLast = index + 1 >= items.length

                    return (
                        <div 
                            className={['nav-crops__item uk-flex uk-flex-middle', isLast ? 'is-selected' : ''].join(' ')}
                            key={item.name + index}
                        >
                            <p>{ item.name }</p>

                            {
                                !isLast && (
                                    <img src='/media/icons/nav-arrow-right.svg' alt='nav-icon' />
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}