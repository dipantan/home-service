import React from "react";
import { Redirect } from "expo-router";

const home = () => {
  return <Redirect href={"/user/tabs"} />;
};

export default home;
