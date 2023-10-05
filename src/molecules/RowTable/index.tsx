import CellTable from '@/atoms/cellTable';
import TableRow from '@mui/material/TableRow';
import React, { FC, memo } from 'react';
import { InterfaceTableRows } from './type';

const RowTable: FC<InterfaceTableRows> = ({ row, id }) => {
    return (
        <React.Fragment key={id}>
            <TableRow key={id}>
                {row.map((itemCell, index) => {
                    const key = `${itemCell.type}-${index}`;
                    return <CellTable {...itemCell} key={key} />;
                })}
            </TableRow>
        </React.Fragment>
    );
};

export default memo(RowTable);
