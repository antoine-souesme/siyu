import { IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { ChatPage } from '@src/features/chat/routes/ChatPage';
import { DiscoverPage } from '@src/features/discover/routes/DiscoverPage';
import { ProfilePage } from '@src/features/profile/routes/ProfilePage';
import { Route } from 'react-router-dom';

export const AuthorizedNavigator = () => {

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
            <IonTabs>
                <IonRouterOutlet>
                    <Route
                        exact
                        path='/discover'
                    >
                        <DiscoverPage />
                    </Route>
                    <Route
                        exact
                        path='/chat'
                    >
                        <ChatPage />
                    </Route>
                    <Route
                        exact
                        path='/profile'
                    >
                        <ProfilePage />
                    </Route>
                </IonRouterOutlet>
                <IonTabBar
                    slot="bottom"
                    style={ {
                        paddingBottom: 'var(--ion-safe-area-bottom)',
                    } }
                >
                    <IonTabButton
                        tab="tab1"
                        href="/discover"
                    >
                        <IonLabel>Tab 1</IonLabel>
                    </IonTabButton>
                    <IonTabButton
                        tab="tab2"
                        href="/chat"
                    >
                        <IonLabel>Tab 2</IonLabel>
                    </IonTabButton>
                    <IonTabButton
                        tab="tab3"
                        href="/profile"
                    >

                        <IonLabel>Tab 3</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonPage>
    );
};
