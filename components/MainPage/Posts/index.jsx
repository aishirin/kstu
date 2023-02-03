import Link from 'next/link'

const news = [
    { img: 'media/img/img-1.png', title: 'Празднуем День знаний', type: 'event', id: 1 },
    { img: 'media/img/img-2.png', title: 'Стартует новая IT-программа', type: 'event', id: 2 },
    { img: 'media/img/img-3.png', title: 'Награды наших достойных', type: 'news', id: 3 },
    { img: 'media/img/img-4.png', title: 'КГТУ расширяет сотрудничество с вузами США', type: 'news', id: 4 },
    { img: 'media/img/img-5.png', title: 'Именной научный форум в КГТУ', type: 'news', id: 5 },
    { img: 'media/img/img-6.png', title: 'Обмен опытом с ОшГУ', type: 'event', id: 6 }
]

const posts = [
    { type: 'event', title: 'Начало 2022-2023 учебного года - 1 сентября. Ориентационная неделя для студентов первого курса с 22 августа по 26 августа.', id: 1 },
    { type: 'event', title: 'Кыргызский государственный технический университет имени И.Раззакова объявляет конкурс на замещение должности директора филиала КГТУ им. И.Раззакова в г. Кара-Куль.', id: 2 },
    { type: 'event', title: 'II-Бишкекского форума по логистике, который пройдет 1 июля 2022 г в 8:30, в конференц-зале КГТУ', id: 3 },
]

export const Posts = () => (
    <div className='main-posts'>
        <div className='main-container'>
            <div className='main-posts__grid'>
                <div>
                    <h3 className='uk-heading-line uk-text-600 text-24 uk-margin-medium-bottom'><span>Новости</span></h3>

                    <div className='main-posts__news-grid' style={{ marginBottom: 30 }}>
                        {
                            news.map((item) => (
                                <Link key={item.id} href='/news/detail'>
                                    <div className='main-posts__news-grid__item' key={item.id}>
                                        <img src={item.img} alt='event-img' />

                                        <div className='uk-flex uk-flex-middle uk-margin-top uk-margin-small-bottom'>
                                            <div className='main-posts__news-grid__item__status'>
                                                {
                                                    item.type === 'event' ? (
                                                        'события'
                                                    )
                                                    : (
                                                        'новости'
                                                    )
                                                }
                                            </div>

                                            <span>01.09.2022</span>
                                        </div>

                                        <p className='text-16'>
                                            { item.title }
                                        </p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>

                    <Link href='/news'>
                        <div className='main-link uk-flex uk-flex-middle width-min'>
                            Все новости

                            <img src='media/icons/right-arrow.svg' alt='arrow-icon' />
                        </div>
                    </Link>
                </div>

                <div>
                    <h3 className='uk-heading-line uk-text-600 uk-margin-medium-bottom text-24'><span>Объявления</span></h3>

                    <div style={{ marginBottom: 30 }}>
                        {
                            posts.map((post) => (
                                <Link key={post.id} href='/posts/detail'>
                                    <div className='main-posts__list-item' key={post.id}>
                                        <p className='text-14'>
                                            { post.title }
                                        </p>

                                        <div className='uk-flex uk-flex-middle uk-margin-top uk-margin-bottom'>
                                            <div className='main-posts__news-grid__item__status'>
                                                {
                                                    post.type === 'event' ? (
                                                        'события'
                                                    )
                                                    : (
                                                        'вакансии'
                                                    )
                                                }
                                            </div>

                                            <span>01.09.2022</span>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>

                    <Link href='/posts'>
                        <div className='main-link uk-flex uk-flex-middle width-min'>
                            Все объявления

                            <img src='media/icons/right-arrow.svg' alt='arrow-icon' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)