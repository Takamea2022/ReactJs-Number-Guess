import React from 'react'

const Result = ({term, secretNum}) => {
  let result;

  if(term) {
    if(secretNum > term) {
      result = 'Low, Make it Higher!'
    }
    else if(secretNum < term) {
      result = 'High, Make it Low!'
    }
    else if(secretNum == term) {
      result = 'Yippee, Correct!'
    }
    else {
      result = "Enter Valid input"
    }
  }
  return <h3>You Guessed: {result}</h3>

}

export default Result