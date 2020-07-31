import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { changeInputAct } from '../Redux/Actions';
import ButtonLogin from '../Components/ButtonLogin';

class Login extends React.Component {
  render() {
    const { changeInput, shouldRedirect } = this.props;
    if (shouldRedirect) {
      return <Redirect to="/comidas" />;
    }
    return (
      <div>
        <p>Login</p>
        <label htmlFor="email">Email</label>
        <br />
        <input
          name="email"
          onChange={(event) => changeInput(event)}
          type="email"
          data-testid="email-input"
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          name="password"
          type="password"
          onChange={(event) => changeInput(event)}
          data-testid="password-input"
        />
        <br />
        <ButtonLogin />
      </div>
    );
  }
}

Login.propTypes = {
  changeInput: PropTypes.func.isRequired,
  shouldRedirect: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.reducerList,
  shouldRedirect: state.reducerList.shouldRedirect,
});

const mapDispatchToProps = (dispatch) => ({
  changeInput: (event) => dispatch(changeInputAct(event.target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
