import { combineReducers } from 'redux';
import productos from './productos/productosReductor';
import reunion from './reunion/reunionReductor';
import usuario from './usuario/usuarioReductor';
import pedidos from './pedidos/pedidosReductor';

export default combineReducers({ productos, reunion, usuario, pedidos });
