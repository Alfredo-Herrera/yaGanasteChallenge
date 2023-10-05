export type interfaceHeaderTable = {
    widthHead: string;
    data: interfaceHeaderDataTable[];
};

export type interfaceHeaderDataTable = {
    id: string;
    label: string;
    disableMobile: boolean;
    align: 'right' | 'inherit' | 'left' | 'center' | 'justify' | undefined;
};
