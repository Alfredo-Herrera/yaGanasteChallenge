import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { FC } from 'react';
import { TableCellStyled } from './styles';
import { interfaceHeaderTable } from './type';

const HeaderTable: FC<interfaceHeaderTable> = ({ data, widthHead = '50%' }) => (
    <TableHead sx={{ width: widthHead }}>
        <TableRow>
            {data.map((tab, index) => (
                <TableCellStyled
                    disableMobile={tab.disableMobile}
                    align={tab.align}
                    key={`${tab.label}-${index}`}
                >
                    {tab.label}
                </TableCellStyled>
            ))}
        </TableRow>
    </TableHead>
);

export default HeaderTable;
