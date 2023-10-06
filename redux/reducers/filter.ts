import { AlertColor } from '@mui/material/Alert';
import * as t from '../types';

export interface MyStateProps {
    data: string;
    error: {
        title: string;
        severityError: AlertColor;
    };
}

export interface filter {
    filter: MyStateProps;
}

const MyState: MyStateProps = {
    data: '',
    error: {
        title: '',
        severityError: 'success',
    },
};

// eslint-disable-next-line default-param-last
const Filter = (state = MyState, action: { type: any; payload: any }) => {
    switch (action.type) {
        case t.RESET_STATE:
            return {
                loading: false,
                data: [],
                error: {
                    title: '',
                    severityError: 'success',
                },
            };
        case t.ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case t.SET_DATA_FILTER:
            return {
                ...state,
                data: action.payload,
                error: '',
            };
        default:
            return { ...state };
    }
};

export default Filter;
