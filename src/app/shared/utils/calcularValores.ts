export const calcularValores = (producto: string, 
    reunion: string, esFestivo: boolean) => {
        const doble = 2;
        if(!producto && !reunion){
            return 0;
        }
        if(!producto){
            return JSON.parse(reunion).precio;
        }
        if(!reunion){
            return JSON.parse(producto).precio;
        }
        let valorTotal: number = JSON.parse(producto).precio + JSON.parse(reunion).precio;
        if(esFestivo){
            valorTotal *= doble;
        }                
        return valorTotal;
};
