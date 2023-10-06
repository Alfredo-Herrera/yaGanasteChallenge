import TableBank from '@/Cells/TableBank';
import { dataFormater } from '@/helper/dataFormater';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import ModalTakeDecision from '@/molecules/ModalInfo';
import { InterfaceTableRows } from '@/molecules/RowTable/type';
import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import { GetServerSideProps } from 'next';
import { ReactElement, useState } from 'react';
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
    const [dataModal, setDataModal] = useState<BankProps>();
    const [viewModal, setViewModal] = useState(false);
    const viewModalOpen = () => {
        setViewModal((prevState) => !prevState);
    };
    const setDataViewModal = (dataModalView: BankProps) => {
        setDataModal(dataModalView);
    };
    const dataBank = dataFormater(
        bankList,
        viewModalOpen,
        setDataViewModal
    ) as InterfaceTableRows[];

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
            <ModalTakeDecision
                moreInfo={`Edad: ${dataModal?.age}`}
                img={dataModal?.url || ''}
                title={dataModal?.bankName || ''}
                description={dataModal?.description || ''}
                decisionFuntion={viewModalOpen}
                openModal={viewModal}
                closeModal={viewModalOpen}
                loading={false}
            />
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
