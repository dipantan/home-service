// if (__DEV__) {
//   import("../ReactotronConfig").then(() =>
//     console.log("Reactotron Configured")
//   );
// }

import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "../store";
import { persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import Container from "../components/rootContainer";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Container>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </Container>
      </PersistGate>
    </Provider>
  );
};

export default AppLayout;
