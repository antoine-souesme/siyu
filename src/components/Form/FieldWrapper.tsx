import clsx from 'clsx';
import { Control, FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type FieldWrapperProps = {
    label?: string;
    helpText?: string;
    placeholder?: string;
    error?: FieldError | string | undefined;
    children: React.ReactNode;
    className?: string;
}

export type FieldSharedProps = {
    // Form specific props
    registration: Partial<UseFormRegisterReturn>;
    control: Control<any>;
    error?: FieldError | string | undefined;

    // Text props
    label?: string;
    helpText?: string;
    placeholder?: string;

    // State props
    readonly?: boolean;
    disabled?: boolean;

    // Callbacks props
    onClearValue?: () => void;

    // Style props
    className?: string;
}

export const FieldWrapper = ({
    error,
    label,
    helpText,
    children,
    className,
}: FieldWrapperProps) => {

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Libs                                                                                           <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    // I18n
    const { t } = useTranslation();

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
        <div
            className={ clsx([
                '',
                className,
            ]) }
        >
            {label &&
                <div className='flex items-center mb-8 min-h-[18px]'>
                    <p
                        className={ clsx([
                            'text-text-normal text-medium font-light gap-4 flex items-center',
                        ]) }
                    >
                        {label}
                    </p>
                </div>
            }

            {helpText &&
                <p className='text-dark-grey text-small font-medium mb-8'>
                    {helpText}
                </p>
            }

            <div className='flex flex-col gap-8'>
                {children}
            </div>

            {(error as FieldError) &&
                <div className={ clsx('mt-8 text-red-600 font-medium') }>
                    {((error as any)?.message === null) &&
                        <p>{t('field-wrapper.default-error')}</p>
                    }

                    {((error as any).message !== null) &&
                        <p>
                            {t((error as FieldError).message!)}
                        </p>
                    }
                </div>
            }
        </div>
    );
};
