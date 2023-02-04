import { loginFailure, loginStart, loginSuccess, registerSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  console.log("5", user)
  dispatch(loginStart());
  console.log( "7", dispatch(loginStart()))
  try {
    const res = await publicRequest.post("/auth/login", user);
    console.log("10", res)
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }     
};

export const register = async (dispatch, user) => {
  console.log("18", user)
    const res = await publicRequest.post("/auth/register", user);
    console.log("21", res)
    dispatch(registerSuccess(res.data));
     
};