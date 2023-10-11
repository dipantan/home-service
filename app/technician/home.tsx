import React from "react";
import { Redirect } from "expo-router";

const home = () => {
  return <Redirect href={"/technician/tabs"} />;
};

export default home;
