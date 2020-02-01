import { IonApp, IonLoading } from '@ionic/react';
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
import React, { Suspense } from 'react';
import { Routes } from './routes/Routes';
import './config/i18n';
import './config/firebase';

import './theme/variables.scss';

const App: React.FC = () => (
    <Suspense fallback={<IonLoading isOpen={true} />}>
        <IonApp>
            <Routes />
        </IonApp>
    </Suspense>
);

export default App;
