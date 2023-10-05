import HeaderTable from '@/atoms/HeadTable';
import RowTable from '@/molecules/RowTable';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { FC } from 'react';
import { InterfaceGenericTable } from './type';

const GenericTable: FC<InterfaceGenericTable> = ({
    dense,
    dataHeader,
    tableData,
}) => (
    <>
        <Table aria-label="simple table" size={dense ? 'small' : 'medium'}>
            <HeaderTable
                widthHead={dataHeader.widthHead}
                data={dataHeader.data}
            />
            <TableBody>
                {tableData.map((itemRow) => (
                    <RowTable
                        key={itemRow.id}
                        row={itemRow.row}
                        id={itemRow.id}
                    />
                ))}
            </TableBody>
        </Table>
    </>
);

export default GenericTable;
