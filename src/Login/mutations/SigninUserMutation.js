import {
  commitMutation,
  graphql
} from 'react-relay'
import environment from '../../Environment'

const mutation = graphql `
  mutation SigninUserMutation($signinUserInput: SigninUserInput!) {
    signinUser(input: $signinUserInput){
      token
      user {
        id
      }
    }
  }
`

export default (email, password, callback) => {
  const variables = {
    signinUserInput: {
      email: {
        email,
        password
      },
      clientMutationId: ""
    }
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
        console.log(response)
        const id = response.signinUser.user.id
        const token = response.signinUser.token
        callback(id, token)
      },
      onError: err => console.log(
        alert("Sorry can't find your user, please try again")
        )
    })
}