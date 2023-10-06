import { TransitionModal } from '@/atoms/TransitionModal';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
import { ModalTakeDecisionProps } from './types';

const ModalTakeDecision: FC<ModalTakeDecisionProps> = ({
    title,
    description,
    openModal,
    closeModal,
    img,
    moreInfo,
}) => {
    return (
        <Dialog
            open={openModal}
            TransitionComponent={TransitionModal}
            keepMounted
            onClose={() => {}}
            aria-labelledby="modalTakeDesition"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="modalTakeDesition">Detalles del Banco</DialogTitle>
            <DialogContent
                sx={{
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Image
                        src={img}
                        alt={'imagenModal'}
                        width={130}
                        height={130}
                    />
                </Box>
                <Typography variant="subtitle1">Banco: {title}</Typography>
                <Typography variant="subtitle1">
                    Eslogan: {description}
                </Typography>
                <Typography variant="subtitle1">{moreInfo}</Typography>
            </DialogContent>
            <DialogActions>
                <Button
                    color="error"
                    variant="contained"
                    onClick={() => closeModal(false)}
                >
                    cerrar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ModalTakeDecision;
