'use client';

import React, {useEffect, useState} from 'react';
import style from './Main.module.css';
import axios from "axios";
import Image from "next/image";
const Main = () => {

    const currentDate = new Date();
    const year = currentDate.getFullYear().toString(); // Отримуємо дві останні цифри року
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Отримуємо номер місяця, додаючи 1, і форматуємо до двоцифрового числа
    const day = String(currentDate.getDate()).padStart(2, '0'); // Отримуємо число місяця і форматуємо до двоцифрового числа
    const formattedDate = `${year}-${month}-${day}`;

    const [rates, setRates] = useState([]);


    useEffect(() => {
        const fetchData = async() => {
            const response = await axios.get(`https://api.getgeoapi.com/v2/currency/historical/${formattedDate}?api_key=cc5083ab40333e6f4970cf959c5e1f114a5a81bd`);
            setRates(Object.values(response.data.rates).filter(item => item.currency_name === 'Polish złoty'
                || item.currency_name === 'United States dollar'
                || item.currency_name === 'Ukrainian hryvnia'
                || item.currency_name === 'Turkish lira'
                || item.currency_name === 'Japanese yen'
                || item.currency_name === 'Canadian dollar'));
        }
        fetchData();
    }, []);

    console.log(rates);

    const getImg = item => {
        if(item?.currency_name === 'Ukrainian hryvnia'){
            return 'ukraine.png';
        } else if(item?.currency_name === 'United States dollar'){
            return 'american.png';
        } else if(item?.currency_name === 'Polish złoty'){
            return 'polska.png';
        } else if(item?.currency_name === 'Turkish lira'){
            return 'turkey.png';
        } else if(item?.currency_name === 'Japanese yen'){
            return 'japan.png';
        } else if(item?.currency_name === 'Canadian dollar'){
            return 'canada.png';
        }
    }

    return (
        <div>
            <p className={style.title} >Exchange rate to the Euro</p>
            <div className={style.gridBlock} >
                {
                    rates.map(item => (
                        <div key={item?.currency_name} className={style.block} >
                            <div className={style.country} >
                                <img src={getImg(item)} />
                                <p>{item?.currency_name} </p>
                            </div>
                            <p style={{fontWeight: 'bold'}} >{item?.rate}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Main;