import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import CreateUserMutation from './mutations/CreateUserMutation'
import SigninUserMutation from './mutations/SigninUserMutation'


const style = {
  margin: 20,
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formValues: {},
    }
    this.updateState = this.updateState.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  updateState(event) {
    event.preventDefault();
    let formValues = this.state.formValues;
    let name = event.target.name;
    let value = event.target.value;
    formValues[name] = value;
    this.setState({formValues})
  }

  setLocalStorageDate(id, token) {
    localStorage.setItem("user_id", id)
    localStorage.setItem("user_token", token)
    console.log("successfully set local storage")
  }

  validatePassword(password) {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (re.test(password)) {
      return (true)
    } else {
      alert("You have entered an invalid password, too weak!")
      return (false)
    }
  }

  validateEmail(email) {
   if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
  }

  validateInputFields(email, password) {
    return (this.validateEmail(email) && this.validatePassword(password))
  }


  handleSubmit(event) {
    event.preventDefault();
    const {email, password} = this.state.formValues
    if (this.props.formType === "Sign up") {
      console.log("Sign up")
      if (!this.validateInputFields(email, password)) { return false }
      CreateUserMutation(email, password, ( "name", email, password, (id, token) => {this.setLocalStorageDate(id, token)}))
    } else {
      console.log("Log in")
      SigninUserMutation(email, password, (id, token) => {this.setLocalStorageDate(id, token)})
    }
  }

  render() {
    const { formType } = this.props
    return (
      <div>
        <h3>
          {formType} Here
        </h3>
         <TextField
          hintText="Enter your email here"
          floatingLabelText="Email"
          type="email"
          name="email"
          onChange={this.updateState}
        /><br />
        <TextField
          hintText={formType === "Sign up" ? "Please enter a secure password" : "Enter your password"}
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={this.updateState}
        />
       <br />
        <RaisedButton
          label={formType}
          onClick={this.handleSubmit}
        />
      </div>
    )
  }
}

class LoginWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formValues: {}
    }
  }

  render() {
    return (
      <Paper style={style}>
        <Tabs>
          <Tab label="Sign Up" >
            {<LoginForm formType="Sign up" />}
          </Tab>
          <Tab label="Login" >
            {<LoginForm formType="Log in" />}
          </Tab>
        </Tabs>
      </Paper>
    )
  }
}

export default LoginWidget