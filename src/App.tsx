import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import BasketView from "./views/basket/basket";
import HomePageView from "./views/home-page/home-page";
import LoginRegisterView from "./views/login-register/login-register";
import MainView from "./views/main/main";
import NotFoundView from "./views/not-found/not-found";
import ProductListView from "./views/product-list/product-list";
import SellView from "./views/sell/sell";
import SellForm from "./components/sell-form/sell-form"
import SingleProductView from "./views/single-product/single-product";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdhCK24n-ExnYD-_xncrtIbC1x543-htA",
  authDomain: "vvinylshop.firebaseapp.com",
  projectId: "vvinylshop",
  storageBucket: "vvinylshop.appspot.com",
  messagingSenderId: "253415312132",
  appId: "1:253415312132:web:09872ed8cacd9888b65e51",
  measurementId: "G-4BG6H327MV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"sell-form-view"} element={<SellView />} />
          <Route element={<MainView />}>
            <Route index element={<HomePageView />} />
            <Route path={"BasketView"} element={<BasketView />} />
            <Route path={"LoginRegisterView"} element={<LoginRegisterView />} />
            <Route path={"ProductListView"} element={<ProductListView />} />
            <Route path={":id"} element={<SingleProductView />}></Route>
            <Route path={"*"} element={<NotFoundView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
