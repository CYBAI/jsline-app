import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/user';

import { Grid, Row, Col } from 'react-flexgrid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './Login.css';
import LogoImg from '../components/Logo';
import Loading from '../components/Loading';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { isAuthenticated } = nextProps;
    if (isAuthenticated) {
      this.context.router.push('/');
    }
  }

  handleLogin(event) {
    event.preventDefault();
    const username = this.refs.username.getValue().trim();
    const password = this.refs.password.getValue().trim();
    const authToken = this.props.authToken || localStorage.getItem('authToken');
    const certificate = this.props.certificate || localStorage.getItem('certificate');
    this.props.loginUser({
      id: username,
      password,
      authToken,
      certificate
    });
  }

  render() {
    const { errorMessage } = this.props;

    return (
      <Grid className="login">
        <Row>
          <Col xs={8} sm={8} md={8} lg={8}>
            <LogoImg />
          </Col>
          <Col xs={4} sm={4} md={4} lg={4}>
            <form onSubmit={this.handleLogin}>
              <TextField
                ref="username"
                hintText="Email"
                floatingLabelText="Email"
                type="email"
                errorText={errorMessage}
              />
              <br />
              <TextField
                ref="password"
                hintText="Password"
                floatingLabelText="Password"
                type="password"
                errorText={errorMessage}
              />
              <br />
              <RaisedButton
                label="Login"
                type="submit"
              />
            </form>
          </Col>
        </Row>
        {
          this.props.isFetching ?
            <Loading
              percentage={100}
            /> : null
        }
      </Grid>
    );
  }
}

Login.propTypes = {
  authToken: PropTypes.string,
  certificate: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  loginUser: PropTypes.func.isRequired
};

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const { user } = state;
  const {
    authToken, certificate,
    isAuthenticated, isFetching,
    errorMessage
  } = user;

  return {
    authToken,
    certificate,
    isAuthenticated,
    isFetching,
    errorMessage
  };
}

export default connect(mapStateToProps, {
  loginUser
})(Login);
