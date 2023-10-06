import VisibilityIcon from '@mui/icons-material/Visibility';
import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { TableCellStyled } from './styles';
import { IconDictionary, InterfaceCellTable } from './type';

const icons = (iconName: string) => {
    const icon: IconDictionary = {
        details: <VisibilityIcon />,
    };
    return icon[iconName] || icon.details;
};

const CellTable: FC<InterfaceCellTable> = ({
    align,
    width,
    children,
    type,
    text,
    button,
    disableMobile,
    avatar,
}) => {
    const buttonIcon = button?.icon || 'details';
    return (
        <TableCellStyled
            disableMobile={disableMobile}
            align={align}
            width={width}
        >
            {type === 'text' ? (
                <Typography variant={text?.variant} sx={{ color: text?.color }}>
                    {children}
                </Typography>
            ) : type === 'avatar' ? (
                <Avatar
                    alt={avatar?.alt}
                    src={avatar?.url}
                    sx={{ width: 56, height: 56 }}
                />
            ) : (
                <Button size={button?.size} onClick={button?.onClick}>
                    {icons(buttonIcon)}
                </Button>
            )}
        </TableCellStyled>
    );
};

export default CellTable;
