import MainLayout from '@/layouts/MainLayout/MainLayout';
import Grid from '@mui/material/Grid';
import { GetServerSideProps } from 'next';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

type BankListProps = {
    bankList: BankProps[];
};
type BankProps = {
    description: string;
    bankName: string;
    age: number;
    url: string;
};

const Home: NextPageWithLayout<BankListProps> = ({ bankList }) => {
    console.log('🚀 ~ file: index.tsx:7 ~ Home ~ bankList:', bankList);
    return (
        <Grid
            container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Grid
                item
                md={4}
                sx={{
                    display: 'grid',
                    placeItems: 'center',
                }}
            >
                hola
            </Grid>
            <Grid
                item
                md={4}
                sx={{
                    display: 'grid',
                    placeItems: 'center',
                }}
            >
                hola
            </Grid>
        </Grid>
    );
};

export const getServerSideProps = (async (context) => {
    const res = await fetch(
        'https://dev.obtenmas.com/catom/api/challenge/banks'
    );
    const repo = await res.json();
    return { props: { bankList: repo } };
}) satisfies GetServerSideProps<{
    bankList: BankListProps;
}>;

Home.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout title="Dashboard">{page}</MainLayout>;
};

export default Home;
