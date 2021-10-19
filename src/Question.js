import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'; // import react-icons

const Questions = ({ title, info }) => {
    return (
        <article className='question'>
            <header>
                <h4>{title}</h4>
                <button className='btn'><AiOutlinePlus /></button>
            </header>
            <p>{info}</p>
        </article>
    );
};

export default Questions;