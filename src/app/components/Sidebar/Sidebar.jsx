'use client'

import style from './Sidebar.module.css';
import {useEffect, useState} from "react";
import axios from "axios";

const Sidebar = () => {

    const [menu, setMenu] = useState([
        {id: 1, title: 'Main'},
        {id: 2, title: 'Convertor'},
    ]);

    return (
        <div className={style.sidebar} >
            <h1 className={style.logo} >
                Currency
            </h1>
            <div className={style.menu} >
                {
                    menu.map(item => (
                        <div key={item.id} style={{marginTop: '20px', fontWeight: 'bold'}} >
                            <p >{item.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Sidebar;