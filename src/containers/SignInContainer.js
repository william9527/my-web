import { connect } from 'react-redux'
import SignIn from '../components/SignIn'
import {login} from '../action/userAction'

function mapStateToProps (state, ownProps) {
  return {
    status: state.getIn(['data','status'])
  };
  
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLogin: (username, password) => {
      dispatch(login(username, password));
      //dispatch({ type: LOGIN, payload: { data: {username: username, password: password} }});

    }
  })

const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)

export default SignInContainer
