// components
import { Button } from 'components/Button'
import { LogoIcon } from 'components/LogoIcon'

export const AdminSidebar = () => (
    <div className='admin-layout__sidebar'>
        <div className='admin-layout__sidebar__logo uk-flex uk-flex-middle'>
            <LogoIcon />

            <div>
                <p>Аманбаев М.</p>

                <span>Админ</span>
            </div>
        </div>

        <div className='admin-layout__sidebar__content'>
            <div className='admin-layout__sidebar__content__item uk-flex uk-flex-middle'>
                <img src='/media/admin/news.svg' />

                <p>Новости</p>
            </div>

            <div className='admin-layout__sidebar__content__item uk-flex uk-flex-middle'>
                <img src='/media/admin/posts.svg' />

                <p>Объяления</p>
            </div>

            <div className='admin-layout__sidebar__content__item uk-flex uk-flex-middle'>
                <img src='/media/admin/deps.svg' />

                <p>Кафедры</p>
            </div>

            <div className='admin-layout__sidebar__content__item uk-flex uk-flex-middle'>
                <img src='/media/admin/admins.svg' />

                <p>Администраторы</p>
            </div>
        </div>

        <div className='admin-layout__sidebar__bottom uk-flex uk-flex-center uk-flex-middle'>
            <Button>
                Выйти

                <img src='/media/admin/exit.svg' />
            </Button>
        </div>
    </div>
)