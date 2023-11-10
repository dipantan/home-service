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
  async process({ getState, action, instance }, dispatch, done) {
    try {
      if (action.payload.type == "register") {
        const data = {
          email: action.payload.email,
          name: action.payload.name,
          password: action.payload.password,
          phone: action.payload.phone,
        };

        const req = await instance.post("/auth/register/user", data);
        if (req.data?.error) {
          dispatch(loginFailed(req.data));
        } else {
          const data_ = req.data?.data;
          dispatch(loginSuccess(data_)); //data dispatch
        }
      } else if (action.payload.type == "tech-register") {
        const data = {
          name: action.payload.name,
          email: action.payload.email,
          phone: action.payload.phone,
          password: action.payload.password,
          category: action.payload.category,
          experience: action.payload.experience,
          location: {
            lat: action.payload.lat,
            long: action.payload.long,
          },
        };
        const req = await instance.post("/auth/register/technician", data);
        if (req.data?.error) {
          dispatch(loginFailed(req.data));
        } else {
          const data_ = req.data?.data;
          dispatch(loginSuccess(data_)); //data dispatch
        }
      } else {
        const data = {
          username: action.payload.username,
          password: action.payload.password,
        };
        const req = await instance.post("/auth/login", data);
        if (req.data?.error) {
          dispatch(loginFailed(req.data));
        } else {
          const data_ = req.data?.data;
          dispatch(loginSuccess(data_));
        }
      }
    } catch (error) {
      dispatch(loginFailed(error?.response?.data));
    }
    done();
  },
});

const logoutLogic = createLogic({
  type: logout,
  latest: true,
  async process({ getState, action }, dispatch, done) {
    dispatch(logoutSuccess(""));
    done();
  },
});

export { loginLogic, logoutLogic };
