import * as types from "../_constans/user.const";

export function registration(state = {}, action) {
  switch (action.type) {
    case types.REGISTER_REQUEST:
      return { registering: true };
    case types.REGISTER_SUCCESS:
      return {};
    case types.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}
