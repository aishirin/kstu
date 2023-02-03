import Link from "next/link";
import { useState, useEffect,useRef} from 'react';

export default function useWindowDimensions() {

  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}
const news = [
  {
    img: "/media/img/img-6.png",
    title: "Празднуем День знаний",
    type: "big-event",
    id: 1,
  },
  {
    img: "/media/img/img-4.png",
    title: "Стартует новая IT-программа",
    type: "event",
    id: 2,
  },
  {
    img: "/media/img/img-1.png",
    title: "Награды наших достойных",
    type: "news",
    id: 3,
  },
  {
    img: "/media/img/img-5.png",
    title: "КГТУ расширяет сотрудничество с вузами США",
    type: "news",
    id: 4,
  },
  {
    img: "/media/img/img-3.png",
    title: "Именной научный форум в КГТУ",
    type: "news",
    id: 5,
  },
  {
    img: "/media/img-2.jpeg",
    title: "Открылась выставка “Образование в России",
    type: "big-event",
    id: 6,
  },
  {
    img: "/media/img/img-6.png",
    title: "Колледж КГТУ принял участие в соревнованиях...",
    type: "big-event",
    id: 7,
  },
  {
    img: "/media/img/img-7.png",
    title: "Всемирный форум ректоров",
    type: "event",
    id: 8,
  },
  {
    img: "/media/img/img-1.png",
    title: "Награды наших достойных",
    type: "news",
    id: 9,
  },
];
export const News = () => {
 
  // useEffect(() => {
  //   // console.log('className ', ref.current.className);
  //   if (ref.current.classList.contains('big-event')) {
  //     console.log('yes');
  //   } else {
  //     console.log('no');
  //   }
  // }, [])
  const { width } = useWindowDimensions();
  return (
    <div className="news-wrapper news">
      <span>Главная</span>
          <img className="detail-wrapper__right" src="/media/icons/right.svg"></img>
          <span>Новости</span>
        <div className="news-wrapper__item">
            <h2>Новости</h2>
            <div>
                 <img src="/media/icons/filter.svg" alt="filter-icon"></img>
                  <p>Фильтр</p>
                    <img src="/media/icons/search-icon.svg" alt="search-icon"></img>
                    <p>Поиск</p>
            </div>
        </div>
        
      <div className="news-container">
        {news.map((item) => {
           const ref=useRef(null)
           
           const [check,setCheck]=useState(false)
           useEffect(() => {
           if(ref.current.classList.contains("big-event")){
             
              setCheck(false)
           }else{
             setCheck(true)
           }
           
         }, [check,width])
        
          
          return (
            <Link href="/news/detail" key={item.id}>
              <div key={item.id}>
            <div ref={ref}
              className={
                (width<=1024 ||  item.type != "big-event" )
                  ? "news-container__item"
                  : "news-container__item big-event "
              }
              

            >
              
                
              
              {check && <img src={item.img}></img>}
              <div>
                <h6>
                  {item.type == "big-event"
                    ? "Мероприятия"
                    : item.type == "event"
                    ? "События"
                    : "Новости"}
                </h6>

                <p>01.09.2022</p>
              </div>
              <h4>{item.title}</h4>
            </div>
            </div>
            </Link>
          );
        })}
        
      </div>
      <div className="main-link uk-flex uk-flex-middle width-min">
          Загрузить еще
          <img src="/media/icons/btn-down.svg" alt="arrow-icon" />
        </div>
      </div>
    
  );
};
