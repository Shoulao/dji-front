import * as types from "../_constans/alert.const";

const success = message => ({
  type: types.SUCCESS,
  message,
});

const error = message => ({
  type: types.ERROR,
  message,
});

const clear = () => ({
  type: types.CLEAR,
});

export const alertActions = {
  success,
  error,
  clear,
};
