import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef, Ref } from 'react';

// eslint-disable-next-line react/display-name
export const TransitionModal = forwardRef(
    (
        props: TransitionProps & {
            children: React.ReactElement;
        },
        ref: Ref<unknown>
    ) => <Slide direction="up" ref={ref} {...props} />
);
