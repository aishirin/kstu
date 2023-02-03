import { Button } from 'components/Button'

export const Intro = () => (
    <div className='main-intro'>
        <div className='main-container uk-flex uk-flex-middle'>
            <div className='main-intro__details'>
                <h1>
                    Институт информационных
                    технологий
                </h1>

                <p>Самый лучший самый офигенный в мире</p>

                <Button>
                    Подробнее
                </Button>

                <div className='main-intro__details__btns uk-flex uk-flex-between uk-flex-middle'>
                    <img src='media/icons/btn-left.svg' />

                    <img src='media/icons/btn-right.svg' />
                </div>
            </div>
            
            <img className='main-intro__img' src='media/intro.svg' alt='intro' />
        </div>

        <div className='main-intro__abs-btns uk-flex uk-flex-around'>
            <div />

            <div className='is-active' />

            <div />

            <div />

            <div />
        </div>
    </div>
)