import { IonToolbar } from '@ionic/react';
import { Button } from '@src/components/Elements/Button';
import { Icon } from '@src/components/Elements/Icon';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

export const AuthHeader = () => {

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Libs                                                                                           <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    // I18n
    const { t } = useTranslation();

    // History
    const history = useHistory();

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
        <IonToolbar
            color='translucent'
            slot='fixed'
            className={ clsx([
                'bg-white px-16',
            ]) }
        >
            <div
                style={ {
                    paddingTop: 'var(--ion-safe-area-top)',
                } }
            >
                <Button
                    color='white'
                    size='small'
                    onClick={ () => history.goBack() }
                >
                    <Icon
                        i='ArrowLeft'
                        width={ 20 }
                        height={ 20 }
                    />
                    <span>{t('button.back')}</span>
                </Button>
            </div>
        </IonToolbar>

    );
};
