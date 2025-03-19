import { useTranslation } from 'react-i18next';

export const MissingI18nKeys = () => {
    const { t } = useTranslation();

    t('zod.required');

    return <></>;
};
