import style from '../page.module.css';
import Sidebar from "@/app/components/Sidebar/Sidebar";
import Header from "@/app/components/Header/Header";
import Main from "@/app/components/Main/Main";
import Converter from "@/app/components/Converter/Converter";

export default function Home() {
    return (
        <div className={style.wrapper} >
            <Sidebar />
            <div style={{width: '80%'}} >
                <Header />
                <div className={style.mainBlock} >
                    <Converter />
                </div>
            </div>
        </div>
    )
}