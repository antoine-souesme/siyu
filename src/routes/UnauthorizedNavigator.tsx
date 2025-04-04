import { IonPage, IonRouterOutlet } from '@ionic/react';
import { AuthPage } from '@src/features/auth/routes/AuthPage';
import { LoginPage } from '@src/features/auth/routes/LoginPage';
import { RegisterPage } from '@src/features/auth/routes/RegisterPage';
import { Route } from 'react-router-dom';

export const UnauthorizedNavigator = () => {

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Libs                                                                                           <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    // I18n
    // const { t } = useTranslation();

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Contexts                                                                                       <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> State                                                                                          <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Queries                                                                                        <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Getters                                                                                        <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Callbacks                                                                                      <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    return (
        <IonPage>
            <IonRouterOutlet >

                <Route
                    exact
                    path='/'
                    component={ AuthPage }
                />

                <Route
                    exact
                    path='/login'
                    component={ LoginPage }
                />

                <Route
                    exact
                    path='/register'
                    component={ RegisterPage }
                />

            </IonRouterOutlet>
        </IonPage>

    );
};
