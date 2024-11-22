// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "./redux/store";
import theme from "./styles/theme";
import { Header } from "./components/Header";
import { Landing } from "./pages/Landing";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/paradise-nursery">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/products"
              element={
                <>
                  <Header />
                  <Products />
                </>
              }
            />
            <Route
              path="/cart"
              element={
                <>
                  <Header />
                  <Cart />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
