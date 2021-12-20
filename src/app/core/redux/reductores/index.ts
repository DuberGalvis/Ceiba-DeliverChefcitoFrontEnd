import { combineReducers } from 'redux';
import productos from './productos/productosReductor';
import reunion from './reunion/reunionReductor';
import usuario from './usuario/usuarioReductor';

export default combineReducers({ productos, reunion, usuario });
