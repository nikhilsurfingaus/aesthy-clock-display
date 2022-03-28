import React from 'react'
import {useState, useEffect} from 'react'
import './time.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faClock} from "@fortawesome/free-regular-svg-icons"
import Switch from '@mui/material/Switch';

function Clock() {
    const [time, setTime] = useState('')

    function formatTime(val) {
        if(val < 10) {
            return '0'
        } else {
            return ''
        }
    }

    useEffect(() => {
        const timerID = setInterval(
        () => tick(), 1000)

        return function cleanup() {
            clearInterval(timerID)
        }
    })

    function tick() {
        const d = new Date();
        const h = d.getHours();
        const m = d.getMinutes();

        setTime(formatTime(h) + h + ':' + formatTime(m) + m);
    }
    
    const [textColor, setTextColor] = useState('white');
    const [isBlack, setIsBlack] = useState(false);
    
    const handleChnageTextColor = (e) => {
      setIsBlack(!isBlack);
      setTextColor(isBlack ? 'white' : 'black ');
    }
    
    const stile = {
        color: textColor
    }
    
    return (
        <>
            <div className="mod">
                <Switch color='default' onChange={handleChnageTextColor}/>
            </div>
            <div className='time'>
                <h1 style={stile}>{time}</h1>
                <h2 style={stile}><FontAwesomeIcon icon={faClock} style={stile} className="fa"/>Based on you local time zone</h2>
            </div>
            <div className='logo'>
                <h3 style={stile}>Aesthy Time Display</h3>
            </div>
        </>
  )
}

export default Clock