import { FieldSharedProps, FieldWrapper } from '@src/components/Form/FieldWrapper';
import clsx from 'clsx';
import { HTMLInputTypeAttribute } from 'react';

type StringFieldProps = {
    autoCapitalize?: string;
    autoFocus?: boolean;
    autoComplete?: string;
    centered?: boolean;
    type?: HTMLInputTypeAttribute;
    className?: string;
} & FieldSharedProps;

export const StringField = ({
    // Specific
    autoCapitalize = 'off',
    autoFocus = false,
    autoComplete = 'off',
    centered = false,
    type = 'text',

    // Shared
    registration,
    error,
    label,
    placeholder,
    helpText,
    readonly = false,
    disabled = false,
    className,
}: StringFieldProps) => {

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Libs                                                                                           <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

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
        <FieldWrapper
            label={ label }
            helpText={ helpText }
            error={ error }
            className={ className }
        >
            <div
                className={ clsx([
                    'flex',
                    'w-full h-50 rounded-medium',
                    'bg-softer-grey border border-softer-grey [&:hover:not(:disabled,:read-only)]:border-accent [&:focus:not(:disabled,:read-only)]:border-accent',
                    'outline-hidden ease-in-out duration-150',
                    !disabled && !readonly && 'hover:border-accent focus-within:border-accent',
                    (disabled || readonly) && 'bg-soft-grey border-soft-grey text-grey placeholder:text-grey! cursor-not-allowed',
                    error && 'border-error!',
                ]) }
            >
                <input
                    type={ type }
                    placeholder={ placeholder }
                    readOnly={ readonly }
                    disabled={ disabled }
                    autoCapitalize={ autoCapitalize }
                    autoFocus={ autoFocus }
                    autoComplete={ autoComplete }
                    className={ clsx([
                        'w-full px-16 py-4 rounded-medium',
                        'outline-hidden font-light placeholder:text-soft-grey',
                        (disabled || readonly) && 'bg-soft-grey border-soft-grey text-grey placeholder:text-grey! cursor-not-allowed',
                        centered && 'text-center',
                        error && 'border-error!',
                    ]) }
                    { ...registration }
                />
            </div>
        </FieldWrapper>
    );
};
