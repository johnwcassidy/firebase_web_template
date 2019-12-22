import firebase from 'firebase/app';
import 'firebase/auth';

export function onAuthStateChange(callback) {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      callback({ email: user.email });
    } else {
      callback(null);
    }
  });
}

export function login(username, password) {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => resolve())
      .catch(error => reject(error));
  });
}
export function logout() {
  firebase.auth().signOut();
}
