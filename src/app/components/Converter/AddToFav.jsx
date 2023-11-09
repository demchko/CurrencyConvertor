'use client'

import React, {useState} from 'react';
import style from './Converter.module.css';
import {Multiselect} from "multiselect-react-dropdown";
const AddToFav = ({currency}) => {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <Multiselect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name"
                         placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
        </div>
    );
};

export default AddToFav;