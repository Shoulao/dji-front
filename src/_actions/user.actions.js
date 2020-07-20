import { userTypes } from "src/_constants";
import { alertActions } from "./alert.actions";
import { userService } from "src/_services";
import { history } from "../_helpers/history";
import * as types from "../_constans/user.const";

const login = ({ username, password }) => {
  const request = user => ({ type: types.LOGIN_REQUEST, user });
  const success = user => ({ type: types.LOGIN_SUCCESS, user });
  const failure = error => ({ type: types.LOGIN_FAILURE, error });

  return dispatch => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      user => {
        dispatch(success(user));
        history.push("/");
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
};

const logout = () => {
  userService.logout();
  return { type: userTypes.LOGOUT };
};

const register = user => {
  const request = user => ({ type: types.REGISTER_REQUEST, user });
  const success = user => ({ type: types.REGISTER_SUCCESS, user });
  const failure = error => ({ type: types.REGISTER_FAILURE, error });

  return dispatch => {
    dispatch(request(user));

    userService.register(user).then(
      user => {
        dispatch(success(user)); // do sprawdzanie czy argument ma być przeslany
        history.push("/login");
        dispatch(alertActions.success("Registration successful"));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
};

export const userActions = {
  login,
  logout,
  register,
};
