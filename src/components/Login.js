import React, { Component } from "react"
import axios from "axios"
import { connect } from "react-redux"
import { updateAge } from "../redux/reducer"

import("./login.css")

class Login extends Component {
  constructor() {
    super()
    this.state = {
      agechangetext: "",
      user: {}
    }
  }

  getUser() {
    axios
      .get("/api/login")
      .then(response => this.setState({user: response.data}))
  }

  updateAge(age) {
    axios
      .put("/api/setage", {
        age
      })
      .then(response => this.setState({ user: response.data }))
  }

  logoutUser() {
    axios.put("/api/logout").then(response => {
      console.log(response)
      // console.log(response.data)
    })
  }

  //////// Typing handlers:

  ageText(text) {
    this.setState({ agechangetext: parseInt(text, 10) })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <button onClick={() => this.getUser()} className="buttons">
          LOG IN
        </button>
        {this.state.user.firstName ? <h2>Logged in...</h2> : null}
        <p>User first name: {this.state.user.firstName}</p>
        <p>User last name: {this.state.user.lastName}</p>
        <p>User email: {this.state.user.email}</p>
        <p>User's Age: {this.state.user.age}</p>
        <p>User's City: {this.state.user.city}</p>
        <h2> </h2>
        <input
          placeholder="Add some years to the user's age"
          onChange={e => this.ageText(e.target.value)}
        />
        <button onClick={() => this.updateAge(this.state.agechangetext)}>
          Set that age!
        </button>
        <br />
        <button onClick={() => this.logoutUser()} className="buttons">
          {" "}
          LOG ME OUT{" "}
        </button>
        <button onClick={()=> this.thatMethodIdea()}>Go</button>
      </div>
    )
  }
}
const mapStateToProps = state => state // do this to pass the state of the parent component down as props. Mapping that state into props.
export default connect(mapStateToProps, { updateAge })(Login)
