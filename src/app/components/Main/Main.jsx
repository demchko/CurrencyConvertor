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

    const [news, setNews] = useState([
        {id: 1, title: "The British pound is showing resilience ahead of the Bank of England's (BoE) Monetary Policy Committee (MPC) November interest rate decision...", link: 'https://www.investing.com/news/forex-news/british-pound-stands-firm-ahead-of-boes-november-interest-rate-decision-93CH-3217613'},
        {id: 2, title: "By Harry Robertson and Gertrude Chavez-Dreyfuss LONDON/NEW YORK (Reuters) - The struggling yen rose from a one-year low against the U.S. dollar...", link: 'https://www.investing.com/news/economy/yen-languishes-as-focus-turns-to-fed-3216126'},
    ])


    useEffect(() => {
        const fetchData = async() => {
            const response = await axios.get(`https://api.getgeoapi.com/v2/currency/historical/${formattedDate}?api_key=cc5083ab40333e6f4970cf959c5e1f114a5a81bd`);
            console.log(response);
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
        <div className={style.container} >
           <div className={style.exchangeBlock} >
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
           <div className={style.currencyBlock} >
               <p className={style.title} >News</p>
               <div className={style.currencyNews} >
                   {
                       news.map(item => (
                           <div key={item?.id} style={{marginBottom: '10px', padding: '5px', cursor: 'pointer'}} >
                               <p>{item.title}</p>
                               <hr />
                           </div>
                       ))
                   }
               </div>
           </div>
        </div>
    );
};

export default Main;