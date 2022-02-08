import styled from 'styled-components';

export const DivProducto = styled.div`
    text-decoration: none;
    box-shadow: 8px 14px 38px rgba(39,44,49,0.06), 1px 3px 8px rgba(39,44,49,0.03);
    border-radius: 5px;
    margin: 0 0 20px 0;
    position: relative;
`;

export const DivProductoInfo = styled.div`
    padding: 10px;
`;

export const H2ProductoInfo = styled.div`
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
`;

export const ImgProducto = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 5px 5px 0 0;
    object-fit: contain;
`;

export const PProductoInfo = styled.p`
    font-size: 14px;
    font-weight: 100;
`;
