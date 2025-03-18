import { IonContent, IonPage } from '@ionic/react';
import { Button } from '@src/components/Elements/Button';
import { Icon } from '@src/components/Elements/Icon';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';

export const AuthPage = () => {

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Libs                                                                                           <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    // I18n
    // const { t } = useTranslation();

    // Router
    const { push } = useHistory();

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
            <IonContent>
                <div
                    style={ {
                        backgroundImage: 'url(/images/siyu-auth-background-a.jpg)',
                    } }
                    className={ clsx([
                        'absolute inset-0 bg-cover bg-center',
                        'flex flex-col items-center justify-center gap-64',
                    ]) }
                >
                    <Icon
                        i='Logo'
                        width={ 100 }
                        height={ 100 }
                    />

                    <div className='flex flex-col items-center gap-8 w-full px-64'>
                        <Button
                            onClick={ () => console.log('test') }
                            className='w-full justify-center'
                        >
                            <span>Créer un compte</span>
                        </Button>
                        <Button
                            color='white'
                            onClick={ () => console.log('test') }
                            className='w-full justify-center'
                        >
                            <span>Connexion</span>
                        </Button>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};
