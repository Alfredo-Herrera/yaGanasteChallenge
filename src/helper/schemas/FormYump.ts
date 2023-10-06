import * as Yup from 'yup';

export const DATA_SCHEMA = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'El numero de caracteres es muy corto')
        .max(50, 'El numero de caracteres es muy grande ')
        .required('El Nombre es un campo requerido'),
    lastName: Yup.string()
        .min(2, 'El numero de caracteres es muy corto')
        .max(50, 'El numero de caracteres es muy grande ')
        .required('El Apellido es un campo requerido'),
    email: Yup.string()
        .email('Ingrese un Email Valido')
        .required('El Email es un campo requerido'),
    phone: Yup.number()
        .typeError('Este campo solo acepta numeros')
        .min(10, 'El numero de caracteres es muy grande')
        .required('El Numero es un campo requerido'),
});
