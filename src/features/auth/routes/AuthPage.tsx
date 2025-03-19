import { IonContent, IonPage } from '@ionic/react';
import { Button } from '@src/components/Elements/Button';
import { Icon } from '@src/components/Elements/Icon';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

export const AuthPage = () => {

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Libs                                                                                           <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    // I18n
    const { t } = useTranslation();

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
            <IonContent
                slot='fixed'
                scrollY={ false }
                style={ { overflow: 'hidden' } }
            >
                <div
                    style={ {
                        backgroundImage: 'url(/images/siyu-auth-background-a.jpg)',
                    } }
                    className={ clsx([
                        'absolute inset-0 bg-cover bg-center',
                        'flex flex-col items-center justify-center gap-64',
                    ]) }
                >

                    <div className=" flex flex-col items-center">

                        <Icon
                            i='Logo'
                            width={ 100 }
                            height={ 100 }
                            color='accent'
                        />

                        <Icon
                            i='LogoTextOnly'
                            width={ 100 }
                            height={ 75 }
                            color='white'
                        />
                    </div>

                    <div className='flex flex-col items-center gap-8 w-full px-64'>
                        <Button
                            onClick={ () => push('/register') }
                            className='w-full justify-center'
                        >
                            <span>{t('auth-page.register')}</span>
                        </Button>
                        <Button
                            color='white'
                            onClick={ () => push('/login') }
                            className='w-full justify-center'
                        >
                            <span>{t('auth-page.login')}</span>
                        </Button>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};
