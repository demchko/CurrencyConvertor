import style from '../page.module.css';
import Sidebar from "@/app/components/Sidebar/Sidebar";
import Header from "@/app/components/Header/Header";
import Main from "@/app/components/Main/Main";
import Converter from "@/app/components/Converter/Converter";
import {getServerSession} from "next-auth/next";
import {authConfig} from "../../../configs/auth";

export default async function Profile() {

    const session = await getServerSession(authConfig);

    console.log(session);

    return (
        <div className={style.wrapper} >
            <Sidebar />
            <div style={{width: '80%'}} >
                <Header />
                <div className={style.mainBlock} >
                    <p>Profile {session?.user?.name}</p>
                </div>
            </div>
        </div>
    )
}