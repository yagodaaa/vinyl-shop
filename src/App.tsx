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

//FIREBASE
import { initializeApp } from "firebase/app";
import { config } from "./config/config"; 
import { getFirestore } from "firebase/firestore"
import { collection, query, getDocs } from "firebase/firestore";

const app = initializeApp(config.firebaseConfig)
const database = getFirestore(app)


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

const generateAllRecordsView = async () => {
  const queryAllRecords = query(collection(database, "records"));
  const allRecords = await getDocs(queryAllRecords);
  console.log(allRecords)
}

generateAllRecordsView()

export default App;
