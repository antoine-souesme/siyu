import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { RouteComponentProps } from 'react-router';

type LoginPageProps = {
    className?: string;
} & RouteComponentProps;

type FormInput = {
    email: string;
}

export const LoginPage = ({
    className,
}: LoginPageProps) => {

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Libs                                                                                           <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    // I18n
    // const { t } = useTranslation();

    // Form
    // const { register, handleSubmit } = useForm<FormInput>();

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

    // const onSubmit: SubmitHandler<FormInput> = async (data) => {
    //     try {

    //         const response = await mutateAsyncSendLink({
    //             email: data.email,
    //             context: {
    //                 scheme: true,
    //                 callback: 'bodih://',
    //             },
    //         });

    //         console.log(response);

    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                Login page


            </IonContent>
        </IonPage>
    );
};
