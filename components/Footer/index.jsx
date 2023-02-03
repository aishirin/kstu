export const Footer = () => {
    return (
        <footer className='main-footer'>
            <div className='main-container'>
                <div className='uk-flex uk-flex-between uk-flex-start'>
                    <div className='main-footer__cell uk-flex uk-flex-column'>
                        <h3 className='text-24'>Контакты</h3>

                        <a className='text-14' href='#'>
                            <span>Адрес:&nbsp;</span> 
                            
                            720044, Кыргызстан, г.Бишкек, пр. Ч.Айтматова, 66, кампус 2, каб. 306
                        </a>

                        <a className='text-14' href='tel:+996312545146'>
                            <span>Телефон:&nbsp;</span> 
                            
                            +996 (312) 54-51-46
                        </a>

                        <a className='text-14' href='mailto:fitkstu88.kg@gmail.com'>
                            <span>E-mail:&nbsp;</span> 

                            fitkstu88.kg@gmail.com
                        </a>

                        <div className='main-footer__cert'>
                            © ИИТ КГТУ, 2022
                        </div>
                    </div>

                    <div className='main-footer__cell uk-flex uk-flex-column'>
                        <h3 className='text-24'>Навигация</h3>

                        <a className='text-14 text-underline' href='#'>
                            Абитуриенту
                        </a>

                        <a className='text-14 text-underline' href='#'>
                            Студенту
                        </a>

                        <a className='text-14 text-underline' href='#'>
                            Наука
                        </a>

                        <a className='text-14 text-underline' href='#'>
                            Институт
                        </a>
                    </div>

                    <div className='main-footer__cell'>
                        <div className='main-footer__langs uk-flex uk-flex-middle'> 
                            <div className='text-14 is-active'>
                                Русский
                            </div>

                            <div className='text-14'>
                                English
                            </div>

                            <div className='text-14'>
                                Кыргызча
                            </div>
                        </div>

                        <div className='main-footer__icons uk-flex uk-flex-middle'>
                            <div className='uk-flex uk-flex-middle uk-flex-center'>
                                <img src='/media/icons/youtube.svg' alt='icon-share' />
                            </div>

                            <div className='uk-flex uk-flex-middle uk-flex-center'>
                                <img src='/media/icons/instagram.svg' alt='icon-share' />
                            </div>

                            <div className='uk-flex uk-flex-middle uk-flex-center'>
                                <img src='/media/icons/tiktok.svg' alt='icon-share' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}