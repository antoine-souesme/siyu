import { zodResolver } from '@hookform/resolvers/zod';
import { IonContent, IonPage } from '@ionic/react';
import { AuthHeader } from '@src/components/Elements/AuthHeader';
import { Button } from '@src/components/Elements/Button';
import { Icon } from '@src/components/Elements/Icon';
import { ApiFormError } from '@src/components/Form/ApiFormError';
import { LocalFormError } from '@src/components/Form/LocalFormError';
import { StringField } from '@src/components/Form/StringField';
import { LocalStorageKeys } from '@src/constants/local-storage-keys';
import { useMutationRegister } from '@src/features/auth/api/useMutationRegister';
import { handleErrorMessage } from '@src/libs/api/api';
import { components } from '@src/libs/api/schemas';
import clsx from 'clsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { z } from 'zod';

type FormInput = {
    email: string;
    password: string;
    confirmPassword: string;
    displayName: string;
}

const schema = z.object({
    email: z.string().min(1, 'zod.required'),
    password: z.string().min(1, 'zod.required'),
    confirmPassword: z.string().min(1, 'zod.required'),
    displayName: z.string().min(1, 'zod.required'),
});

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
    const { register, control, handleSubmit, formState: {errors} } = useForm<FormInput>({
        resolver: zodResolver(schema),
    });

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
                            {t('register-page.title')}
                        </p>
                    </div>

                    <form
                        onSubmit={ handleSubmit(onSubmit) }
                        className='w-full px-32 gap-8 flex flex-col'
                    >
                        <StringField
                            registration={ register('email') }
                            control={ control }
                            error={ errors.email }
                            placeholder={ t('register-page.form.email') }
                            centered
                        />

                        <StringField
                            registration={ register('displayName') }
                            control={ control }
                            error={ errors.displayName }
                            placeholder={ t('register-page.form.displayName') }
                            centered
                        />

                        <StringField
                            registration={ register('password') }
                            control={ control }
                            error={ errors.password }
                            placeholder={ t('register-page.form.password') }
                            centered
                        />

                        <StringField
                            registration={ register('confirmPassword') }
                            control={ control }
                            error={ errors.confirmPassword }
                            placeholder={ t('register-page.form.confirmPassword') }
                            centered
                        />

                        <ApiFormError error={ mutation.error } />
                        <LocalFormError errors={ errors } />

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
