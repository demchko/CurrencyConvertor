'use client'

import React from 'react';
import style from './Header.module.css';
import {useSession, signIn, signOut} from "next-auth/react";
import Link from "next/link";

const Header = () => {

    const session = useSession();


    return (
        <div className={style.header} >
            <div className={style.input} >
                <input placeholder='Search...' />
            </div>
            {
                session.status == 'authenticated' &&
                <div className={style.user}  >
                    <Link href='/profile'>
                        {
                            session?.data?.user?.image
                                ? <img src={session?.data?.user?.image} />
                                : <div className={style.notAvatar} >
                                    <p>{session?.data?.user?.name.split(' ')[0][0]}</p>
                                </div>
                        }
                        <p>{session?.data?.user?.name}</p>
                    </Link>
                </div>
            }
            {
                session?.data
                    ? (<Link href='#' onClick={() => signOut({
                        callbackUrl: '/' }) } >
                        Sign out
                    </Link>)
                    : (<Link href='/api/auth/signin' >Sign in</Link>)
            }
        </div>
    );
};

export default Header;