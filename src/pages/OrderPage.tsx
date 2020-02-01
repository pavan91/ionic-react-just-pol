import React from 'react';
import { useParams, useHistory } from 'react-router';
import { getOrder } from '../services/orders-service';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonProgressBar,
    IonButtons,
    IonIcon,
    IonButton
} from '@ionic/react';
import { useObjectVal } from 'react-firebase-hooks/database';
import { Order } from '../services/orders/order';
import { arrowBack } from 'ionicons/icons';

type OrderPageParams = {
    orderId: string;
};

const OrderPage = () => {
    const { orderId } = useParams<OrderPageParams>();
    const { goBack } = useHistory();
    const [value, loading] = useObjectVal<Order>(getOrder(orderId));

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={goBack}>
                            <IonIcon slot="icon-only" icon={arrowBack} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>ORDER {orderId}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                {loading && <IonProgressBar type="indeterminate" />}

                {value && value.orderDate}
            </IonContent>
        </IonPage>
    );
};

export { OrderPage };
