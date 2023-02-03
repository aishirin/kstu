import Link from 'next/link'
import { useState } from 'react'

// components
import { ArrowDownIcon } from 'components/ArrowDownIcon'

export const Departments = () => {
    const [index, setIndex] = useState(1)

    return (
        <div className='main-deps'>
            <div className='main-container'>
                <h3 className='text-36 uk-text-600'>Кафедры</h3>

                <div className='main-deps__grid'>
                    <div role='deps-item' className={['main-deps__grid__item', index === 1 ? 'is-open' : ''].join(' ')} onClick={() => setIndex(1)}>
                        <p className='text-24 uk-text-600'>
                            Автоматическое управление
                        </p>

                        <div className='main-deps__grid__item__desc text-12 fade-in'>Направления подготовки:</div>

                        <div className='text-12 uk-text-500 fade-in'>
                            710100 «Информатика и вычислительная техника»
                        </div>

                        <div className='text-12 uk-text-500 fade-in'>
                            590001 «Информационная безопасность»
                        </div>

                        <Link href='/news'>
                            <div className='main-link fade-in uk-margin-top uk-flex uk-flex-middle width-min'>
                                Подробнее

                                <img src='media/icons/right-arrow.svg' alt='arrow-icon' />
                            </div>
                        </Link>

                        <img src='media/deps/dep-1.svg' alt='dep-logo' />

                        <div className='main-deps__grid__item__arrow uk-flex uk-flex-middle uk-flex-center'>
                            <ArrowDownIcon />
                        </div>
                    </div>

                    <div role='deps-item' className={['main-deps__grid__item', index === 2 ? 'is-open' : ''].join(' ')} onClick={() => setIndex(2)}>
                        <p className='text-24 uk-text-600'>
                            Информатика и вычислительная техника
                        </p>

                        <div className='main-deps__grid__item__desc text-12'>Направления подготовки:</div>

                        <div className='text-12 uk-text-500'>
                            700200  «Управление в технических системах»
                        </div>

                        <div className='text-12 uk-text-500'>
                            710500 «Интернет технологии и управление»
                        </div>

                        <Link href='/news'>
                            <div className='main-link uk-margin-top uk-flex uk-flex-middle width-min'>
                                Подробнее

                                <img src='media/icons/right-arrow.svg' alt='arrow-icon' />
                            </div>
                        </Link>

                        <img src='media/deps/dep-2.svg' alt='dep-logo' />

                        <div className='main-deps__grid__item__arrow uk-flex uk-flex-middle uk-flex-center'>
                            <ArrowDownIcon />
                        </div>
                    </div>

                    <div role='deps-item' className={['main-deps__grid__item', index === 3 ? 'is-open' : ''].join(' ')} onClick={() => setIndex(3)}>
                        <p className='text-24 uk-text-600'>
                            Компьютерная лингвистика
                        </p>

                        <div className='main-deps__grid__item__desc text-12'>Направления подготовки:</div>

                        <div className='text-12 uk-text-500'>
                            531200 «Компьютерная лингвистика»
                        </div>

                        <Link href='/news'>
                            <div className='main-link uk-margin-top uk-flex uk-flex-middle width-min'>
                                Подробнее

                                <img src='media/icons/right-arrow.svg' alt='arrow-icon' />
                            </div>
                        </Link>

                        <img src='media/deps/dep-3.svg' alt='dep-logo' />

                        <div className='main-deps__grid__item__arrow uk-flex uk-flex-middle uk-flex-center'>
                            <ArrowDownIcon />
                        </div>
                    </div>

                    <div role='deps-item' className={['main-deps__grid__item', index === 4 ? 'is-open' : ''].join(' ')} onClick={() => setIndex(4)}>
                        <p className='text-24 uk-text-600'>
                            Программное обеспечение компьютерных систем
                        </p>

                        <div className='main-deps__grid__item__desc text-12'>Направления подготовки:</div>

                        <div className='text-12 uk-text-500'>
                            710400 «Программная инженерия»
                        </div>

                        <div className='text-12 uk-text-500'>
                            590100 «Информационная безопасность»
                        </div>

                        <Link href='/news'>
                            <div className='main-link uk-margin-top uk-flex uk-flex-middle width-min'>
                                Подробнее

                                <img src='media/icons/right-arrow.svg' alt='arrow-icon' />
                            </div>
                        </Link>

                        <img src='media/deps/dep-4.svg' alt='dep-logo' />

                        <div className='main-deps__grid__item__arrow uk-flex uk-flex-middle uk-flex-center'>
                            <ArrowDownIcon />
                        </div>
                    </div>

                    <div role='deps-item' className={['main-deps__grid__item', index === 5 ? 'is-open' : ''].join(' ')} onClick={() => setIndex(5)}>
                        <p className='text-24 uk-text-600'>
                            Обеспечение безопасности информационных систем
                        </p>

                        <div className='main-deps__grid__item__desc text-12'>Направления подготовки:</div>

                        <div className='text-12 uk-text-500'>
                            590100 «Информационная безопасность»
                        </div>

                        <div className='text-12 uk-text-500'>
                            590101 «Информатика в здравоохранении и биомедицинская инженерия»
                        </div>

                        <Link href='/news'>
                            <div className='main-link uk-margin-top uk-flex uk-flex-middle width-min'>
                                Подробнее

                                <img src='media/icons/right-arrow.svg' alt='arrow-icon' />
                            </div>
                        </Link>

                        <img src='media/deps/dep-5.svg' alt='dep-logo' />

                        <div className='main-deps__grid__item__arrow uk-flex uk-flex-middle uk-flex-center'>
                            <ArrowDownIcon />
                        </div>
                    </div>

                    <div role='deps-item' className={['main-deps__grid__item', index === 6 ? 'is-open' : ''].join(' ')} onClick={() => setIndex(6)}>
                        <p className='text-24 uk-text-600'>
                            Прикладная математика и информатика
                        </p>

                        <div className='main-deps__grid__item__desc text-12'>Направления подготовки:</div>

                        <div className='text-12 uk-text-500'>
                            510200 «Прикладная математика и информатика»
                        </div>

                        <div className='text-12 uk-text-500'>
                            580500 «Бизнес-информатика»
                        </div>

                        <Link href='/news'>
                            <div className='main-link uk-margin-top uk-flex uk-flex-middle width-min'>
                                Подробнее

                                <img src='media/icons/right-arrow.svg' alt='arrow-icon' />
                            </div>
                        </Link>

                        <img src='media/deps/dep-6.svg' alt='dep-logo' />

                        <div className='main-deps__grid__item__arrow uk-flex uk-flex-middle uk-flex-center'>
                            <ArrowDownIcon />
                        </div>
                    </div>

                    <div role='deps-item' className={['main-deps__grid__item', index === 7 ? 'is-open' : ''].join(' ')} onClick={() => setIndex(7)}>
                        <p className='text-24 uk-text-600'>
                            Прикладная информатика
                        </p>

                        <div className='main-deps__grid__item__desc text-12'>Направления подготовки:</div>

                        <div className='text-12 uk-text-500'>
                            710300 «Прикладная информатика» (по областям)
                        </div>

                        <div className='text-12 uk-text-500'>
                            710400 «Программная инженерия»
                        </div>

                        <Link href='/news'>
                            <div className='main-link uk-margin-top uk-flex uk-flex-middle width-min'>
                                Подробнее

                                <img src='media/icons/right-arrow.svg' alt='arrow-icon' />
                            </div>
                        </Link>

                        <img src='media/deps/dep-7.svg' alt='dep-logo' />

                        <div className='main-deps__grid__item__arrow uk-flex uk-flex-middle uk-flex-center'>
                            <ArrowDownIcon />
                        </div>
                    </div>

                    <div role='deps-item' className={['main-deps__grid__item', index === 8 ? 'is-open' : ''].join(' ')} onClick={() => setIndex(8)}>
                        <p className='text-24 uk-text-600'>
                            Инженерная и компьютерная графика
                        </p>

                        <div className='main-deps__grid__item__desc text-12'>Направления подготовки:</div>

                        <div className='text-12 uk-text-500'>
                            Охватывает студентов всех специальностей инженерного направления
                        </div>

                        <Link href='/news'>
                            <div className='main-link uk-margin-top uk-flex uk-flex-middle width-min'>
                                Подробнее

                                <img src='media/icons/right-arrow.svg' alt='arrow-icon' />
                            </div>
                        </Link>

                        <img src='media/deps/dep-8.svg' alt='dep-logo' />

                        <div className='main-deps__grid__item__arrow uk-flex uk-flex-middle uk-flex-center'>
                            <ArrowDownIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}