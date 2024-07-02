"use client"

import React from 'react';

const Button = () => {
    return (
        <div>
            <button onClick={() => console.log('clicked')} className='btn px-4 py-1 bg-blue-500 rounded-sm mt-4'>Click me</button>
        </div>
    );
};

export default Button;