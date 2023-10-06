import { DATA_SCHEMA } from '@/helper/schemas/FormYump';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useFormik as FORMIK } from 'formik';
import { useDispatch } from 'react-redux';
import { setDataPage } from '../../../redux/actions/main';
import { Texts } from './help';
import { ButtonForm, FormContainer } from './styles';

const SeccionForm = () => {
    const dispatch = useDispatch();
    const fields: string[] = ['firstName', 'lastName', 'email', 'phone'];
    const { handleSubmit, errors, touched, getFieldProps } = FORMIK({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        },
        onSubmit: async (values, { resetForm }) => {
            dispatch(setDataPage(values));
            resetForm();
        },
        validationSchema: DATA_SCHEMA,
    });

    const PROPS_SIZE = {
        type: 'text',
        fullWidth: true,
    };

    return (
        <>
            <FormContainer container>
                <Grid
                    item
                    xs={12}
                    sx={{
                        display: 'flex',
                        marginTop: '10px',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="h4">Contactanos</Typography>
                </Grid>
                <Grid item xs={12} sx={{ marginTop: '20px' }}>
                    <form onSubmit={handleSubmit}>
                        {fields.map((field, index: number) => {
                            const key = `${index}-${field}`;
                            return (
                                <Grid item key={key} sx={{ margin: '10px' }}>
                                    <Typography variant="h6">
                                        {
                                            Texts.form[
                                                field as keyof typeof Texts.form
                                            ].title
                                        }
                                    </Typography>
                                    <TextField
                                        {...PROPS_SIZE}
                                        placeholder={
                                            Texts.form[
                                                field as keyof typeof Texts.form
                                            ].placeholder
                                        }
                                        variant="standard"
                                        {...getFieldProps(field)}
                                        error={
                                            touched[
                                                field as keyof typeof touched
                                            ] &&
                                            Boolean(
                                                errors[
                                                    field as keyof typeof errors
                                                ]
                                            )
                                        }
                                        helperText={
                                            touched[
                                                field as keyof typeof touched
                                            ] &&
                                            errors[field as keyof typeof errors]
                                        }
                                    />
                                </Grid>
                            );
                        })}
                        <Box
                            sx={{
                                margin: '20px 10px 20px 10px',
                            }}
                        >
                            <ButtonForm
                                variant="contained"
                                fullWidth
                                type="submit"
                            >
                                Enviar
                            </ButtonForm>
                        </Box>
                    </form>
                </Grid>
            </FormContainer>
        </>
    );
};

export default SeccionForm;
