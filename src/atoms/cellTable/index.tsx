import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { TableCellStyled } from './styles';
import { InterfaceCellTable } from './type';

const CellTable: FC<InterfaceCellTable> = ({
    align,
    textTransform,
    width,
    children,
    type,
    text,
    button,
    disableMobile,
}) => (
    <TableCellStyled
        disableMobile={disableMobile}
        align={align}
        sx={{ textTransform: { textTransform } }}
        width={width}
    >
        {type === 'text' ? (
            <Typography variant={text?.variant} sx={{ color: text?.color }}>
                {children}
            </Typography>
        ) : (
            <Button size={button?.size} onClick={button?.onClick}>
                {button?.title}
            </Button>
        )}
    </TableCellStyled>
);

export default CellTable;
