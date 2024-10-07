import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // Add this if you're using redux-persist
import App from "./App.jsx";
import ThemeContextProvider from "./context/themeContext.jsx";
import { store, persistor } from "./redux/store";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <Provider store={store}>
          {/* Use PersistGate if using redux-persist */}
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </ThemeContextProvider>
    </BrowserRouter>
  </StrictMode>
);
