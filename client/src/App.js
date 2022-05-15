import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import HomePage from "./pages/HomePage";
import Member from "./pages/Member";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoginModal from "./components/LogInModal";
import ArtistProfile from "./pages/ArtistProfile";
import CollectorProfile from "./pages/Collector";
import Shop from "./pages/Shop";
import Login from './pages/Login';
import Cloudinarytest from "./pages/Cloudinarytest";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import Theme from './components/Theme';
import { ParallaxProvider } from 'react-scroll-parallax';
import ArtistSignUp from "./pages/ArtistSignUp";
import UserProvider from "./utils/UserContext";
import FeatureProvider from "./utils/FeatureContext";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
	uri:  '/graphql',
  });
  
  // Construct request middleware that will attach the JWT token to every request as an `authorization` header
  const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('id_token');
	// return the headers to the context so httpLink can read them
	return {
	  headers: {
		...headers,
		authorization: token ? `Bearer ${token}` : '',
	  },
	};
  });
  
  const client = new ApolloClient({
	// Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
  });

function App() {

	return (
		<UserProvider>
		<FeatureProvider>
		<ParallaxProvider>
		<ChakraProvider theme={Theme}>
		<div className="App">
			<ApolloProvider client={client}> 
			<Router>
			<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/collectors" element={<Member />} />
					<Route path="/artistprofile" element={<ArtistProfile />} />
					{/* <Route path="/collectorprofile" element={<CollectorProfile />} /> */}
					<Route path="/shop" element={<Shop />} />
					<Route path="/cloudinarytest" element={<Cloudinarytest />} />
					<Route path="/artist" element={<ArtistSignUp />} />
					<Route path="/loggin" element={<Login />} />
				</Routes>
				<Footer />
			</Router>
			</ApolloProvider>
		</div>
		</ChakraProvider>
		</ParallaxProvider>
		</FeatureProvider>
		</UserProvider>
	);
}

export default App;
