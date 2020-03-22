import React from 'react';
import './LandingPage.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


function LandingPage(props) {
    if (props.isLoggedIn) {
        return <Redirect to={'/logined'} />;
    } else {
        return (
            <div className="topPageDesign">
                <div className="wrapBox">
                    <dl>
                        <dt>
                            <h1>愛の標識</h1>
                        </dt>
                        <dd>
                            <p>メンヘラのあなたとさようなら</p>
                        </dd>
                    </dl>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { isLoggedIn: state.auth.isLoggedIn };
}

export default connect(mapStateToProps)(LandingPage);

// ランディングページ
// class LandindPage extends Component {
//     render() {
//         return (
//             <div>
//                 LandindPage
//                 <LoginForm formText={'ログイン'} />
//             </div>
//         );
//     }
// }

// export default LandindPage;