function Options({question, answer}) {
    const hasAnswered = answer != null;
    return (
        <div>
            
            <div className="options">{question.options.map((option, index) => (
                <button className={`btn btn-option ${index === answer ? 'answer' : ''} ${hasAnswered ? index === question.correctOption ? "correct" : "wrong" : ""}`} 
                key={option} 
                disabled={hasAnswered}
                onClick={() => dispatchEvent({type: 'newAnswer', payload: index})}>
                    {option}
                </button>
            ))}
            </div>
        </div>
    )
}

export default Options