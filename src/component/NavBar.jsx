import React, { useState, Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// 追加
import { connect } from 'react-redux';
// materialダイアログ
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import firebase from '../config/firebase';
import LoginForm from './LoginForm';


// import { useStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));


function NavBar(props) {
    const classes = useStyles();
    // ダイアログ表示のステート
    const [daialogOpen, setDaialogOpen] = useState(false);
    // ログインとサインアップを切り替えるステート
    const [formText, setFormText] = useState('ログイン');

    const handleClickSignUpOpen = () => {
        // ダイアログ表示してformTextを新規登録にする
        setDaialogOpen(true);
        setFormText('新規登録');
    };
    const handleClickLoginOpen = () => {
        // ダイアログ表示してformTextを新規登録にする
        setDaialogOpen(true);
        setFormText('ログイン');
    };

    const handleClose = () => {
        // ダイアログを閉じる
        setDaialogOpen(false);
    };

    const logout = () => {
        // firebaseからのログアウト
        firebase
            .auth()
            .signOut()
            .then(() => {
                console.log('ログアウトしました');
            })
            .catch(error => {
                console.log('ログアウト時にエラーが発生しました(${error})')
            });
    };

    const onFormTextSignUp = () => {
        setFormText('新規登録');
    };

    const onFormTextLogin = () => {
        setFormText('ログイン');
    };

    const renderSwitchLoginOrSignUp = () => {
        // ログインフォームの下にログインとサインアップを切り替える処理
        if (formText === 'ログイン') {
            return (
                <div style={{ textAlign: 'center', margin: 20 }}>
                    アカウントをお持ちでないですか？
                    <span onClick={onFormTextSignUp} style={{ color: 'rgb(0, 112, 210)', cursor: 'pointer' }}>
                        新規登録
          </span>
                </div>
            );
        } else {
            return (
                <div style={{ textAlign: 'center', margin: 20 }}>
                    すでにアカウントをお持ちですか？
                    <span onClick={onFormTextLogin} style={{ color: 'rgb(0, 112, 210)', cursor: 'pointer' }}>
                        ログイン
          </span>
                </div>
            );
        }
    };

    const renderDialog = () => {
        // ログアウト時、ログインフォームをダイアログ表示するボタン配置
        return (
            <Fragment>
                <div>
                    <Button color="inherit" onClick={handleClickLoginOpen}>
                        ログイン
          </Button>
                </div>
                <div>
                    <Button color="inherit" onClick={handleClickSignUpOpen}>
                        新規登録
          </Button>
                </div>
                <Dialog open={daialogOpen} onClose={handleClose} fullWidth maxWidth={'sm'}>
                    <DialogTitle className={classes.dialogTitle}>{formText} </DialogTitle>
                    <DialogContent>
                        <LoginForm formText={formText} />
                        {renderSwitchLoginOrSignUp()}
                    </DialogContent>
                </Dialog>
            </Fragment>
        );
    };
    const renderLogout = () => {
        // ログインしてたら表示,ログアウトボタン
        return (
            <Button
                color="inherit"
                onClick={() => {
                    logout();
                    handleClose();
                }}
            >
                ログアウト
            </Button>
        );
    };

    const renderAuth = () => {
        if (props.isLoggedIn) {
            return renderLogout();
        } else {
            // ログアウトしていたらログインボタン表示
            return renderDialog();
        }
    };

    return (
        <AppBar position="fixed" style={{ background: '#E55F50' }}>
            {/* <AppBar position="static" style={{ background: '#1655B6' }}> */}
            <Toolbar>
                <Typography variant="h6" className={classes.title} >
                    <p style={{ fontFamily: '851Gkktt_005', fontSize: '28px', fontWeight: '400' }}>愛の標識</p>
                </Typography>
                {renderAuth()}
            </Toolbar>
        </AppBar >
    );
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
    };
};

export default connect(mapStateToProps)(NavBar);
