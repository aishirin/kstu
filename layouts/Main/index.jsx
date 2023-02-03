import Head from 'next/head'

// components
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'

export const MainLayout = ({
    children
}) => {
    return (
        <div className='main-layout'>
            <Head>
                <title>ИИТ при КГТУ им. И. Раззакова</title>
            </Head>

            <Header />

            { children }

            <Footer />
        </div>
    )
}