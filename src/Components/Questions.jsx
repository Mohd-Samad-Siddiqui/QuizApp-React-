import { useState } from 'react'
import QuestionBank from '../data/Questions.json'


const Questions = ({setShowResult}) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const [score, setScore] = useState(0)

    function handleOptionClicked(selectedOption){
        console.log(selectedOption)
        
        if(selectedOption === QuestionBank[currentIndex].answer){
            setScore(prev=>prev+1)
        }

        if(currentIndex < QuestionBank.length-1){
            setCurrentIndex(prev=>prev+1)
        }else{
            setShowResult(true)
        }
    }

  return (
    
      <div className='flex flex-col gap-3'>
        <h2>Q{currentIndex+1}. {QuestionBank[currentIndex].question}</h2>
        
        {
            QuestionBank[currentIndex].options.map(function(option, index){
                return(
                    <button key={index} onClick={()=>{handleOptionClicked(option)}} className='bg-gray-800 w-60 m-auto p-2 text-amber-50 rounded-4xl cursor-pointer'>
                         {option}
                    </button>
                )
            })
        }
        
      </div>
    
  )
}

export default Questions
