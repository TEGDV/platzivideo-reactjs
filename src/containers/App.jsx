import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header.jsx";
import Search from "../components/Search.jsx";
import MainSection from "../containers/MainSection.jsx";
import Footer from "../components/Footer.jsx";
import "../assets/styles/App.scss";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Search />
        <Switch>
          <Route exact path="/videos" component={MainSection} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
