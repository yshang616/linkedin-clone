// import firebase from 'firebase/compat/app';
// // import 'firebase/compat/auth';
// // import 'firebase/compat/firestore';

// const firebaseConfig = { 
//     apiKey: "AIzaSyDcvV66S2ET5sXkbastuNc5ok43XEvsKc4",
//     authDomain: "linkedin-project-395ea.firebaseapp.com",
//     projectId: "linkedin-project-395ea",
//     storageBucket: "linkedin-project-395ea.appspot.com",
//     messagingSenderId: "412954377773",
//     appId: "1:412954377773:web:c24e6f79fad24c8257c2a4"
// }

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDcvV66S2ET5sXkbastuNc5ok43XEvsKc4",
    authDomain: "linkedin-project-395ea.firebaseapp.com",
    projectId: "linkedin-project-395ea",
    storageBucket: "linkedin-project-395ea.appspot.com",
    messagingSenderId: "412954377773",
    appId: "1:412954377773:web:c24e6f79fad24c8257c2a4"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;