import { IonContent, IonPage } from '@ionic/react';
import { AuthHeader } from '@src/components/Elements/AuthHeader';
import { Button } from '@src/components/Elements/Button';
import { Icon } from '@src/components/Elements/Icon';
import { StringField } from '@src/components/Form/StringField';
import { LocalStorageKeys } from '@src/constants/local-storage-keys';
import { useMutationLogin } from '@src/features/auth/api/useMutationLogin';
import { handleErrorMessage } from '@src/libs/api/api';
import { components } from '@src/libs/api/schemas';
import clsx from 'clsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

type FormInput = {
    email: string;
    password: string;
}

export const LoginPage = () => {

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Libs                                                                                           <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    // I18n
    const { t } = useTranslation();

    // Form
    const { register, control, handleSubmit } = useForm<FormInput>();

    // Router
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

    const mutation = useMutationLogin({});

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
                password: data.password,
            } as components['schemas']['LoginDto'];

            // // Perform request
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
                            {t('login-page.title')}
                        </p>
                    </div>

                    <form
                        onSubmit={ handleSubmit(onSubmit) }
                        className='w-full px-32 gap-8 flex flex-col'
                    >
                        <StringField
                            registration={ register('email') }
                            control={ control }
                            placeholder={ t('login-page.form.email') }
                            type='email'
                            centered
                        />

                        <StringField
                            registration={ register('password') }
                            control={ control }
                            placeholder={ t('login-page.form.password') }
                            type='password'
                            centered
                        />

                        <Button
                            type='submit'
                            className='w-full justify-center'
                            loading={ mutation.isPending }
                            disabled={ mutation.isPending }
                        >
                            <span>{t('button.validate')}</span>
                        </Button>
                    </form>

                </div>
            </IonContent>
        </IonPage>
    );
};
