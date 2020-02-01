import { IonLoading } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Redirect } from 'react-router';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { ConditionalRoute } from './ConditionalRoute';
import { OrderPage } from '../pages/OrderPage';

const Routes = () => {
    const [user, isInitializing] = useAuthState(firebase.auth());
    const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
    const [showLoading, setShowLoading] = useState<boolean>(!isInitializing);

    useEffect(() => {
        setIsUserLoggedIn(Boolean(user));
    }, [user]);

    useEffect(() => {
        setShowLoading(!isInitializing);
    }, [isInitializing]);

    return isInitializing ? (
        <IonLoading isOpen={showLoading} />
    ) : (
        <IonReactRouter>
            <ConditionalRoute
                exact
                path="/login"
                component={LoginPage}
                isValid={!isUserLoggedIn}
                redirectTo="/home"
            />
            <ConditionalRoute
                exact
                path="/home"
                component={HomePage}
                isValid={isUserLoggedIn}
                redirectTo="/login"
            />
            <ConditionalRoute
                path="/order/:orderId"
                component={OrderPage}
                isValid={isUserLoggedIn}
                redirectTo="/login"
            />
            <Redirect from="/" to="/home" />
        </IonReactRouter>
    );
};

export { Routes };
