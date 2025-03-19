/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

import { Device } from '@capacitor/device';
import { IonApp, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { LocalStorageKeys } from '@src/constants/local-storage-keys';
import i18n from '@src/libs/i18n/i18n';
import { ReactQueryProvider } from '@src/libs/react-query/ReactQueryProvider';
import { useEffect } from 'react';
import { MainRoutes } from './routes/MainRoutes';


/* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
// import '@ionic/react/css/display.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

setupIonicReact({ mode: 'ios' });

const App: React.FC = () => {

    const initializeLang = async () => {
        let locale = localStorage.getItem(LocalStorageKeys.Lang);

        if (!locale) {
            // Get the device language code
            const { value } = await Device.getLanguageCode();

            // Save the device language code
            localStorage.setItem(LocalStorageKeys.Lang, value);

            // Use the device language code
            locale = value;
        }

        i18n.changeLanguage(locale);
    };

    useEffect(() => {
        initializeLang();

        return () => { };
    }, []);

    return (
        <ReactQueryProvider>
            <IonApp>
                <IonReactRouter>
                    <MainRoutes />
                </IonReactRouter>
            </IonApp>
        </ReactQueryProvider>
    );
};

export default App;
