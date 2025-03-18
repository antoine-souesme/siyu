
import { Color } from '@src/types/color';
import { addStyleToElement } from '@src/utils/dom';
import clsx from 'clsx';
import { CSSProperties, useCallback, useMemo } from 'react';
import { ReactSVG } from 'react-svg';

type IconProps = {
    i: string;
    external?: boolean;
    width?: number;
    height?: number;
    type?: string;
    className?: string;
    style?: CSSProperties;
    color?: Color | 'currentColor';
}

export type IconPassThroughProps = Omit<IconProps, 'i'>;

export const Icon = ({
    i,
    external = false,
    width = 16,
    height,
    type = 'svg',
    color = 'currentColor',
    ...props
}: IconProps) => {

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Getters                                                                                        <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    const beforeInjection = useCallback((svg: SVGSVGElement) => {
        addStyleToElement(svg, `width: ${width}px`);

        if (height) {
            addStyleToElement(svg, `height: ${height}px`);
        }
    }, [width, height]);

    const ReactSVGMemo = useMemo(() => {
        return (
            <ReactSVG
                className={ clsx('root-component-Icon', `text-${color}`, props.className) }
                src={ external ? i : `/icons/${i}.svg` }
                beforeInjection={ beforeInjection }
            />
        );
    }, [external, i, type, color, props.className]);

    return (
        ReactSVGMemo
    );
};
