// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js"
import { getFirestore, collection, addDoc, getDocs, onSnapshot, doc } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
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

// Initialize Firebase | Inicializar Firebase
const app = initializeApp(firebaseConfig);
// Initialize Analytics and get a reference to the service
const analytics = getAnalytics(app);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Agrega un nuevo objecto a la base de datos
export async function addNewAmimal() {
  let object = {
    Nombre: document.querySelector("#nombre").value,
    Talla: document.querySelector("#talla").value,
    Edad: document.querySelector("#edad").value,
    Color: document.querySelector("#color").value,
    Sexo: document.querySelector("#sexo").value,
    Imagen: "imagen",
    Descripcion: document.querySelector("#descripcion").value,
    Razon: document.querySelector("#razon").value
  };

  try {
    const docRef = await addDoc(collection(db, "mascotas"), object);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

window.addnew = addNewAmimal;

const querySnapshot = await getDocs(collection(db, "mascotas"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  let tab;
tab = document.getElementById('tabs');
tab.innerHTML += `
    <tr>
    <td>${doc.id}</td>
    <td>${doc.data().Nombre}</td>
    <td>${doc.data().Talla}</td>
    <td>${doc.data().Edad}</td>
    <td>${doc.data().Color}</td>
    <td>${doc.data().Sexo}</td>
    <td>${doc.data().Imagen}</td>
    <td>${doc.data().Descripcion}</td>
    <td>${doc.data().Razon}</td>
    <td>actions</td>
    </tr>
    `;
});

export function uploadFile(file) {
  // Create a reference to 'images/mountains.jpg'
  const storageRef = ref(storage, "images/mountains.jpg");
  // Upload the file and metadata
  const uploadTask = uploadBytesResumable(storageRef, file);
  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;
        case "storage/canceled":
          // User canceled the upload
          break;
        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
      });
    }
  );

  // Pause the upload
  //uploadTask.pause();

  // Resume the upload
  //uploadTask.resume();

  // Cancel the upload
  //uploadTask.cancel();
}

