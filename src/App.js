import React from 'react'
import { Provider } from "react-redux";
import store from "../src/store"
import Footer from './components/Footer';
import Hero from './components/Hero';
import './App.css'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Hero />
       <Footer />
      </Provider>
    </div>
  );
}

export default App;
