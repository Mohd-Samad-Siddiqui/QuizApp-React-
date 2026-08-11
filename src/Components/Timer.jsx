import React from 'react'
import { useEffect, useState } from "react"

const Timer = () => {

    const [leftTime, setLeftTime] = useState(20)

    useEffect(() => {

        const interValid = setInterval(() => {
            setLeftTime(prev => {
                if (prev <= 0) {
                    return 0
                }
                return prev-1
            })

            return(()=>{
                clearInterval(interValid)
            })

        }, 1000)

    }, [])

    // useEffect(()=>{

    //     console.log(object)

    // },[leftTime])


    return (
        <div>
            Time left : {leftTime}
        </div>
    )
}

export default Timer
