import style from './page.module.css';
import Sidebar from "@/app/components/Sidebar/Sidebar";
import Header from "@/app/components/Header/Header";

export default function Home() {
  return (
      <div className={style.wrapper} >
          <Sidebar />
          <div style={{width: '80%'}} >
              <Header />
              <div className={style.mainBlock} >
                  sdflksdf
              </div>
          </div>
      </div>
  )
}