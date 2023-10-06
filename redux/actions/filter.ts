import * as t from '../types';

export const setDataFilter = (data: string) => ({
    type: t.SET_DATA_FILTER,
    payload: data,
});

export const setError = (error: { title: string; severityError: string }) => ({
    type: t.ERROR,
    payload: {
        ...error,
    },
});
