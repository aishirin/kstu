// import Head from 'next/head'
import {News} from "../../components/NewsPage/News"

const NewsPage = (props) => {
  console.log(props)

  return (
    <div>
      <News />
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      data: []
    }
  }
}
  
export default NewsPage