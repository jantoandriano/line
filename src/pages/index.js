import Head from "next/head";
import style from "../styles/Home.module.css"
import Header from '../components/Header.js'
import Carousel from "../components/Carousel.js"
import TopNews from "../components/TopNews.js"
import Foryou from "../components/Foryou"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={style.main}>
        <div className={style.wrapper}>
          <Header />
          <Carousel />
          <TopNews/>
          <Foryou/>
          <Foryou/>
        </div>     
      </div>
    </div>
  );
}
