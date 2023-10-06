import InputFilter from '@/atoms/InputFilter';
import { InterfaceTableRows } from '@/molecules/RowTable/type';
import GenericTable from '@/organisms/GenericTable';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDataFilter } from '../../../redux/actions/filter';
import { filter } from '../../../redux/reducers/filter';
import { titlesHeader } from './help';

type TableProps = {
    data: InterfaceTableRows[];
};

const TableBank: FC<TableProps> = ({ data }) => {
    const { data: dataFilter } = useSelector((state: filter) => state.filter);

    console.log('🚀 ~ file: index.tsx:17 ~ dataFilter:', dataFilter);

    const dispatch = useDispatch();

    const searchDataFilter = (name: string) => {
        const newData = data.filter((item) => {
            const dataString = item.row[1].children as string;
            if (dataString!.includes(name)) {
                return item;
            }
        });
        return newData;
    };

    const [filterData, setFilterData] = useState(searchDataFilter(dataFilter));

    const seachArray = (name: string) => {
        dispatch(setDataFilter(name));
        setFilterData(searchDataFilter(name));
    };

    return (
        <>
            <InputFilter
                placeHolder={'Filtro por nombre'}
                filterName={dataFilter}
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
