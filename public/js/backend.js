// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js"
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxQOYhgS8hNeH54adKnSVot5tjJcgiw-k",
  authDomain: "dog-cat-7b3a6.firebaseapp.com",
  projectId: "dog-cat-7b3a6",
  storageBucket: "dog-cat-7b3a6.appspot.com",
  messagingSenderId: "679313092033",
  appId: "1:679313092033:web:4f932316c0194440aa1340",
  measurementId: "G-EFFZDJRHK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// async function addNewAmimal(object) {
// try {
//   const docRef = await addDoc(collection(db, "mascotas"), object);
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }
// }


// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

const storageRef = ref(storage, 'some-child');
const bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
//uploadBytes(storageRef, bytes).then((snapshot) => {
//   console.log('Uploaded an array!');
// });


