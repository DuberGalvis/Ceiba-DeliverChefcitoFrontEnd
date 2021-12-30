import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Button } from 'app/shared/components/Button';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { Pedido } from '../../models/Pedido';
import { SpanError } from './styles';
import { useFormik } from 'formik';
import { Usuario } from 'app/feature/Usuario/models/Usuario';
import { Producto } from 'app/feature/Producto/models/Producto';
import { Reunion } from 'app/feature/Reunion/models/Reunion';

const fechaDeHoy: Date = new Date();
interface FormValues {
    fechaRealizacion: string;
    direccion: string;
    valorTotal: string;
    horasDeServicio: string;
}

interface FormCrearPedidoProp {
  onSubmit: (payload: Pedido) => any;
  disabled?: boolean;
  formTitle: string;
  usuario: Usuario;
  producto: Producto;
  reunion: Reunion;
  initialValues?: FormValues;
}

const validationSchema = Yup.object().shape<FormValues>({
    fechaRealizacion: Yup.string().required('El Fecha  de Realizacion es requerido.'),
    direccion: Yup.string().required('El campo Direccion es requerido.'),
    valorTotal: Yup.string().required('El campo Valor Total es requerido.'),
    horasDeServicio: Yup.string().required('El campo Horas de Servicio es requerido.'),
});

export const FormCrearPedido: React.FC<FormCrearPedidoProp> = ({
    onSubmit,
    disabled,
    formTitle,
    usuario = {nombre: '', clave: ''},
    producto = {nombre: '', detalle: '', precio: 0},
    reunion = {tipo: '', precio: 0},
    initialValues = {
        fechaRealizacion: new Date(fechaDeHoy.getTime() + (24 * 60 * 60 * 1000)).toISOString(),
        direccion: '',
        valorTotal: '0',
        horasDeServicio: '0',
  },
}) => {
  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
) => {
    onSubmit({
        usuario,
        producto,
        reunion,
        fechaRealizacion: values.fechaRealizacion,
        direccion: values.direccion,
        valorTotal: parseInt(values.valorTotal),
        horasDeServicio: parseInt(values.horasDeServicio),
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
        fechaRealizacion: PropTypes.string.isRequired,
        direccion: PropTypes.string.isRequired,
        valorTotal: PropTypes.string.isRequired,
        horasDeServicio: PropTypes.string.isRequired,
    }),
};
