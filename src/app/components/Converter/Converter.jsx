'use client'

import React, {useEffect, useState} from 'react';
import style from './Converter.module.css';
import axios from "axios";

const Converter = () => {

    const [currency, setCurrency] = useState([]);
    const [convertFrom, setConvertFrom] = useState('');
    const [numberFrom, setNumberFrom] = useState(0);
    const [numberTo, setNumberTo] = useState(0);
    const [convertTo, setConvertTo] = useState('');

    const handleChange = () => {
        setNumberTo(numberFrom);
        setNumberFrom(numberTo);
        setConvertFrom(convertTo);
        setConvertTo(convertFrom);
    }

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
        <div>
            <p className={style.title} >Converter</p>
            <div className={style.converter} >
                <div className={style.block} >
                    <select value={convertFrom} onChange={e => setConvertFrom(e.target.value)} >
                        {
                            currency.map(item => (
                                <option key={item.key} >{item.key}: {item.value}</option>
                            ))
                        }
                    </select>
                    <input value={numberFrom} onChange={e => setNumberFrom(e.target.value)} placeholder='type amount..' type='number' className={style.inputAmount} />
                </div>
                <div style={{cursor: 'pointer'}} className={style.arrows} onClick={() => handleChange()} >
                    <p>↑</p>
                    <p style={{marginLeft: '-5px'}} >↓</p>
                </div>
                <div className={style.block} >
                    <select value={convertTo} onChange={e => setConvertTo(e.target.value)}  >
                        {
                            currency.map(item => (
                                <option key={item.key} >{item.key}: {item.value}</option>
                            ))
                        }
                    </select>
                    <input disabled={true} value={
                        numberFrom
                        ? numberTo
                        : 0
                    } onChange={e => setNumberTo(e.target.value)} placeholder='type amount..' type='number' className={style.inputAmount} />
                </div>
            </div>
        </div>
    );
};

export default Converter;