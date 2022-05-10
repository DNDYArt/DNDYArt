import React from "react";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
import HomePage from "./pages/HomePage";
import Member from "./pages/Member";
import Footer from "./components/Footer";
import Nav from "./pages/Nav";
import Profile from "./pages/Profile";
import Shop from "./pages/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <ApolloProvider>  */}
         <Router>
           <Nav/>
           <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/member" element={<Member/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/shop" element={<Shop/>}/>
            </Routes>  
          <Footer/>
        </Router>
      {/* </ApolloProvider> */}
    </div>
  );
}

export default App;
