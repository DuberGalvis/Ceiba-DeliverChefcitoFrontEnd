import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Button } from 'app/shared/components/Button';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { CambioClaveUsuario } from '../../models/CambioClaveUsuario';
import { SpanError } from './styles';
import { useFormik } from 'formik';
import { Usuario } from '../../models/Usuario';

interface FormValues {
    claveActual: string;
    nuevaClave: string;
    confirmarNuevaClave: string;
}

interface FormActualizarContrasenaProp {
    onSubmit: (payload: CambioClaveUsuario) => any;
    disabled?: boolean;
    formTitle: string;
    usuario: Usuario;
    initialValues?: FormValues;
}

const validationSchema = Yup.object().shape<FormValues>({
    claveActual: Yup.string().required('El campo clave actual es requerido.'),
    nuevaClave: Yup.string().required('El campo de nueva clave es requerido.'),
    confirmarNuevaClave: Yup.string().oneOf([Yup.ref('nuevaClave'), undefined], 'Error, La nueva clave no coincide')
    .required('El campo de confirmar nueva clave es requerido.')
    .min(4),
});

export const FormActualizarContrasena: React.FC<FormActualizarContrasenaProp> = ({
    onSubmit,
    disabled,
    formTitle,
    usuario,
    initialValues = {
        claveActual: '',
        nuevaClave: '',
        confirmarNuevaClave: '',
    },
}) => {
    const handleSubmit = (
        values: FormValues,
        { resetForm }: FormikHelpers<FormValues>
    ) => {
        onSubmit({
            nombre: usuario.nombre,
            claveActual: values.claveActual,
            nuevaClave: values.nuevaClave,
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
            <h2>{formTitle}</h2>
            <Input
                disabled={disabled}
                name="claveActual"
                placeholder="Clave Actual"
                value={formik.values.claveActual}
                onChange={formik.handleChange} 
            />
            {formik.touched.claveActual && formik.errors.claveActual && (
                <SpanError>{formik.errors.claveActual}</SpanError>
            )}
            <Input
                disabled={disabled}
                name="nuevaClave"
                placeholder="Ingrese la nueva Clave"
                value={formik.values.nuevaClave}
                onChange={formik.handleChange} 
            />
            {formik.touched.nuevaClave && formik.errors.nuevaClave && (
                <SpanError>{formik.errors.nuevaClave}</SpanError>
            )}
            <Input
                disabled={disabled}
                name="confirmarNuevaClave"
                placeholder="Confirme la Nueva Clave"
                value={formik.values.confirmarNuevaClave}
                onChange={formik.handleChange} 
            />
            {formik.touched.confirmarNuevaClave && formik.errors.confirmarNuevaClave && (
                <SpanError>{formik.errors.confirmarNuevaClave}</SpanError>
            )}
            <Button type="submit">Registrar</Button>
        </form>
    );
};

FormActualizarContrasena.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    formTitle: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    usuario: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        clave: PropTypes.string.isRequired,
    }).isRequired,
    initialValues: PropTypes.shape({
        claveActual: PropTypes.string.isRequired,
        nuevaClave: PropTypes.string.isRequired,
        confirmarNuevaClave: PropTypes.string.isRequired,
    }),
};
