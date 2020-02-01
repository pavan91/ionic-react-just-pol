import * as firebase from 'firebase/app';
import 'firebase/database';

export const getOrdersList = () => firebase.database().ref('orders');
export const getOrder = (orderId: string) =>
    firebase
        .database()
        .ref('orders')
        .child(orderId);
