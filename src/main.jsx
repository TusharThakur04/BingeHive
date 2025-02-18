import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./redux/store.js";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";

let persistor = persistStore(store);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
