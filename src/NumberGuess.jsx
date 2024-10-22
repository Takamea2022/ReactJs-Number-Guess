
import React, {Component} from "react"
import Result from "./Result.jsx"

class NumberGuess extends Component{

  static defaultProps = {
    secret: Math.floor(Math.random() * 20) + 1
  }

  constructor(props) {
    super(props)
    this.state = {term: ''}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <div className="min-h-screen bg-gray-800 flex item-center justify-center p-16">
        <div className="p-6 border-2 border-white rounded-lg flex flex-col w-96 text-white">
          <div className="font-semibold text-xl mb-5">
          <label htmlFor="term">
            Guess Number between 1 to 20 
          </label>
          </div>
          <input
         type="text"
         id="term"
         name="term"
         value={this.state.term}
         onChange={this.handleChange}
         className=" p-2 border border-black  rounded-lg mb-4 hover:bg-gray-300 focus:outline-none focus:bg-beige text-red-600"
         />

          <Result term={this.state.term}
           secretNum={this.props.secret} />

          </div>   
      </div>
    )
  }

}

export default NumberGuess