import {NewsDetail} from "components/NewsPage/NewsDetail"
const NewsDetailPage = (props) => {
    console.log(props)
  
    return (
      <div>
        <NewsDetail />
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
  
  export default NewsDetailPage