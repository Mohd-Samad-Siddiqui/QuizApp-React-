import React from 'react'
import { useEffect, useState } from "react"

const Timer = ({setShowResult}) => {

    const [leftTime, setLeftTime] = useState(10)
    const [displayTime, setDisplayTime] = useState('')

    useEffect(() => {

        let intervalId = setInterval(() => {
            setLeftTime(prev => {
                if (prev <= 0) {
                    clearInterval(intervalId)
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return (() => {
            clearInterval(intervalId)
        })

    }, [])

    useEffect(()=>{
        if(leftTime===0){
            setShowResult(true)
        }

        let formattedTime = `${String(Math.floor(leftTime/60)).padStart(2,'0')}:${String((leftTime%60)).padStart(2,'0')}`
        // console.log(formattedTime)

        setDisplayTime(formattedTime)

    },[leftTime])


    return (
        <div>
            Time left : {displayTime}
        </div>
    )
}

export default Timer
