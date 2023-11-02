'use client'

import style from './Sidebar.module.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";
import Link from "next/link";

const Sidebar = () => {

    const [menu, setMenu] = useState([
        {id: 1, title: 'Main', link: '/'},
        {id: 2, title: 'Converter', link: '/converter'},
    ]);

    return (
        <div className={style.sidebar} >
            <h1 className={style.logo} >
                Currency
            </h1>
            <div className={style.menu} >
                {
                    menu.map(item => (
                        <Link href={item.link} key={item.id} >
                            <div style={{marginTop: '20px', fontWeight: 'bold'}} >
                                <p >{item.title}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Sidebar;