/**
 * Obtener el valor de la carta
 * @param {String} carta  recibe un string como parametro
 * @returns {Number} retorna el valor de la carta obtenida
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}