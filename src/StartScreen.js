function StartScreen({ numQuestions, dispatch }) {
    return (
        <div> 
            <h2>Welcome to the React Quiz!</h2>
            <p>{numQuestions} questions to test your React mastery</p>
            <button className="btn btn-ui" onClick={() => dispatch({ type: "start" })}>Let's start</button>
        </div>
    )
}

export default StartScreen