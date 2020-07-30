import React from 'react';
import { connect } from 'react-redux';
import saveToLocalStorage from '../helpers/index';
import { redirectAct } from '../Redux/Actions';

const ButtonLogin = (props) => {
  const { email, password, shouldRedirect } = props;
  const HandleButton = () => {
    const object = {
      email: email,
    };
    saveToLocalStorage('user', object);
    saveToLocalStorage('mealsToken', 1);
    saveToLocalStorage('cocktailsToken', 1);
    shouldRedirect();
  };

  function validateEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  }

  return (
    <div>
      {validateEmail(email) && password.length > 6 ? (
        <button
          type="button"
          onClick={HandleButton}
          data-testid="login-submit-btn"
        >
          Entrar
        </button>
      ) : (
        <button type="button" disabled data-testid="login-submit-btn">
          Entrar
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state.reducerList,
});

const mapDispatchToProps = (dispatch) => ({
  shouldRedirect: () => dispatch(redirectAct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonLogin);
