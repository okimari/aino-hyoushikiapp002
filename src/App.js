import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from './config/firebase';

import { loggined, logouted } from './actions';
import history from './history';
import LandingPage from './component/LandingPage';
import LoginedPage from './component/LoginedPage';
import NavBar from './component/NavBar';
import Auth from './Auth';
import QuestionPage from './component/QuestionPage';


// import App from './App.css';

// Routerを使用してページ遷移
class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // ログイン処理
        this.props.loggined();
        console.log('loginしました');
      } else {
        // ログアウト処理
        this.props.logouted();
      }
    });
  }
  render() {
    return (
      // BrowserRouterではなくRouterを使用なので、別に履歴を管理するhistory.jsが必要になる
      // history.js(history)が別にあることによってGoogleアナリティクスの設定などができるようになる
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Auth>
            <Route path="/logined" exact component={LoginedPage} />
            <Route path="/question" exact component={QuestionPage} />
          </Auth>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return { isLoggedIn: state.auth.isLoggedIn };
};

export default connect(mapStateToProps, { loggined, logouted })(App);

// export default App;
