import axios from "axios";
import state from "../store";

const user = state?.getState()?.auth;

export const instance = axios.create({
  baseURL: "https://homeservice-api.dipantan.live",
  timeout: 1000,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${user?.token || undefined}`,
  },
});
