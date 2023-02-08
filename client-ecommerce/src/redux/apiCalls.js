import { loginFailure, loginStart, loginSuccess, registerSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";
import { getProductFailure, getProductStart, getProductSuccess } from "./productRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    console.log("res", res)
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log("error");
    dispatch(loginFailure());
  }     
};

export const register = async (dispatch, user) => {
  console.log("18", user)
    const res = await publicRequest.post("/auth/register", user); 
    console.log("21", res)
    dispatch(registerSuccess(res.data));    
};


export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }    
}
  
// export const register = async (dispatch, user) => {
//   console.log("18", user)
//     const res = await publicRequest.post("/auth/register", user);
//     console.log("21", res)
//     dispatch(registerSuccess(res.data));
     
// };