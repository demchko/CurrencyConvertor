'use client'

import React, {useEffect, useState} from 'react';
import style from './Converter.module.css';
import axios from "axios";
import ConverterBlock from "@/app/components/Converter/ConverterBlock";
import AddToFav from "@/app/components/Converter/AddToFav";

const Converter = () => {

    const [currency, setCurrency] = useState([]);
    const [numberFrom, setNumberFrom] = useState(0);
    const [numberTo, setNumberTo] = useState(0);
    const [convertFrom, setConvertFrom] = useState('');
    const [convertTo, setConvertTo] = useState('');

    useEffect(() => {
        const fetchData = async() => {
            const response = await axios.get(`https://api.getgeoapi.com/v2/currency/list?api_key=cc5083ab40333e6f4970cf959c5e1f114a5a81bd`);
            const currencyArray = Object.keys(response?.data?.currencies).map((key) => ({
                key: key,
                value: response?.data?.currencies[key]
            }));
            setCurrency(currencyArray);
        }
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async() => {
            if(numberFrom > 0){
                const response = await axios.get(`https://api.getgeoapi.com/v2/currency/convert?api_key=cc5083ab40333e6f4970cf959c5e1f114a5a81bd&from=${convertFrom.substring(0, convertFrom.indexOf(":"))}&to=${convertTo.substring(0, convertTo.indexOf(":"))}&amount=${numberFrom}`);
                setNumberTo(Object.values(response.data.rates)[0].rate_for_amount);
            }
        }
        fetchData();
    }, [numberFrom])

    return (
        <div className={style.main} >
            <div className={style.converterBlock} >
                <p className={style.title} >Converter</p>
                <ConverterBlock currency={currency} numberFrom={numberFrom}
                                numberTo={numberTo} setNumberFrom={setNumberFrom}
                                setNumberTo={setNumberTo} convertTo={convertTo}
                                convertFrom={convertFrom} setConvertFrom={setConvertFrom}
                                setConvertTo={setConvertTo}
                />
            </div>
            <div className={style.addToFavBlock} >
                <p className={style.title} >Add Currency To Fav</p>
                <AddToFav currency={currency} />
            </div>
        </div>
    );
};

export default Converter;