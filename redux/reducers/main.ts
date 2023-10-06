import { AlertColor } from '@mui/material/Alert';
import * as t from '../types';

export interface MyStateProps {
    loading: boolean;
    data: [];
    error: {
        title: string;
        severityError: AlertColor;
    };
    viewData: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    };
}

export interface main {
    main: MyStateProps;
}

const MyState: MyStateProps = {
    data: [],
    error: {
        title: '',
        severityError: 'success',
    },
    viewData: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    },
    loading: false,
};

// eslint-disable-next-line default-param-last
const Main = (state = MyState, action: { type: any; payload: any }) => {
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
        case t.LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case t.ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case t.SET_DATA:
            return {
                ...state,
                data: action.payload,
                error: '',
            };
        default:
            return { ...state };
    }
};

export default Main;
