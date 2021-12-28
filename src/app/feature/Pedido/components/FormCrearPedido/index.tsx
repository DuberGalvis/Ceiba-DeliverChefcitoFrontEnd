import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Button } from 'app/shared/components/Button';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { Pedido } from '../../models/Pedido';
import { SpanError } from './styles';
import { useFormik } from 'formik';

const fechaDeHoy: Date = new Date();
interface FormValues {
    nombreUsuario: string;
    nombreProducto: string;
    tipoReunion: string;
    fechaRealizacion: string;
    direccion: string;
    valorTotal: number;
    horasDeServicio: number;
}

interface FormCrearPedidoProp {
  onSubmit: (payload: Pedido) => any;
  disabled?: boolean;
  formTitle: string;
  initialValues?: FormValues;
}

const validationSchema = Yup.object().shape<FormValues>({
    nombreUsuario: Yup.string().required('El Usuario es requerido.'),
    nombreProducto: Yup.string().required('El Producto es requerido.'),
    tipoReunion: Yup.string().required('La Reunion es requerido.'),
    fechaRealizacion: Yup.string().required('El Fecha  de Realizacion es requerido.'),
    direccion: Yup.string().required('El campo Direccion es requerido.'),
    valorTotal: Yup.number().required('El campo Valor Total es requerido.'),
    horasDeServicio: Yup.number().required('El campo Horas de Servicio es requerido.'),
});

export const FormCrearPedido: React.FC<FormCrearPedidoProp> = ({
    onSubmit,
    disabled,
    formTitle,
    initialValues = {
        nombreUsuario: '',
        nombreProducto: '',
        tipoReunion: '',
        fechaRealizacion: new Date(fechaDeHoy.getTime() + (24 * 60 * 60 * 1000)).toISOString(),
        direccion: '',
        valorTotal: 0,
        horasDeServicio: 0,
  },
}) => {
  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
) => {
    onSubmit({
        nombreUsuario: values.nombreUsuario,
        nombreProducto: values.nombreProducto,
        tipoReunion: values.tipoReunion,
        fechaRealizacion: values.fechaRealizacion,
        direccion: values.direccion,
        valorTotal: values.valorTotal,
        horasDeServicio: values.horasDeServicio,
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
                name="direccion"
                placeholder="Dirección"
                value={formik.values.direccion}
                onChange={formik.handleChange} 
            />
            {formik.touched.direccion && formik.errors.direccion && (
                <SpanError>{formik.errors.direccion}</SpanError>
            )}
            <Input
                disabled={disabled}
                name="horasDeServicio"
                placeholder="Numero de Horas del servicio"
                value={formik.values.horasDeServicio}
                onChange={formik.handleChange} 
            />
            {formik.touched.horasDeServicio && formik.errors.horasDeServicio && (
                <SpanError>{formik.errors.horasDeServicio}</SpanError>
            )}
            <Button type="submit">Hacer Pedido</Button>
        </form>
    );
};

FormCrearPedido.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    formTitle: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    initialValues: PropTypes.shape({
        nombreUsuario: PropTypes.string.isRequired,
        nombreProducto: PropTypes.string.isRequired,
        tipoReunion: PropTypes.string.isRequired,
        fechaRealizacion: PropTypes.string.isRequired,
        direccion: PropTypes.string.isRequired,
        valorTotal: PropTypes.number.isRequired,
        horasDeServicio: PropTypes.number.isRequired,
    }),
};
