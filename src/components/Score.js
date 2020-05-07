import React from 'react'

function Score( {name,subject,score,children} ) {
    return (
        <div className="App">
        <p>{children}</p>
        <p> Name : {name} </p>
        <p> Subject : {subject} </p>
        <p> Score : {score} </p>
        <hr/>
        </div>
    )
}

export default Score
