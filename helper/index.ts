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

export const getCall = async (endpoint: string) => {
  const req = await instance.get(endpoint);
  return req;
};

export const postCall = async (endpoint: string, data: any) => {
  const req = await instance.post(endpoint, data);
  return req.data;
};
