import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import BasketView from "./views/basket/basket";
import HomePageView from "./views/home-page/home-page";
import MainView from "./views/main/main";
import NotFoundView from "./views/not-found/not-found";
import SellView from "./views/sell/sell";
import SingleProductView from "./views/single-product/single-product";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MainView />}>
            <Route index element={<HomePageView />} />
            <Route path={"SellFormView"} element={<SellView />} />
            <Route path={"BasketView"} element={<BasketView />} />
            <Route path={":id"} element={<SingleProductView />}></Route>
            <Route path={"*"} element={<NotFoundView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
