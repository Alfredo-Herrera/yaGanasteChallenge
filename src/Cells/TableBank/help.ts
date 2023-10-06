import { interfaceHeaderDataTable } from '@/atoms/HeadTable/type';

export const titlesHeader: interfaceHeaderDataTable[] = [
    {
        id: 'image',
        label: 'Imagen',
        disableMobile: false,
        align: 'left',
    },
    {
        id: 'name',
        label: 'Nombre',
        align: 'left',
        disableMobile: false,
    },
    {
        id: 'description',
        label: 'Descripcion',
        align: 'left',
        disableMobile: true,
    },
    {
        id: 'anio',
        label: 'Año',
        align: 'left',
        disableMobile: true,
    },
    {
        id: 'details',
        label: 'Detalles',
        align: 'left',
        disableMobile: false,
    },
];
