import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.header} >
            <div className={style.input} >
                <input placeholder='Search...' />
            </div>
            <div className={style.user} >
                <img src='https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png' />
                <p>Artem Demchko</p>
            </div>
        </div>
    );
};

export default Header;