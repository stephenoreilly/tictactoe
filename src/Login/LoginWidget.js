import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';


const style = {
  margin: 20,
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
};


function LoginForm(formType) {
  return (
    <div>
      <h3>
        {formType} Here
      </h3>
      <TextField
      hintText={formType == "Sign In" ? "Please enter a secure password" : "Enter your password"}
      floatingLabelText="Password"
      type="password"
      /><br />
      <TextField
      hintText="Enter your email here"
      floatingLabelText="Email"
      type="email"
      /><br />
      <RaisedButton label={formType} />
    </div>
  )
}

class LoginWidget extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Paper style={style}>
        <Tabs>
          <Tab label="Sign In" >
            {LoginForm("Sign In")}
          </Tab>
          <Tab label="Login" >
            {LoginForm("Log In")}
          </Tab>
        </Tabs>
      </Paper>
    )
  }
}

export default LoginWidget