import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Button } from 'app/shared/components/Button';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { CambioClaveUsuario } from '../../models/CambioClaveUsuario';
import { SpanError } from './styles';
import { useFormik } from 'formik';
import store from 'app/core/redux/store';

let mensajeClaveErronea: string = '';
interface FormValues {
    nombre: string;
    claveActual: string;
    nuevaClave: string;
    confirmarNuevaClave: string;
}

interface FormActualizarContrasenaProp {
    onSubmit: (payload: CambioClaveUsuario) => any;
    disabled?: boolean;
    formTitle: string;
    initialValues?: FormValues;
}

const validationSchema = Yup.object().shape<FormValues>({
    nombre: Yup.string().required('El campo nombre es requerido.'),
    claveActual: Yup.string().required('El campo clave actual es requerido.'),
    nuevaClave: Yup.string().required('El campo de nueva clave es requerido.'),
    confirmarNuevaClave: Yup.string().required('El campo de confirmar nueva clave es requerido.'),
});

export const FormActualizarContrasena: React.FC<FormActualizarContrasenaProp> = ({
    onSubmit,
    disabled,
    formTitle,
    initialValues = {
        nombre: store.getState().usuario.usuarios[0].nombre,
        claveActual: '',
        nuevaClave: '',
        confirmarNuevaClave: '',
    },
}) => {
    const handleSubmit = (
        values: FormValues,
        { resetForm }: FormikHelpers<FormValues>
    ) => {
        if(values.nuevaClave !== values.confirmarNuevaClave){
            mensajeClaveErronea = `Error, La nueva clave no coincide, 
            ingrese correctamente la nueva clave.`;
            resetForm();               
        } else {
            onSubmit({
                nombre: values.nombre,
                claveActual: values.claveActual,
                nuevaClave: values.nuevaClave,
            });
            resetForm();
        }
    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit:handleSubmit,
    });

    return(
        <form onSubmit= {formik.handleSubmit}>
            <h2>{formTitle}</h2>
            <SpanError>{mensajeClaveErronea}</SpanError>
            <Input
                disabled={true}
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
    initialValues: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        claveActual: PropTypes.string.isRequired,
        nuevaClave: PropTypes.string.isRequired,
        confirmarNuevaClave: PropTypes.string.isRequired,
    }),
};
