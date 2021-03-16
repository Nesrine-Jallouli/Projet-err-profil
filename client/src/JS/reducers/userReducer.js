const {
  USER_REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
} = require("../constants/actionsTypes");

const initialState = {
  loading: false,
  errors: null,
  user: null,
  isAuth: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_REGISTER:
    case USER_LOGIN:
    case GET_PROFILE:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case GET_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        isAuth: false,
        errors: payload,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        token: payload,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };

    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
        isAuth: true,
      };

    default:
      return state;
  }
};

export default userReducer;
