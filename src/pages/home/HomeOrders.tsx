import React from "react";
import { Order } from "../../services/orders/order";
import { IonList, IonItem, IonAvatar, IonImg, IonLabel, IonText, IonItemSliding, IonItemOptions, IonItemOption, IonIcon } from "@ionic/react";

type HomeOrdersProps = {
    orders?: Order[];
};

const HomeOrders = ({ orders }: HomeOrdersProps) => {
    const removeItem = (order: Order) => {
        // TODO
    };

    return (
        <IonList>
            {orders && orders.map(o => (
                <IonItemSliding>
                    <IonItem>
                        <IonAvatar slot="start">
                            <IonImg src="assets/img/sushi.svg" />
                        </IonAvatar>
                        <IonLabel>
                            <IonText>
                                {new Date(o.orderDate).toLocaleString()}
                            </IonText>
                        </IonLabel>
                    </IonItem>

                    <IonItemOptions side="end">
                        <IonItemOption onClick={() => removeItem(o)}>
                            <IonIcon slot="icon-only" name="heart"></IonIcon>
                        </IonItemOption>
                    </IonItemOptions>
                </IonItemSliding>
            ))}
        </IonList>
    )
};

export { HomeOrders };