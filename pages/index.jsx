// import Head from 'next/head'

import { About } from 'components/MainPage/About'
import { Departments } from 'components/MainPage/Departments'
import { Intro } from 'components/MainPage/Intro'
import { Posts } from 'components/MainPage/Posts'
import { Slider } from 'components/Slider'

const MainPage = (props) => {
  console.log(props)

  const imgs = [
    'media/img-1.png',
    'media/img-2.jpeg',
    'media/img-3.jpeg',
    'media/img-4.jpeg'
  ]

  return (
    <main className='main-page'>
      <Intro />

      <Posts />

      <Departments />

      <About />

      <div className='main-container'>
        <Slider 
          imgs={imgs} 
          auto 
          style={{ marginBottom: 100 }}
        />
      </div>
    </main>
  )
}

export async function getStaticProps() {
  return {
    props: {
      data: []
    }
  }
}

export default MainPage