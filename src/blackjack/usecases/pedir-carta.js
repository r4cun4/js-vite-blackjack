/**
 * Esta funcion te permite tomar una carta
 * @param {Array<String>} deck es un arreglo de cartas
 * @returns {String} retorna la carta eliminada del deck
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error ('No hay cartas en el deck');
    }

    const carta = deck.pop();
    return carta;
}