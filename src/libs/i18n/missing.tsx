import { useTranslation } from 'react-i18next';

export const MissingI18nKeys = () => {
    const { t } = useTranslation();

    t('zod.required');

    t('api.register.email.format');
    t('api.register.email.taken');
    t('api.register.password.mismatch');
    t('api.login.user.not-found');
    t('api.login.password.invalid');

    return <></>;
};
