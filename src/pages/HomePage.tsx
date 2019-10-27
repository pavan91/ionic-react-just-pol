import React from "react";
import firebase from "firebase";

const HomePage = () => {
    return (
        <div>
            HOME
            <button onClick={() => firebase.auth().signOut()}>Log out</button>
        </div>
    )
};

export { HomePage };