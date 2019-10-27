import { IonLoading, IonToast } from "@ionic/react";
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
        <>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>

            <IonToast
                isOpen={!!loginError}
                onDidDismiss={() => setLoginError('')}
                message={loginError}
                duration={2000} />

            <IonLoading isOpen={showLoading} />
        </>
    );
};

export { LoginPage };

