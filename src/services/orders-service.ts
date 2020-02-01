import * as firebase from 'firebase/app'
import 'firebase/database'

export const getOrdersList = () => firebase.database().ref('orders');
