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
// import LoginModal from "./components/LogInModal";
import ArtistProfile from "./pages/ArtistProfile";
import Shop from "./pages/Shop";
import Login from './pages/Login';
import Cloudinarytest from "./pages/Cloudinarytest";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import Theme from './components/Theme';
import { ParallaxProvider } from 'react-scroll-parallax';
import ArtistSignUp from "./pages/ArtistSignUp";
import CollectorProfile from "./pages/Collector";
import UserProvider from "./utils/UserContext";


function App() {

	return (
		<UserProvider>
		<ParallaxProvider>
		<ChakraProvider theme={Theme}>
		<div className="App">
			{/* <ApolloProvider>  */}
			<Router>
			<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/collectors" element={<Member />} />
					<Route path="/artistprofile" element={<ArtistProfile />} />
					<Route path="/collectorprofile" element={<ArtistProfile />} />  {/* when collector profile page created, add here */}
					<Route path="/shop" element={<Shop />} />
					<Route path="/cloudinarytest" element={<Cloudinarytest />} />
					<Route path="/artist" element={<ArtistSignUp />} />
          				<Route path="/collectorprofile" element={<CollectorProfile />}/>
					<Route path="/loggin" element={<Login />} />
				</Routes>
				<Footer />
			</Router>
			{/* </ApolloProvider> */}
		</div>
		</ChakraProvider>
		</ParallaxProvider>
		</UserProvider>
	);
}

export default App;
