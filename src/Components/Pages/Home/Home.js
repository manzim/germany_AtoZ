import React from 'react';

import home from '../../Asset/home.jpg'

export default function Home() {
    return (
        <div className='Home'>
            <h2 style={{ textAlign: 'center', fontWeight: 700 }}>
                This is Home Page
            </h2>
            <div className='homeImage'>
                <img src={home} alt='homepage' style={{}} />
            </div>
        </div>
    )
}