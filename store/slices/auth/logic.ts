import { createLogic } from "redux-logic";
import {
  login,
  loginSuccess,
  loginFailed,
  logout,
  logoutSuccess,
} from "../auth";

const loginLogic = createLogic({
  type: login,
  latest: true,
  async process({ getState, action }, dispatch, done) {
    try {
      //   const request = await fetch(baseUrlDev + endpoints.loginWithOTP, {
      //     method: "POST",
      //     body: JSON.stringify(action.payload),
      //     headers: {
      //       "Content-Type": "application/json",
      //       Accept: "*/*",
      //     },
      //   });
      //   const response = await request.json();
      //   if (response.status) {
      //     const isAllowed = await checkTransporter(response.token);
      //     if (isAllowed) {
      dispatch(loginSuccess(action.payload));
      //     } else {
      //       Alert.alert(
      //         "",
      //         "Currently this app is not enabled for transporters. Please use webApp app.loadbazzar.com "
      //       );
      //     }
      //   } else {
      //     dispatch(loginFailed(response));
      //   }
    } catch (error) {
      //   dispatch(loginFailed(error));
    }
    done();
  },
});

const logoutLogic = createLogic({
  type: logout,
  latest: true,
  async process({ getState, action }, dispatch, done) {
    dispatch(logoutSuccess());
    done();
  },
});

export { loginLogic, logoutLogic };
