import * as firebase from 'firebase/app';
import 'firebase/auth';

export const signIn = (email: string, password: string) =>
    firebase.auth().signInWithEmailAndPassword(email, password);

export const signOut = () => firebase.auth().signOut();
