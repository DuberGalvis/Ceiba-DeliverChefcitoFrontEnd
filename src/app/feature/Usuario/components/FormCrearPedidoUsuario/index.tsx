import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Button } from 'app/shared/components/Button';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { Pedido } from '../../../Pedido/models/Pedido';
import { SpanError } from './styles';
import { useFormik } from 'formik';
import { Producto } from 'app/feature/Producto/models/Producto';
import { Usuario } from '../../models/Usuario';
import { Reunion } from 'app/feature/Reunion/models/Reunion';

const fechaDeHoy: Date = new Date();
const valorPedido = (producto: string, 
    reunion: string) => {
        if(!producto && !reunion){
            return 0;
        }
        if(!producto && reunion){
            return JSON.parse(reunion).precio;
        }
        if(!reunion && producto){
            return JSON.parse(producto).precio;
        }

        let valorProducto: number = JSON.parse(producto).precio;
        let valorReunion: number = JSON.parse(reunion).precio;
                
        return valorProducto + valorReunion;
};
interface FormValues {
    usuario: string;
    producto: string;
    reunion: string;
    fechaRealizacion: string;
    direccion: string;
    valorTotal: string;
    horasDeServicio: string;
}

interface FormCrearPedidoUsuarioProp {
  onSubmit: (payload: Pedido) => any;
  disabled?: boolean;
  formTitle: string;
  productos: Producto[];
  usuarios: Usuario[];
  reuniones: Reunion[];
  initialValues?: FormValues;
}

const validationSchema = Yup.object().shape<FormValues>({
    usuario: Yup.string().required('El Usuario es requerido.'),
    producto: Yup.string().required('El Producto es requerido.'),
    reunion: Yup.string().required('La Reunion es requerido.'),
    fechaRealizacion: Yup.string().required('El Fecha  de Realizacion es requerido.'),
    direccion: Yup.string().required('El campo Direccion es requerido.'),
    valorTotal: Yup.string().required('El campo Valor Total es requerido.'),
    horasDeServicio: Yup.string().required('El campo Horas de Servicio es requerido.'),
});

export const FormCrearPedidoUsuario: React.FC<FormCrearPedidoUsuarioProp> = ({
    onSubmit,
    disabled,
    formTitle,
    usuarios,
    productos,
    reuniones,
    initialValues = {
        usuario: JSON.stringify(usuarios[0]),
        producto: '',
        reunion: '',
        fechaRealizacion: '',
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
        usuario: JSON.parse(values.usuario),
        producto: JSON.parse(values.producto),
        reunion: JSON.parse(values.reunion),
        fechaRealizacion: new Date(values.fechaRealizacion).toISOString(),
        direccion: values.direccion,
        valorTotal: valorPedido(values.producto, values.reunion),
        horasDeServicio: parseInt(values.horasDeServicio, 10),
    });
    resetForm();
    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit:handleSubmit,
    });
    // const valor: number = !formik.values.producto && !formik.values.reunion ? 
    // 0 : 
    // JSON.parse(formik.values.producto).precio + JSON.parse(formik.values.producto).precio;
    let valor = valorPedido(formik.values.producto, formik.values.reunion)
    console.log(valor);
    return(
        <form onSubmit= {formik.handleSubmit}>
            <h2>{formTitle}</h2>
            <p>
                <label>
                    Tipos de Reuniones:{' '}
                    <select 
                        name="reunion"  
                        onChange={formik.handleChange}>
                        {reuniones.map((reunion) => (
                        <option value={JSON.stringify(reunion)}>{reunion.tipo} | Precio: {reunion.precio}</option>
                        ))}
                    </select>
                </label>
            </p>
                <label>
                Productos:{' '}
                <select 
                    name="producto" 
                    onChange={formik.handleChange}>
                    {productos.map((producto) => (
                    <option value={JSON.stringify(producto)}>Nombre: {producto.nombre} | Precio: {producto.precio}</option>
                    ))}
                </select>
            </label>
            <p>
                <label>
                    Fecha e inicio de Realización:
                </label>
            </p>
            <Input 
                type="date"
                disabled={disabled}
                name="fechaRealizacion"
                min={new Date(fechaDeHoy.getTime() + (24 * 60 * 60 * 1000)).toString()} 
                step="1"
                value={formik.values.fechaRealizacion}
                onChange={formik.handleChange}
            />
            {formik.touched.fechaRealizacion && formik.errors.fechaRealizacion && (
                <SpanError>{formik.errors.fechaRealizacion}</SpanError>
            )}

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
            <label htmlFor="valorTotalPedido">Valor Total Pedido:{valor}</label>
            <Button type="submit">Hacer Pedido</Button>
        </form>
    );
};

FormCrearPedidoUsuario.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    formTitle: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    initialValues: PropTypes.shape({
        usuario: PropTypes.string.isRequired,
        producto: PropTypes.string.isRequired,
        reunion: PropTypes.string.isRequired,
        fechaRealizacion: PropTypes.string.isRequired,
        direccion: PropTypes.string.isRequired,
        valorTotal: PropTypes.string.isRequired,
        horasDeServicio: PropTypes.string.isRequired,
    }),
};
