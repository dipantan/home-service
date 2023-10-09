import { useDispatch } from "react-redux";
import { login } from "../slices/auth";

const dispatch = useDispatch();

export const loginAction = dispatch(
  login({
    user: "dipantan",
    token: "9aud9asudhasdh8asghd8as8d8asd8q3238",
  })
);
