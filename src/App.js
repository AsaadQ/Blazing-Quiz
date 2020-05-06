import Quiz from './pages/QuizPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticleListPage from './pages/ArticleListPage';
import NotFoundPage from './pages/NotFoundPage';
import FooterPage from './pages/FooterPage';
import Nav from "./pages/Toolbar/Nav";
import Sidedrawer from "./pages/Sidedrawer/Sidedrawer";
import Backdrop from "./pages/Backdrop/Backdrop";
import './FooterComponents/Footer.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Contact from './pages/Contact';

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <Router>
        <div className="App" style={{ height: "100%" }}>
          <Nav drawerClickHandler={this.drawerToggleClickHandler} />
          <Sidedrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/About" component={AboutPage} />
            <Route path="/Article/:name" component={ArticlePage} />
            <Route path="/Article-list" component={ArticleListPage} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Quiz" component={Quiz} />
            <Route component={NotFoundPage} />
          </Switch>
          <div className="footer-container"> 
            <FooterPage />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;