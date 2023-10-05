import InputFilter from '@/atoms/InputFilter';
import { InterfaceTableRows } from '@/molecules/RowTable/type';
import GenericTable from '@/organisms/GenericTable';
import { FC, useState } from 'react';
import { titlesHeader } from './help';

type TableProps = {
    data: InterfaceTableRows[];
};

const TableBank: FC<TableProps> = ({ data }) => {
    const searchDataFilter = (name: string) => {
        const newData = data.filter((item) => {
            const dataString = item.row[1].children as string;
            if (dataString!.includes(name)) {
                return item;
            }
        });
        return newData;
    };

    const [filterData, setFilterData] = useState(searchDataFilter(''));

    const seachArray = (name: string) => {
        setFilterData(searchDataFilter(name));
    };

    return (
        <>
            <InputFilter
                placeHolder={'Filtro por nombre'}
                filterName={''}
                callBackReturn={seachArray}
            />
            <GenericTable
                dense={false}
                dataHeader={{
                    widthHead: '100%',
                    data: titlesHeader,
                }}
                tableData={filterData}
            />
        </>
    );
};

export default TableBank;
