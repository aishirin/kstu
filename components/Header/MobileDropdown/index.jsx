import { useEffect, useState } from 'react'
import Link from 'next/link'

// components
import { ArrowDownIcon } from 'components/ArrowDownIcon'

// utils
import { navItems } from '..'
import { useRouter } from 'next/router'

export const MobileDropdown = ({
    visible,
    setVisible
}) => {
    const router = useRouter()
    const [selectedItem, setSelectedItem] = useState(0)

    const resetSelectedItem = () => setSelectedItem(0)

    const onResizeHandle = () => {
        if(window.innerWidth < 1020) {
            document.body.style.overflowY = 'hidden'
        }
        else {
            document.body.style.overflowY = 'auto'
            
            resetSelectedItem()
        }
    }

    useEffect(() => {
        const header = document.querySelector('header')

        if(visible) {
            document.body.style.overflowY = 'hidden'
            document.body.style.paddingTop = header.offsetHeight + 'px'
        
            header.style.position = 'fixed'

            document.addEventListener('resize', onResizeHandle)
        }
        else {
            document.body.style.overflowY = 'auto'
            document.body.style.paddingTop = '0px'
        
            header.style.position = 'static'

            document.removeEventListener('resize', onResizeHandle)

            resetSelectedItem()
        }
    }, [visible])

    const showContent = () => {
        switch(selectedItem) {
            case 1:
                return (    
                    <>
                        <div className='fade-in uk-flex uk-flex-column'>
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

                        <div className='fade-in uk-flex uk-flex-column'>
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

                        <div className='fade-in uk-flex uk-flex-column'>
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
                        <div className='fade-in uk-flex uk-flex-column'>
                            <p>Учебный процесс</p>

                            <Link href='/posts'>О учебном процессе</Link>
                            <Link href='/posts'>Личный кабинет</Link>
                            <Link href='/posts'>Инструкции</Link>

                            <p>Центр карьеры</p>

                            <Link href='/posts'>Карьера</Link>
                            <Link href='/posts'>Программы стажировки</Link>
                        </div>

                        <div className='fade-in uk-flex uk-flex-column'>
                            <p>Международное сотрудничество</p>

                            <Link href='/posts'>Программы обмена</Link>
                            <Link href='/posts'>Программы стажировки</Link>
                        </div>
                    </>
                )
            case 3:
                return (
                    <>
                        <div className='fade-in uk-flex uk-flex-column'>
                            <p>Научно-образовательные центры</p>

                            <Link href='/posts'>
                                {'Научно-исследовательский химико-технологический институт Физико-Технических Проблем (НИИ ФТП)'}
                            </Link>

                            <Link href='/posts'>
                                {'Научно-Исследовательский Институт Энергетики и связи (НИИЭиС)'}
                            </Link>
                        </div>

                        <div className='fade-in uk-flex uk-flex-column'>
                            <p>Полезное</p>

                            <Link href='/posts'>Рекомендации по написанию научных материалов</Link>
                        </div>
                    </>
                )
            case 4:
                return (
                    <>
                        <div className='fade-in uk-flex uk-flex-column' style={{ marginTop: 10 }}>
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

    const isMain = router.asPath === '/'

    return (
        <>
            <div className={['mobile-dropdown scrollbar-none', visible ? 'is-open' : ''].join(' ')}>
                {
                    navItems.map((item, index) => {
                        if(!index) return
                        
                        return (
                            <div key={item}>
                                <div 
                                    className={
                                        [
                                            'mobile-dropdown__nav-item', 
                                            (selectedItem === index || (index === 0 && isMain)) ? 'is-active' : '',
                                            (index + 1) >= navItems.length ? 'is-last' : ''
                                        ].join(' ')
                                    }
                                    onClick={() => setSelectedItem(index === selectedItem ? 0 : index)}
                                >
                                    { item }

                                    <ArrowDownIcon />
                                </div>

                                {
                                    selectedItem === index && (
                                        <div className='mobile-dropdown__nav-links'>
                                            { 
                                                showContent() 
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        )
                    })  
                }
            </div>

            <div 
                className={['mobile-dropdown-mask', visible ? 'is-open' : ''].join(' ')} 
                onClick={() => setVisible(false)}
            />
        </>
    )
}