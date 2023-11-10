import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "../store";
import { persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import Container from "../components/rootContainer";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Container>
          <BottomSheetModalProvider>
            <Stack
              screenOptions={{
                headerShown: false,
              }}
            />
          </BottomSheetModalProvider>
        </Container>
      </PersistGate>
    </Provider>
  );
};

export default AppLayout;
