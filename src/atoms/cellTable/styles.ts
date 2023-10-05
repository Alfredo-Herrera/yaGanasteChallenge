import styled from '@emotion/styled';
import TableCell from '@mui/material/TableCell';
import breakpoints from '../../../styles/theme/breakpoints';

interface StyledTableCellProps {
    readonly disableMobile?: boolean;
}

export const TableCellStyled = styled(TableCell, {
    shouldForwardProp: (propName) => propName !== 'disableMobile',
})<StyledTableCellProps>`
    @media (max-width: ${breakpoints.values.sm}px) {
        display: ${(props) => (props.disableMobile ? 'none' : '')};
    }
`;
