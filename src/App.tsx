import { IonApp } from '@ionic/react';
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';
import * as firebase from 'firebase/app'
import React from 'react';
import { firebaseConfig } from './config/firebase';
import { Routes } from './routes/Routes';
import './theme/variables.css';
import './config/i18n';

firebase.initializeApp(firebaseConfig);

const App: React.FC = () => (
    <IonApp>
        <Routes />
    </IonApp>
);

export default App;
