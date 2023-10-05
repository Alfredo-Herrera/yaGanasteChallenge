import { interfaceHeaderTable } from '@/atoms/HeadTable/type';
import { InterfaceTableRows } from '@/molecules/RowTable/type';

export type InterfaceGenericTable = {
    dense: boolean;
    dataHeader: interfaceHeaderTable;
    tableData: InterfaceTableRows[];
};
