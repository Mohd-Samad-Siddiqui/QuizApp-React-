
const Result = ({ score }) => {

    const finalScore =
        (score.correctAns * 4) - (score.incorrectAns * 1)

    return (
        <div>
            <h1>Result</h1>

            <h2>Correct Answers: {score.correctAns}</h2>

            <h2>Incorrect Answers: {score.incorrectAns}</h2>

            <h2>Final Score: {finalScore}</h2>
        </div>
    )
}

export default Result
