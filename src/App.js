import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import Signin from './components/SignIn';
import Dashboard from './components/dashboard/Dashboard';

import { connect } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import { blue, indigo } from '@material-ui/core/colors'
import SignInContainer from './containers/SignInContainer'
import { Component } from 'react'
import theme from './theme';

import {
  BrowserRouter as Router,
  Redirect,
  Route, matchPath
} from 'react-router-dom'



function mapStateToProps (state, ownProps) {
  return {
      status: state.getIn(['data','status'])
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  
})


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    props.status === 'login'
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />
  )} />
)



class AppComponent extends Component  {

  render(){
      return (         
        <div>
        <ThemeProvider theme={theme}>
          <Router>

                <Route exact path="/"  component={this.props.status==='login'?Dashboard:SignInContainer} />

        </Router>
        </ThemeProvider>
      </div>
           
      );
  }
}

const App = connect(
mapStateToProps,
mapDispatchToProps
)(AppComponent)

export default App;
