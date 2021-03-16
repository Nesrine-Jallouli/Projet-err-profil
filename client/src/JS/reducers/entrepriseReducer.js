const {
    ENTREPRISE_REGISTER,
    ENTREPRISEREGISTER_SUCCESS,
    ENTREPRISEREGISTER_FAIL,
    ENTREPRISE_LOGIN,
    ENTREPRISELOGIN_FAIL,
    ENTREPRISELOGIN_SUCCESS,
    GET_PROFILEENTREPRISE,
    GET_PROFILEENTREPRISE_SUCCESS,
    GET_PROFILEENTREPRISE_FAIL,
  } = require("../constants/actionsTypes");
  
  const initialState = {
    loading: false,
    errors: null,
    entreprise: null,
    isAuthEnt: false,
  };
  
  const entrepriseReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ENTREPRISE_REGISTER:
      case ENTREPRISE_LOGIN:
      case GET_PROFILEENTREPRISE:
        return {
          ...state,
          loading: true,
        };
  
      case ENTREPRISEREGISTER_FAIL:
      case ENTREPRISELOGIN_FAIL:
      case GET_PROFILEENTREPRISE_FAIL:
        return {
          ...state,
          loading: false,
          isAuthEnt: false,
          errors: payload,
        };
  
      case ENTREPRISELOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          isAuthEnt: true,
          token: payload,
        };
  
      case ENTREPRISEREGISTER_SUCCESS:
        return {
          ...state,
          loading: false,
          entreprise: payload,
        };
  
      case GET_PROFILEENTREPRISE_SUCCESS:
        return {
          ...state,
          loading: false,
          entreprise: payload,
          isAuthEnt: true,
        };
  
      default:
        return state;
    }
  };
  
  export default entrepriseReducer;
  