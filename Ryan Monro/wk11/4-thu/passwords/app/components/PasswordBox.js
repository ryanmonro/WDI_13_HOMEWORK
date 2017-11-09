import React from 'react'

export default class PasswordBox extends React.Component {
  constructor(props){
    super(props)
    this.calculateScore = this.calculateScore.bind(this)
    this.state = {
      score: 0
    }
  }

  calculateScore(event){
    let password = event.target.value
    let score = 0
    // password length 8 or more
    if (password.length >= 8) {
      score += 1
    }
    // contains a number
    if (/\d/.test(password)) {
      score += 1
    }
    // contains uppercase
    if (/[A-Z]/.test(password)) {
      score += 1
    }
    // contains lowercase
    if (/[a-z]/.test(password)) {
      score += 1
    }
    // contains non-alpha
    if (/\W/.test(password)) {
      score += 1
    }
    this.setState({ score: score })
  }

  rating(){
    let rating = '⭐'.repeat(this.state.score)
    return rating
  }

  render(){
    return (
      <div>
        <input
          onChange={ this.calculateScore } 
          type="password"/>
        <div> { this.rating() }</div>
      </div>
    )
  }
}