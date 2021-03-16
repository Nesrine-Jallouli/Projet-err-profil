import {
  USER_REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  ENTREPRISE_REGISTER,
  ENTREPRISEREGISTER_SUCCESS,
  ENTREPRISEREGISTER_FAIL,
  ENTREPRISE_LOGIN,
  ENTREPRISELOGIN_FAIL,
  ENTREPRISELOGIN_SUCCESS,
  GET_PROFILEENTREPRISE,
  GET_PROFILEENTREPRISE_SUCCESS,
  GET_PROFILEENTREPRISE_FAIL,
} from "../constants/actionsTypes";
import axios from "axios";

export const userRegister = (newUser) => async (dispatch) => {
  dispatch({ type: USER_REGISTER });

  try {
    const addResult = await axios.post("/user/register", newUser);

    dispatch({ type: REGISTER_SUCCESS, payload: addResult.data });
  } catch (error) {
    // error.response.data.errors.map((el) => alert(el.msg));

    dispatch({ type: REGISTER_FAIL, payload: error.response.data });
  }
};

export const userLogin = (userLog) => async (dispatch) => {
  dispatch({ type: USER_LOGIN });

  try {
    const loginResult = await axios.post("/user/login", userLog);

    console.log(loginResult);
    localStorage.setItem("token", loginResult.data.token);

    dispatch({ type: LOGIN_SUCCESS, payload: loginResult.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: LOGIN_FAIL, payload: error.response.data });
  }
};

export const getProfile = () => async (dispatch) => {
  dispatch({ type: GET_PROFILE });

  try {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    const user = await axios.get("/user/current", config);

    dispatch({ type: GET_PROFILE_SUCCESS, payload: user.data });
  } catch (error) {
    dispatch({ type: GET_PROFILE_FAIL, payload: error.response.data });
  }
};


export const editProfile = (id, editProfile) => (dispatch) => {
  axios
    .put(`/user/update/${id}`, editProfile)
    .then(() => dispatch(getProfile()))
    .catch((err) => console.log(err));
};


///////// Partie Entreprise ////////

export const entrepriseRegister = (newEntreprise) => async (dispatch) => {
  dispatch({ type: ENTREPRISE_REGISTER });

  try {
    const addResultE = await axios.post("/entreprise/entrepriseregister", newEntreprise);

    dispatch({ type: ENTREPRISEREGISTER_SUCCESS, payload: addResultE.data });
  } catch (error) {
    // error.response.data.errors.map((el) => alert(el.msg));

    dispatch({ type: ENTREPRISEREGISTER_FAIL, payload: error.response.data });
  }
};

export const entrepriseLogin = (entrepriseLog) => async (dispatch) => {
  dispatch({ type: ENTREPRISE_LOGIN });

  try {
    const loginResultE = await axios.post("/entreprise/entrepriselogin", entrepriseLog);

    console.log(loginResultE);
    localStorage.setItem("token", loginResultE.data.token);

    dispatch({ type: ENTREPRISELOGIN_SUCCESS, payload: loginResultE.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: ENTREPRISELOGIN_FAIL, payload: error.response.data });
  }
};

export const getentreprise = () => async (dispatch) => {
  dispatch({ type: GET_PROFILEENTREPRISE });

  try {
    const configE = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    const entreprise = await axios.get("/entreprise/entreprisecurrent", configE);

    dispatch({ type: GET_PROFILEENTREPRISE_SUCCESS, payload: entreprise.data });
  } catch (error) {
    dispatch({ type: GET_PROFILEENTREPRISE_FAIL, payload: error.response.data });
  }
};


export const editEntreprise = (id, editEntreprise) => (dispatch) => {
  axios
    .put(`/entreprise/updateentreprise/${id}`, editEntreprise)
    .then(() => dispatch(getentreprise()))
    .catch((err) => console.log(err));
};
