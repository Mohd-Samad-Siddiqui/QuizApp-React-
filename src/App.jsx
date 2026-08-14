import { useState } from "react"
import Questions from "./Components/Questions"
import Timer from "./Components/Timer"
import Result from "./Components/Result"

function App() {

  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState({
    correctAns: 0,
    incorrectAns: 0
  })

  return (
    <>
      {
        showResult ?
          (<Result score={score} />) :
          <div>
            <Timer setShowResult={setShowResult} />
            <Questions setShowResult={setShowResult} setScore={setScore} />
          </div>

      }

    </>
  )
}

export default App
