import React from 'react'
import i404 from '../assets/404.png'
import { useNavigate } from "react-router-dom"

const Error404 = () => {
    const navigation = useNavigate()
    return (
        <div style={{ height: '70vh', width: '100%', gap: '15px' }} className='d-flex justify-content-center align-items-center flex-column'>
            <img src={i404} alt='404 Error' style={{ height: '400px', width: '600px' }} />
            <div>
                <button className='ask_button py-2' onClick={() => { navigation('/') }}>Home</button>
            </div>
        </div>
    )
}

export default Error404