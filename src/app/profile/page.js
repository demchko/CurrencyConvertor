'use client';

import style from '../page.module.css';
import Sidebar from "@/app/components/Sidebar/Sidebar";
import Header from "@/app/components/Header/Header";
import {useSession} from "next-auth/react";
import React from "react";


export default function Profile() {

    const session = useSession();

    return (
        <div className={style.wrapper} >
            <Sidebar />
            <div style={{width: '80%'}} >
                <Header />
                <div>
                    <p>Profile</p>
                    <p>{session?.data?.user?.name}</p>
                    <div style={{display: 'flex', alignItems: 'center'}} >
                        {
                            session?.data?.user?.image && <img style={{width: '30%'}} src={session?.data?.user?.image} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}