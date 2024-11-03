
/**
 * Esta funcion permite definir el valor de la Carta
 * @param {String} carta Ejemplo: '9C'
 * @returns {Number} El valor de la carta en cuestion
 */

export const valorCarta = ( carta ) => {
    
    if(!carta || carta.length < 1) throw new Error('Debe de recibir una carta');

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}

// export default valorCarta;