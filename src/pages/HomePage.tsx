import React from 'react';
import {
    IonPage,
    IonToolbar,
    IonHeader,
    IonContent,
    IonButtons,
    IonButton,
    IonTitle,
    IonIcon,
    IonProgressBar
} from '@ionic/react';
import { useTranslation } from 'react-i18next';
import { logOut } from 'ionicons/icons';
import { signOut } from '../services/authentication-service';
import { HomeOrders } from './home/HomeOrders';
import { getOrdersList } from '../services/orders-service';
import { Order } from '../services/orders/order';
import { useFirebaseList } from '../hooks/use-firebase-list';

const HomePage = () => {
    const { t } = useTranslation('home');
    
    const [values, loading] = useFirebaseList<Order>(getOrdersList(), 'id');
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="end">
                        <IonButton onClick={signOut}>
                            <IonIcon slot="icon-only" icon={logOut} ariaLabel={t('log-out')} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>{t('my-orders')}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                {loading && <IonProgressBar type="indeterminate" />}

                {values && <HomeOrders orders={values} />}
            </IonContent>
        </IonPage>
    );
};

export { HomePage };
