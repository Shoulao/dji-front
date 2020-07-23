import { alertActions } from "./alert.actions";
import { userService } from "../_services/user.service";
import { history } from "../_helpers/history";
import * as types from "../_constans/user.const";

const login = data => {
  const request = user => ({ type: types.LOGIN_REQUEST, user });
  const success = user => ({ type: types.LOGIN_SUCCESS, user });
  const failure = error => ({ type: types.LOGIN_FAILURE, error });

  return dispatch => {
    dispatch(request(data));

    userService.login(data).then(
      user => {
        console.log(user);
        if (user.status === 201) {
          dispatch(success(user));
          history.push("/");
          window.location.reload();
        } else {
          dispatch(failure(user.message));
        }
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
  return { type: types.LOGOUT };
};

const register = user => {
  const request = user => ({ type: types.REGISTER_REQUEST, user });
  const success = user => ({ type: types.REGISTER_SUCCESS, user });
  const failure = error => ({ type: types.REGISTER_FAILURE, error });

  return dispatch => {
    dispatch(request(user));

    userService.register(user).then(
      user => {
        if (user.status === 201) {
          dispatch(success(user)); // do sprawdzanie czy argument ma być przeslany
          history.push("/login");
          window.location.reload();
          dispatch(alertActions.success("Registration successful"));
        } else {
          dispatch(failure(user.message));
        }
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
