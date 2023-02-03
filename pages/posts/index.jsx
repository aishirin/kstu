import { useRouter } from "next/router"

// components
import { Crops } from "components/Crops"

const PostsPage = ({ data }) => {
    const router = useRouter()

    return (
        <main className='posts-page main-container'>
            <Crops 
                items={[ 
                    { name: 'Главная' }, 
                    { name: 'Объявления' } 
                ]}
                styles={{ marginTop: 24 }}
            />

            <div className='posts-page__filters uk-flex uk-flex-middle uk-flex-between'>
                <h2>Объявления</h2>

                <div className='uk-flex'>
                    <div className='posts-page__filters__btn uk-flex'>
                        <img src="/media/icons/filter.svg" alt="filter-icon" />

                        <p className='posts-page__mobile-none'>Фильтр</p>
                    </div>

                    <div className='posts-page__filters__btn uk-flex'>
                        <img src="/media/icons/search-icon.svg" alt="search-icon" />

                        <p className='posts-page__mobile-none'>Поиск</p>
                    </div>
                </div>
            </div>

            <div className='posts-page__list'>
                {
                    data.map((item) => (
                        <div 
                            className='posts-page__list__item' 
                            key={item.id}
                            onClick={() => router.push('/posts/detail')}
                        >
                            <p>{ item.text }</p>

                            <div className='uk-flex uk-flex-middle'>
                                <div className='posts-page__list__item__status'>
                                    <span>{ item.type }</span>
                                </div>

                                <div className='posts-page__list__item__date'>
                                    01.09.2022
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="main-link uk-flex uk-flex-middle width-min">
                Загрузить еще

                <img src="media/icons/btn-down.svg" alt="arrow-icon" />
            </div>
        </main>
    )
}
  
export async function getStaticProps() {
    return {
        props: {
            data: [
                { id: 1, text: 'Начало 2022-2023 учебного года - 1 сентября. Ориентационная неделя для студентов первого курса с 22 августа по 26 августа.', type: 'события' },
                { id: 2, text: 'Кыргызский государственный технический университет имени И.Раззакова объявляет конкурс на замещение должности директора филиала КГТУ им. И.Раззакова в г. Кара-Куль.', type: 'события' },
                { id: 3, text: 'II-Бишкекского форума по логистике, который пройдет 1 июля 2022 г в 8:30, в конференц-зале КГТУ', type: 'события' },
                { id: 4, text: 'Начало 2022-2023 учебного года - 1 сентября. Ориентационная неделя для студентов первого курса с 22 августа по 26 августа.', type: 'события' },
                { id: 5, text: 'Кыргызский государственный технический университет имени И.Раззакова объявляет конкурс на замещение должности директора филиала КГТУ им. И.Раззакова в г. Кара-Куль.', type: 'события' },
                { id: 6, text: 'II-Бишкекского форума по логистике, который пройдет 1 июля 2022 г в 8:30, в конференц-зале КГТУ', type: 'события' },
                { id: 7, text: 'Начало 2022-2023 учебного года - 1 сентября. Ориентационная неделя для студентов первого курса с 22 августа по 26 августа.', type: 'события' }
            ]
        }
    }
}
  
export default PostsPage