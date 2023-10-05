import TableBank from '@/Cells/TableBank';
import { dataFormater } from '@/helper/dataFormater';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import { InterfaceTableRows } from '@/molecules/RowTable/type';
import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import { GetServerSideProps } from 'next';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

type BankListProps = {
    bankList: BankProps[];
};
export type BankProps = {
    description: string;
    bankName: string;
    age: number;
    url: string;
};

const Home: NextPageWithLayout<BankListProps> = ({ bankList }) => {
    const dataBank = dataFormater(bankList) as InterfaceTableRows[];
    console.log('🚀 ~ file: index.tsx:21 ~ dataBank:', dataBank);
    return (
        <Grid
            container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Paper elevation={5} sx={{ width: '90%', borderRadius: '20px' }}>
                <TableBank data={dataBank} />
            </Paper>
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
