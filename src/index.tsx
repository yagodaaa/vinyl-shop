import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import BasketView from './views/basket/basket-view';
import HomePageView from './views/home-page/home-page-view';
import LoginRegisterView from './views/login-register/login-register-view';
import NotFoundView from './views/not-found/not-found-view';
import SingleProductView from './views/product-fullinfo-view/product-fullinfo-view';
import ProductListView from './views/product-list/product-list-view';
import SellView from './views/sell/sell-view';
import { AppRouting } from './AppRouting';

const router  = createBrowserRouter([
	{
	  path: "/",
	  element: <AppRouting />,
	  children: [
		{
		  path: "/",
		  element: <HomePageView />
		},
		{
		  path: "basket",
		  element: <BasketView />
		},
		{
		  path: "login-register-view",
		  element: <LoginRegisterView />
		},
		{
		  path: "sell-form-view",
		  element: <SellView />
		},
		{
		  path: "product-list",
		  element: <ProductListView />
		},
		{
		  path: ":id",
		  element: <SingleProductView />
		},
		{
		  path: "*",
		  element: <NotFoundView />
		}
	  ]
	}
  ])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
