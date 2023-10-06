import SeccionForm from '@/Cells/Form';
import Alerts from '@/atoms/Alerts';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import Grid from '@mui/material/Grid';
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { main } from '../../redux/reducers/main';

const Contact = () => {
    const { error, loading } = useSelector((state: main) => state.main);

    return (
        <Grid
            item
            md={12}
            sx={{
                display: 'grid',
                placeItems: 'center',
                width: '100%',
            }}
        >
            <Alerts {...error} />
            <SeccionForm />
        </Grid>
    );
};

Contact.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout title="Contact">{page}</MainLayout>;
};

export default Contact;
