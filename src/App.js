// import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7DO-L8pzii_dteFKAws48gJniCrgpRnM",
  authDomain: "snopestadgaard.firebaseapp.com",
  projectId: "snopestadgaard",
  storageBucket: "snopestadgaard.appspot.com",
  messagingSenderId: "696446813634",
  appId: "1:696446813634:web:6649de98b9b982b9aa825b",
  measurementId: "G-T3CNXQXLKN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {

  const fadeOut = () => {
    const loaderWrapper =
    document.querySelector('.wrapper');
    loaderWrapper.classList.add('fade');
  }

  window.addEventListener('load', fadeOut);
console.log(app);

  return (
    <section className="wrapper">
      <section className="loader">
        <header className="Header">
          <h1>Snopestad</h1>
          <section className="Navigation">
            <a href="/">Home</a>
            <a href="/About">About</a>
            <p>Button</p>
          </section>
        </header>
        <main className="Main"></main>
      </section>
    </section>
  );
}

export default App;
