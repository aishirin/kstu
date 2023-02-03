// components
import { Crops } from "components/Crops"

const PostsDetail = () => {
    return (
        <div className='posts-page main-container'>
            <Crops
                items={[ 
                    { name: 'Главная' }, 
                    { name: 'Объявления' },
                    { name: 'Заголовок объявления' }
                ]}
                styles={{ marginTop: 24 }}
            />

            <div className='posts-page__filters'>
                <div className='posts-page__filters__status'>
                    <span>вакансии</span>
                </div>  

                <h2>
                    Кыргызский государственный технический университет имени И. Раззакова объявляет конкурс на замещение должности директора филиала КГТУ им. И.Раззакова в г. Кара-Куль
                </h2>

                <div className='posts-page__filters__date'>
                    15:20, 01.09.2022
                </div>
            </div>

            <div className='posts-page__content'>
                <div>
                    Кыргызский Государственный Технический Университет им. И. Раззакова объявляет конкурс на должность главного специалиста отдела международных связей:
                </div>

                <div>
                    Требование:
                </div>

                <ol>
                    <li>Высшее образование</li>
                    <li>Владение кыргызским, русским и английским языками</li>
                    <li>Владение компьютером – базовые цифровые навыки</li>
                    <li>Ведение деловой переписки на кыргызском, русском и английском языках</li>
                </ol>

                <div>
                    Необходимые документы для участия в конкурсе: 
                </div>

                <ol>
                    <li>Резюме</li>
                    <li>Копия диплома</li>
                    <li>Копия паспорта</li>
                    <li>Копия трудовой книжки – если имеется</li>
                    <li>Рекомендация с прежней работы – если имеется</li>
                </ol>

                <div>
                    Документы принимаются до 01.04.2022, 15.00 часов
                </div>

                <div>
                    По адресу: г.Бишкек, пр. Ч. Айтматова 66, кабинет 1/301
                </div>

                <div>
                    Или по Е-мэйл: international@kstu.kg
                </div>

                <div>
                    Тел.: +996 312 545151;
                            +996 312 547759.
                </div>
            </div>

            <div className="posts-page__icons uk-flex uk-flex-middle">
                <img src="/media/icons/facebook-icon.svg" alt="facebook" />

                <img src="/media/icons/twitter-icon.svg" alt="facebook" />

                <img src="/media/icons/whatsap-icon.svg" alt="facebook" />

                <img src="/media/icons/telegram-icon.svg" alt="telegram-icon" />
            </div>
        </div>
    )
}

export default PostsDetail