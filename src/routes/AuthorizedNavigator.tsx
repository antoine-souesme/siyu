import { IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { Icon } from '@src/components/Elements/Icon';
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
                        backgroundColor: 'white',
                    } }
                >
                    <IonTabButton
                        tab="discover"
                        href="/discover"
                        style={ {
                            backgroundColor: 'white',
                        } }
                    >
                        <Icon
                            i='Heart'
                            width={ 24 }
                            height={ 24 }
                        />
                    </IonTabButton>
                    <IonTabButton
                        tab="chat"
                        href="/chat"
                        style={ {
                            backgroundColor: 'white',
                        } }
                    >
                        <Icon
                            i='Message'
                            width={ 24 }
                            height={ 24 }
                        />
                    </IonTabButton>
                    <IonTabButton
                        tab="profile"
                        href="/profile"
                        style={ {
                            backgroundColor: 'white',
                        } }
                    >

                        <Icon
                            i='User'
                            width={ 24 }
                            height={ 24 }
                        />
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonPage>
    );
};
