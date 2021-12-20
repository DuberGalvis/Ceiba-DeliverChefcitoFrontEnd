import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Button } from 'app/shared/components/Button';
import { Input } from 'app/shared/components/Input';
import { SpanError } from './styles';
import { FormikHelpers, useFormik } from 'formik';
import { Usuario } from '../../models/Usuario';

interface FormValues {
    nombre: string;
    clave: string;
}

interface PaginaIniciarSesionProp {
    onSubmit: (payload: Usuario) => any;
    disabled?: boolean;
    paginaTitle: string;
    initialValues?: FormValues;
}

const validationSchema = Yup.object().shape<FormValues>({
    nombre: Yup.string().required('El campo nombre es requerido.'),
    clave: Yup.string().required('El campo clave es requerido.'),
});

export const PaginaIniciarSesion: React.FC<PaginaIniciarSesionProp> = ({
    onSubmit,
    disabled,
    paginaTitle,
    initialValues = {
        nombre: '',
        clave: '',
    },
}) => {
    const handleSubmit = (
        values: FormValues,
        { resetForm }: FormikHelpers<FormValues>
    ) => {
        onSubmit({
            nombre: values.nombre,
            clave: values.clave,
        });
        resetForm();
    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit:handleSubmit,
    });
    
    return(
        <form onSubmit= {formik.handleSubmit}>
            <h2>{paginaTitle}</h2>
            <Input
                disabled={disabled}
                name="nombre"
                placeholder="Nombre"
                value={formik.values.nombre}
                onChange={formik.handleChange} 
            />
            {formik.touched.nombre && formik.errors.nombre && (
                <SpanError>{formik.errors.nombre}</SpanError>
            )}
            <Input
                disabled={disabled}
                name="clave"
                placeholder="Clave"
                value={formik.values.clave}
                onChange={formik.handleChange} 
            />
            {formik.touched.clave && formik.errors.clave && (
                <SpanError>{formik.errors.clave}</SpanError>
            )}
            <Button type="submit">Siguiente</Button>
        </form>
    );
};

PaginaIniciarSesion.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    paginaTitle: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    initialValues: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        clave: PropTypes.string.isRequired,
    }),
};
