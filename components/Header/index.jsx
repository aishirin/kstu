import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'

// components
import { LogoIcon } from 'components/LogoIcon'
import { MenuIcon } from 'components/MenuIcon'
import { CloseIcon } from 'components/CloseIcon'
import { MobileDropdown } from './MobileDropdown'

export const navItems = [
    'Главная',
    'Абитуриенту',
    'Студенту',
    'Наука',
    'Институт'
]

export const Header  = () => {
    const [hoveredItem, setHoveredItem] = useState(0)
    const [drawerVisible, setDrawerVisible] = useState(false)
    const router = useRouter()

    const toggleDrawerVisible = () => setDrawerVisible(!drawerVisible)

    const showDropdownContent = () => {
        switch(hoveredItem) {
            case 1:
                return (    
                    <>
                        <div className='fade-in'>
                            <p>Бакалавриат и специалитет</p>

                            <Link href='/posts'>О поступлении</Link>
                            <Link href='/posts'>Программы подготовки</Link>

                            <p className='in-bottom'>Магистратура и аспирантура</p>
                            
                            <Link href='/posts'>Об институте</Link>
                            <Link href='/posts'>История</Link>
                            <Link href='/posts'>Документы</Link>
                            <Link href='/posts'>Программа стратегии развития</Link>
                            <Link href='/posts'>Партнеры</Link>  
                        </div> 

                        <div className='fade-in'>
                            <p>Кафедры</p>

                            <Link href='/posts'>Автоматическое управление</Link>
                            <Link href='/posts'>Информатика и вычислительная техника</Link>  
                            <Link href='/posts'>Компьютерная лингвистика</Link>  
                            <Link href='/posts'>Программное обеспечение компьютерных систем</Link>  
                            <Link href='/posts'>Обеспечение безопасности информационных систем</Link>  
                            <Link href='/posts'>Прикладная математика и информатика</Link>  
                            <Link href='/posts'>Прикладная информатика</Link>  
                            <Link href='/posts'>Инженерная и компьютерная графика</Link>  
                        </div>  

                        <div className='fade-in'>
                            <p>Иностранным гражданам</p>

                            <Link href='/posts'>О поступлении</Link>
                            <Link href='/posts'>Программы подготовки</Link>  

                            <p className='in-bottom'>Приемная комиссия</p>

                            <Link href='/posts'>Правила приема</Link>  
                            <Link href='/posts'>Контакты</Link>  
                        </div>    
                    </>
                )
            case 2:
                return (
                    <>
                        <div className='fade-in'>
                            <p>Учебный процесс</p>

                            <Link href='/posts'>О учебном процессе</Link>
                            <Link href='/posts'>Личный кабинет</Link>
                            <Link href='/posts'>Инструкции</Link>

                            <p>Центр карьеры</p>

                            <Link href='/posts'>Карьера</Link>
                            <Link href='/posts'>Программы стажировки</Link>
                        </div>

                        <div className='fade-in'>
                            <p>Международное сотрудничество</p>

                            <Link href='/posts'>Программы обмена</Link>
                            <Link href='/posts'>Программы стажировки</Link>
                        </div>
                    </>
                )
            case 3:
                return (
                    <>
                        <div className='fade-in'>
                            <p>Научно-образовательные центры</p>

                            <Link href='/posts'>
                                {'Научно-исследовательский химико-технологический институт Физико-Технических Проблем (НИИ ФТП)'}
                            </Link>

                            <Link href='/posts'>
                                {'Научно-Исследовательский Институт Энергетики и связи (НИИЭиС)'}
                            </Link>
                        </div>

                        <div className='fade-in'>
                            <p>Полезное</p>

                            <Link href='/posts'>Рекомендации по написанию научных материалов</Link>
                        </div>
                    </>
                )
            case 4:
                return (
                    <>
                        <div className='fade-in'>
                            <Link href='/posts'>Об институте</Link>
                            <Link href='/posts'>История</Link>
                            <Link href='/posts'>Документы</Link>
                            <Link href='/posts'>Программа стратегии развития</Link>
                            <Link href='/posts'>Партнеры</Link>
                        </div>
                    </>
                )
        }
    }

    const onRouteChangeHandle = () => {
        setDrawerVisible(false)
        setHoveredItem(0)
    }

    useEffect(() => {
        router.events.on('routeChangeComplete', onRouteChangeHandle)

        return () => {
            router.events.off('routeChangeComplete', onRouteChangeHandle)
        }
    }, [])

    const goToMain = () => router.push('/')

    return (
        <header className='main-header'>
            <div className='main-container'>
                <div className='main-header__top uk-flex uk-flex-between uk-flex-middle'>
                    <div className='uk-flex uk-flex-center uk-flex-middle'>
                        <div 
                            className='main-header__top__logo'
                            onClick={goToMain}
                        >
                            <LogoIcon />
                        </div>

                        <div className='main-header__top__titles uk-flex uk-flex-column uk-flex-center'>
                            <h1>Институт информационных технологий</h1>

                            <h2>при КГТУ им. И. Раззакова</h2>
                        </div>
                    </div>

                    <div className='uk-flex'>
                        <div className='main-header__top__langs uk-flex uk-flex-middle'>
                            <div className='text-14 is-active'>Русский</div>

                            <div className='text-14'>English</div>

                            <div className='text-14'>Кыргызча</div>
                        </div>

                        <div className='main-header__top__m-langs uk-flex uk-flex-middle'>
                            <div className='text-14 is-active uk-text-bold'>РУС</div>

                            <svg width='18' height='11' viewBox='0 0 18 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M1 1L9 9L17 1' stroke='black' strokeWidth='1.86667'/>
                            </svg>
                        </div>

                        <div className='main-header__top__m-menu' onClick={toggleDrawerVisible}>
                            {
                                drawerVisible ? (
                                    <CloseIcon />
                                )
                                : (
                                    <MenuIcon />
                                )
                            }
                        </div>
                    </div>
                </div>  

                <div className='main-header__nav uk-flex uk-flex-between uk-flex-middle'>
                    <nav className='uk-flex'>
                        {
                            navItems.map((item, index) => (
                                <div 
                                    key={item} 
                                    className={
                                        ['main-header__nav__item uk-flex uk-flex-middle text-14', (hoveredItem === index) ? 'is-active' : ''].join(' ')
                                    }
                                    onMouseEnter={() => setHoveredItem(index)}
                                    onClick={goToMain}
                                >
                                    { item }
                                </div>
                            ))
                        }
                    </nav>

                    <a className='text-14' href='tel:+996312545146'>
                        <span>Телефон:</span> 
                        
                        +996 (312) 54-51-46
                    </a>
                </div>
            </div>

            <div 
                className={['nav-dropdown', hoveredItem ? 'is-open' : ''].join(' ')}
                onMouseLeave={() => setHoveredItem(0)}
            >
                <div className='main-container'>
                    <div className='nav-dropdown__grid'>
                        {
                            showDropdownContent()
                        }
                    </div>
                </div>
            </div>

            <MobileDropdown 
                visible={drawerVisible}
                setVisible={setDrawerVisible}
            />
        </header>
    )
}