'use client'

import React from 'react';
import style from './Header.module.css';
import {useSession, signIn, signOut} from "next-auth/react";
import Link from "next/link";

const Header = () => {

    const session = useSession();

    console.log(session);

    return (
        <div className={style.header} >
            <div className={style.input} >
                <input placeholder='Search...' />
            </div>
                {
                    session.status == 'authenticated' &&
                    <div className={style.user}  >
                        <Link href='/profile'>
                            <div style={{display: 'flex', alignItems: 'center'}} >
                                {
                                    session?.data?.user?.image
                                        ? <img src={session?.data?.user?.image} />
                                        : <div className={style.notAvatar} >
                                            <p>{session?.data?.user?.name.split(' ')[0][0]}</p>
                                        </div>
                                }
                                <p>{session?.data?.user?.name}</p>
                            </div>
                        </Link>
                    </div>
                }
                    {
                        session?.data
                            ? (<Link href='#' onClick={() => signOut({
                                callbackUrl: '/' }) } >
                                <button className={style.signButton} >Sign out</button>
                            </Link>)
                            : (<Link href='/api/auth/signin' ><button className={style.signButton} >Sign in</button></Link>)
                    }
        </div>
    );
};

export default Header;