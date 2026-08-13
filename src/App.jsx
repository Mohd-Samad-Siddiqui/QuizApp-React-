import { useState } from "react"
import Questions from "./Components/Questions"
import Timer from "./Components/Timer"
import Result from "./Components/Result"

function App() {

  const [showResult, setShowResult] = useState(false)

  return (
    <>
      <Timer setShowResult={setShowResult}/>

      {
        showResult ? (<Result />) : <Questions setShowResult={setShowResult}/>
      }

    </>
  )
}

export default App
