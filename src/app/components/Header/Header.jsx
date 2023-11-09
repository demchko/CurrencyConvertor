'use client'

import React from 'react';
import style from './Header.module.css';
import {useSession} from "next-auth/react";

const Header = () => {

    const session = useSession();


    return (
        <div className={style.header} >
            <div className={style.input} >
                <input placeholder='Search...' />
            </div>
            {
                session.status == 'authenticated' &&
                <div className={style.user} >
                    {
                        session?.data?.user?.image
                        ? <img src={session?.data?.user?.image} />
                        : <div className={style.notAvatar} >
                            <p>{session?.data?.user?.name.split(' ')[0][0]}</p>
                        </div>
                    }
                    <p>{session?.data?.user?.name}</p>
                </div>
            }
        </div>
    );
};

export default Header;