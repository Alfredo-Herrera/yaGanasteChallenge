import { ReactNode } from 'react';

export type InterfaceCellTable = {
    align: 'left' | 'center' | 'right' | 'justify' | 'inherit' | undefined;
    textTransform?: string;
    width: string;
    children: ReactNode | ReactNode[];
    type: string;
    disableMobile: boolean;
    text?: {
        color: string;
        variant:
            | 'inherit'
            | 'button'
            | 'caption'
            | 'h1'
            | 'h2'
            | 'h3'
            | 'h4'
            | 'h5'
            | 'h6'
            | 'overline'
            | 'subtitle1'
            | 'subtitle2'
            | 'body1'
            | 'body2'
            | undefined;
    };
    button?: {
        title: string;
        icon: string;
        onClick: () => void;
        size: 'small' | 'medium' | 'large' | undefined;
    };
    avatar?: {
        url: string;
        alt: string;
    };
};
