import React, { Component } from 'react';
import './LoginedPage.css';
import {
    // BrowserRouter as Router,
    // Router,
    // Switch,
    // Route,
    Link
} from "react-router-dom";

// ログイン後のページ

class LoginedPage extends Component {
    render() {
        return (
            <div className="topPageDesign">
                <div className="wrapBox">
                    <div className="loginOk">
                        <h1>ログインしました</h1>
                        {/* 次のページに飛ばすリンク */}
                        <button>
                            <Link to="/question">情報入力に進む</Link>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginedPage;