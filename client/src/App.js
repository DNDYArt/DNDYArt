import React from "react";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
import HomePage from "./pages/HomePage";
import Member from "./pages/Member";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Profile from "./pages/Profile";
import Shop from "./pages/Shop";
import Cloudinarytest from "./pages/Cloudinarytest";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import Theme from './components/Theme';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {

	return (
		<ParallaxProvider>
		<ChakraProvider theme={Theme}>
		<div className="App">
			{/* <ApolloProvider>  */}
			<Router>
			<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/member" element={<Member />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/cloudinarytest" element={<Cloudinarytest />} />
				</Routes>
				<Footer />
			</Router>
			{/* </ApolloProvider> */}
		</div>
		</ChakraProvider>
		</ParallaxProvider>
	);
}

export default App;
