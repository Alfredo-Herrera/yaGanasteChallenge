import { Button, Grid, styled } from '@mui/material';

export const FormContainer = styled(Grid)`
    width: 100%;
    ${(props) => props.theme.breakpoints.up('sm')} {
        width: 40%;
    }
    ${(props) => props.theme.breakpoints.up('md')} {
        width: 40%;
    }
    ${(props) => props.theme.breakpoints.up('lg')} {
        width: 40%;
    }
`;

export const ButtonForm = styled(Button)({
    marginTop: '20px',
    borderRadius: '30px',
});
