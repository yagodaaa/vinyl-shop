import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import BasketView from "./views/basket/basket-view";
import HomePageView from "./views/home-page/home-page-view";
import LoginRegisterView from "./views/login-register/login-register-view";
import NotFoundView from "./views/not-found/not-found-view";
import ProductListView from "./views/product-list/product-list-view";
import SellView from "./views/sell/sell-view";
import SingleProductView from "./views/product-fullinfo-view/product-fullinfo-view";
import './App.scss';
import heroImage from "./views/home-page/main.jpg"

import ResponsiveAppBar from "./components/header/header";
import MobileChat from "./components/mobile-chat/mobile-chat";
import Footer from "./components/footer/footer";

function App() {
  return (
	<div className="App">
	  <BrowserRouter>
	  <ResponsiveAppBar />
		<Routes>
			<Route index element={<HomePageView />} />
			<Route path={"/"} element={<HomePageView/>} />
			<Route path={"basket"} element={<BasketView />} />
			<Route path={"LoginRegisterView"} element={<LoginRegisterView />} />
			<Route path={"sell-form-view"} element={<SellView />} />
			<Route path={"ProductListView"} element={<ProductListView />} />
			<Route path={":id"} element={<SingleProductView />}/>
			<Route path={"*"} element={<NotFoundView />} />
		</Routes>
	  <img className="hero-image" src={heroImage} alt="heroImage"/>
		<MobileChat />
		<Footer />
	  </BrowserRouter>
	</div>
  );
}
export default App;
