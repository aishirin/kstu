// layouts
import { MainLayout } from 'layouts/Main'
import { AdminLayout } from 'layouts/Admin'
import { useRouter } from 'next/router'

// styles
import 'styles/globals.scss'

export default ({ Component, pageProps }) => {
  const router = useRouter()

  const isAdmin = router.asPath.includes('admin')

  if(isAdmin) {
    return (
      <AdminLayout>
        <Component {...pageProps} />
      </AdminLayout>
    )
  }

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  ) 
}