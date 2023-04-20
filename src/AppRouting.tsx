import { Outlet } from "react-router-dom";
import './App.scss';

import ResponsiveAppBar from "./components/header/header";
import MobileChat from "./components/mobile-chat/mobile-chat";
import Footer from "./components/footer/footer";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { config } from "./config/config";

export const app = initializeApp(config.firebaseConfig);
export const database = getFirestore(app);

export function AppRouting() {
	return ( <>
		<ResponsiveAppBar />
			<Outlet />
		<MobileChat />
		<Footer />
		</>
	)
  }