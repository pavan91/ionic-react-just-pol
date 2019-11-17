import firebase from "firebase";

export const getOrdersList = () => firebase.database().ref('orders');