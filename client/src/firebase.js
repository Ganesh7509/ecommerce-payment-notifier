import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB5c6Bkm_-cuQfOEHBh8I_N-OPdgsEjLDs",
  authDomain: "ecommercenotifier-4be1f.firebaseapp.com",
  projectId: "ecommercenotifier-4be1f",
  storageBucket: "ecommercenotifier-4be1f.appspot.com",
  messagingSenderId: "554273393106",
  appId: "1:554273393106:web:d77f08b1ee8ff12404a00b",
  measurementId: "G-XY1J4N1DZ1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
