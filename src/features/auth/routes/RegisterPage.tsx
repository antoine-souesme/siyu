import { IonContent, IonPage } from '@ionic/react';
import { AuthHeader } from '@src/components/Elements/AuthHeader';
import { Button } from '@src/components/Elements/Button';
import { Icon } from '@src/components/Elements/Icon';
import { StringField } from '@src/components/Form/StringField';
import { LocalStorageKeys } from '@src/constants/local-storage-keys';
import { useMutationRegister } from '@src/features/auth/api/useMutationRegister';
import { handleErrorMessage } from '@src/libs/api/api';
import { components } from '@src/libs/api/schemas';
import clsx from 'clsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

type FormInput = {
    email: string;
    password: string;
    confirmPassword: string;
    displayName: string;
}

export const RegisterPage = () => {

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Contexts                                                                                       <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> State                                                                                          <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Libs                                                                                           <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    // I18n
    const { t } = useTranslation();

    // Router
    const history = useHistory();

    // Form
    const { register, control, handleSubmit } = useForm<FormInput>();

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Queries                                                                                        <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    const mutation = useMutationRegister({});

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Getters                                                                                        <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Callbacks                                                                                      <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    const onSubmit: SubmitHandler<FormInput> = async (data) => {
        try {
            // Build body
            const body = {
                email: data.email,
                displayName: data.displayName,
                password: data.password,
                confirmPassword: data.confirmPassword,
            } as components['schemas']['RegisterDto'];

            // Perform request
            const response = await mutation.mutateAsync({ body });

            if (response?.data) {
                localStorage.setItem(LocalStorageKeys.AccessToken, response.data.accessToken);
                window.location.reload();
            }
        } catch (error) {
            handleErrorMessage(error);
        }
    };

    return (
        <IonPage>
            <IonContent>
                <AuthHeader />

                <div
                    className={ clsx([
                        'bg-white absolute inset-0',
                        'flex flex-col items-center justify-center gap-32',
                    ]) }
                >
                    <div className="flex flex-col items-center gap-16">
                        <Icon
                            i='Logo'
                            width={ 100 }
                            height={ 100 }
                            color='accent'
                        />

                        <p
                            onClick={ () => history.replace('/') }
                            className='font-light text-xl'
                        >
                            Créer un compte
                        </p>
                    </div>

                    <form
                        onSubmit={ handleSubmit(onSubmit) }
                        className='w-full px-32 gap-8 flex flex-col'
                    >
                        <StringField
                            registration={ register('email') }
                            control={ control }
                            placeholder={ t('register-page.form.email') }
                            centered
                        />

                        <StringField
                            registration={ register('displayName') }
                            control={ control }
                            placeholder={ t('register-page.form.displayName') }
                            centered
                        />

                        <StringField
                            registration={ register('password') }
                            control={ control }
                            placeholder={ t('register-page.form.password') }
                            centered
                        />

                        <StringField
                            registration={ register('confirmPassword') }
                            control={ control }
                            placeholder={ t('register-page.form.confirmPassword') }
                            centered
                        />

                        <Button
                            type='submit'
                            className='w-full justify-center'
                        >
                            <span>{t('button.validate')}</span>
                        </Button>
                    </form>

                </div>
            </IonContent>
        </IonPage>
    );
};
