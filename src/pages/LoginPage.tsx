import { IonLoading, IonToast, IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonRow, IonButton } from "@ionic/react";
import firebase from "firebase";
import React, { FormEvent, useState } from "react";

const LoginPage = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loginError, setLoginError] = useState<string>('');
    const [showLoading, setShowLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setShowLoading(true);
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
        }
        catch (e) {
            setLoginError(e.message);
        }
        finally {
            setShowLoading(false);
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <form onSubmit={handleSubmit}>
                    <IonRow>
                        <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
                    </IonRow>
                    <IonRow>
                        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required />
                    </IonRow>
                    <IonRow>
                        <IonButton type="submit">Login</IonButton>
                    </IonRow>
                </form>

                <IonToast
                    isOpen={!!loginError}
                    onDidDismiss={() => setLoginError('')}
                    message={loginError}
                    duration={2000} />

                <IonLoading isOpen={showLoading} />
            </IonContent>
        </IonPage >
    );
};

export { LoginPage };

