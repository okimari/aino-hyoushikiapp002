//firebaseと連携させているページ
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDpYityKoCxR1M8y8KQJe2XuRZmPDPCOWk",
    authDomain: "ainohyoushiki002.firebaseapp.com",
    databaseURL: "https://ainohyoushiki002.firebaseio.com",
    projectId: "ainohyoushiki002",
    storageBucket: "ainohyoushiki002.appspot.com",
    messagingSenderId: "131610869624",
    appId: "1:131610869624:web:c1ca1947a8908f5b22128d"
}
firebase.initializeApp(firebaseConfig);

const AuthDb = firebase.firestore().collection('UserId');
const Db = firebase.firestore().collection('Question');
// ここにdbの接続を記述する
export default firebase;
