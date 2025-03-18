import clsx from 'clsx';
import React, { ForwardedRef, forwardRef } from 'react';

const colors = {
    white: 'bg-white text-accent border-white active:bg-softer-grey active:border-softer-grey',
    accent: 'bg-accent text-white border-accent active:bg-accent-dark active:border-accent-dark',
};

const variants = {
    primary: '',
    outlined: 'bg-transparent! border-transparent! hover:border-current!',
};

const sizes = {
    normal: 'w-fit p-8 px-14 h-50',
    small: 'w-fit px-6 py-8 h-38',
    square: 'h-50 w-50 flex items-center justify-center',
    'square-small': 'h-22 w-22 flex items-center justify-center',
};

export type ButtonProps = {
    color?: keyof typeof colors,
    variant?: keyof typeof variants,
    size?: keyof typeof sizes,
    loading?: boolean;
    fullWidth?: boolean;
    icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    color = 'accent',
    variant = 'primary',
    size = 'normal',
    loading = false,
    icon,
    fullWidth = false,
    className,

    // Button props
    type = 'button',
    disabled,
    ...props
}, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
        <button
            ref={ ref }
            type={ type }
            tabIndex={ -1 }
            className={ clsx(
                'transition-colors duration-150 cursor-pointer',
                'flex items-center rounded-full border gap-6',
                'font-medium uppercase select-none',
                colors[color],
                variants[variant],
                sizes[size],
                disabled && 'opacity-50 cursor-default pointer-events-none text-black',
                fullWidth && 'w-full justify-between',
                className,
            ) }
            { ...props }
        >
            {props.children}

            {(!loading && icon) && icon }

            {/* TODO: Implement loading */}
            {/* {loading &&
                <Spinner
                    className={ clsx([
                        (size === 'normal' || size === 'small') && 'ml-8',
                    ]) }
                    width={ (size === 'small' || size === 'square-small') ? 14 : 20 }
                />
            } */}
        </button>
    );
});

Button.displayName = 'Button';
