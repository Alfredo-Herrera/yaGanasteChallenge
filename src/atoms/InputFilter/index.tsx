import { Button, InputAdornment, Stack, TextField } from '@mui/material';
import { KeyboardEvent, memo, useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';

type Props = {
    placeHolder: string;
    filterName: string;
    callBackReturn: (name: string) => void;
};

const InputFilter = ({ placeHolder, filterName, callBackReturn }: Props) => {
    const [filterNameState, setFilterName] = useState(filterName);

    const handleFilterName = (filterName: string) => {
        setFilterName(filterName);
    };

    const handleSearchButton = () => {
        callBackReturn(filterNameState);
    };

    const handlekeyDownCapture = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            handleSearchButton();
        }
    };

    return (
        <Stack
            spacing={2}
            direction={{ xs: 'column', sm: 'row' }}
            sx={{ py: 2.5, px: 3 }}
        >
            <TextField
                fullWidth
                color="info"
                value={filterNameState}
                onKeyDownCapture={handlekeyDownCapture}
                onChange={(event) => handleFilterName(event.target.value)}
                placeholder={placeHolder}
                variant="standard"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />

            <Button
                color="info"
                size="large"
                endIcon={<SearchIcon />}
                onClick={handleSearchButton}
            >
                Buscar
            </Button>
        </Stack>
    );
};

export default memo(InputFilter);
