import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import theme from '../theme';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = {
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  progress: {
    margin: theme.spacing(2),
  },
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  onUpdateUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  onUpdatePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onSubmit = (e) => {
    this.setState({ status: 'waiting' });
    this.props.onLogin(this.state.username, this.state.password);
  }

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            {(this.props.status === "login_failed") ? <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              onChange={this.onUpdateUsername}
              autoFocus
              error
            />
              :
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                onChange={this.onUpdateUsername}
                autoFocus
              />
            }
            {(this.props.status === "login_failed") ?
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={this.onUpdatePassword}
                autoComplete="current-password"
                error
                helperText='Login Failed'
              /> :
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={this.onUpdatePassword}
                autoComplete="current-password"
              />
            }

            {(this.props.status === 'waiting') &&
              <div style={{ textAlign: 'center' }}><CircularProgress className={classes.progress}/></div>
            }

            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.onSubmit}
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>

      </Container>
    );
  }

}

export default withStyles(useStyles)(SignIn);
