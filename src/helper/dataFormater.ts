import { InterfaceCellTable } from '@/atoms/cellTable/type';
import { InterfaceTableRows } from '@/molecules/RowTable/type';
import { BankProps } from '../../pages';

export const dataFormater = (
    dataArray: BankProps[],
    callBack: () => void,
    dataModal: (dataViewModal: BankProps) => void
): InterfaceTableRows[] => {
    return dataArray.map((itemArray, index) => {
        return {
            row: [
                {
                    ...dataStructure(itemArray.url, 'avatar', false),
                    avatar: {
                        url: itemArray.url,
                        alt: itemArray.bankName,
                    },
                },
                { ...dataStructure(itemArray.bankName, 'text', false) },
                { ...dataStructure(itemArray.description, 'text', true) },
                { ...dataStructure(itemArray.age, 'text', true) },
                {
                    ...dataStructure(itemArray.age, 'button', false),
                    button: {
                        size: 'small',
                        onClick: () => {
                            callBack();
                            dataModal(itemArray);
                        },
                        title: 'details',
                        icon: 'details',
                    },
                },
            ],
            id: `${index}-cell-${itemArray.bankName}`,
        };
    });
};

const dataStructure = (
    children: any,
    type: any,
    disableMobile: boolean
): InterfaceCellTable => {
    return {
        type: type,
        align: 'left',
        width: '25',
        children,
        disableMobile,
        text: { color: 'black', variant: 'subtitle2' },
    };
};
