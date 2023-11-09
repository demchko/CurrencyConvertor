'use client';

import React, {useState} from 'react';
import style from "@/app/components/Converter/Converter.module.css";

const ConverterBlock = ({currency, numberFrom, numberTo, setNumberFrom, setNumberTo, convertFrom, convertTo, setConvertFrom, setConvertTo}) => {

    const handleChange = () => {
        setNumberTo(numberFrom);
        setNumberFrom(numberTo);
        setConvertFrom(convertTo);
        setConvertTo(convertFrom);
    }

    return (
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
    );
};

export default ConverterBlock;