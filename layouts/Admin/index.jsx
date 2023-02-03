import Head from 'next/head'

// components
import { AdminSidebar } from 'components/AdminSidebar'

export const AdminLayout = ({
    children
}) => {
    return (
        <div className='admin-layout'>
            <Head>
                <title>ИИТ - Админ панель</title>
            </Head>

            <AdminSidebar />

            <div className='admin-layout__content'>
                { children }
            </div>
        </div>
    )
}