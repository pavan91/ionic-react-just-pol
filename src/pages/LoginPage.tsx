import {
    IonButton,
    IonContent,
    IonLoading,
    IonPage,
    IonRow,
    IonToast,
    IonGrid,
    IonCol,
    IonInput,
    IonItem,
    IonLabel,
    IonRippleEffect,
    IonImg
} from "@ionic/react";
import firebase from "firebase";
import React, { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import "./LoginPage.scss";

const LoginPage = () => {
    const { t } = useTranslation("login");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loginError, setLoginError] = useState<string>("");
    const [showLoading, setShowLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setShowLoading(true);
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (e) {
            setLoginError(e.message);
        } finally {
            setShowLoading(false);
        }
    };

    return (
        <IonPage className="c-login-page">
            <IonContent>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <IonGrid>
                        <IonRow justify-content-center align-items-center>
                            <IonCol />
                            <IonCol align-self-center size="5">
                                <IonImg src="assets/img/sushi.svg" />
                            </IonCol>
                            <IonCol />
                        </IonRow>

                        <IonRow justify-content-center align-items-center>
                            <IonCol align-self-center>
                                <IonItem>
                                    <IonLabel position="floating">{t("email")}</IonLabel>
                                    <IonInput
                                        type="email"
                                        name="email"
                                        value={email}
                                        onIonChange={e =>
                                            setEmail((e.target as HTMLInputElement).value)
                                        }
                                        required
                                    />
                                </IonItem>
                            </IonCol>
                        </IonRow>

                        <IonRow justify-content-center align-items-center>
                            <IonCol align-self-center>
                                <IonItem>
                                    <IonLabel position="floating">{t("password")}</IonLabel>
                                    <IonInput
                                        type="password"
                                        value={password}
                                        onIonChange={e =>
                                            setPassword((e.target as HTMLInputElement).value)
                                        }
                                        required
                                    />
                                </IonItem>
                            </IonCol>
                        </IonRow>

                        <IonRow justify-content-center align-items-center>
                            <IonCol align-self-center>
                                <IonButton
                                    className="c-login-page__submit"
                                    type="submit"
                                    size="large"
                                    expand="block"
                                    fill="outline"
                                    shape="round"
                                    strong
                                >
                                    {t("submit")}
                                    <IonRippleEffect></IonRippleEffect>
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </form>

                <IonToast
                    isOpen={!!loginError}
                    onDidDismiss={() => setLoginError("")}
                    message={loginError}
                    duration={2000}
                />

                <IonLoading isOpen={showLoading} />
            </IonContent>
        </IonPage>
    );
};

export { LoginPage };
