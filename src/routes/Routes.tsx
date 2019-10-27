import { IonLoading } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import firebase from "firebase";
import React, { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Redirect } from "react-router";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ConditionalRoute } from "./ConditionalRoute";

const Routes = () => {
    const [user, isInitializing] = useAuthState(firebase.auth());
    const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
    const [showLoading, setShowLoading] = useState<boolean>(true);

    useEffect(() => {
        setIsUserLoggedIn(Boolean(user));
    }, [user]);

    useEffect(() => {
        setShowLoading(!isInitializing);
    }, [isInitializing])

    return isInitializing ?
        <IonLoading isOpen={showLoading} /> :
        (
            <IonReactRouter>
                <ConditionalRoute path="/login" component={LoginPage} isValid={!isUserLoggedIn} redirectTo="/home" /> 
                <ConditionalRoute path="/home" component={HomePage} isValid={isUserLoggedIn} redirectTo="/login" />
                <Redirect from="/" to="/home" />
            </IonReactRouter>
        );
};

export { Routes };

