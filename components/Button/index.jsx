export const Button = ({
    children,
    onClick = () => {}
}) => {
    return (
        <button 
            className='main-btn uk-flex uk-flex-middle uk-flex-center' 
            onClick={onClick}
            data-testid='button'
        >
            { children }
        </button>
    )
}