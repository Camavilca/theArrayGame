
function generatorArray() {
    let _lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    _lista = _lista.sort(function () { return Math.random() - 0.5 });
    return _lista;
}

function main() {
    let _firstArray = generatorArray();
    let _numMax = numMax(_firstArray);
    gamingArray(_firstArray, _numMax);
}

function numMax(arr) {
    let _mayor = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > _mayor) {
            _mayor = arr[i];
        }
    }
    return _mayor;
}

function gamingArray(arr, numMax) {

    let _mayor = numMax(arr);

    let position = arr.indexOf(numMax);
    let quantity = arr.length;
    let delet = quantity - position;

    arr.splice(position, delet)

    /** se debe retornar el array para seguir con el siguiente turno */

    let contador = 0;

    // if (arr.length > 0) {
    //     console.log(contador++)
    //     gamingArray(arr, numMax(arr));
    // }





    console.log("CANTIDAD DE ARRAY: => " + arr.length);
    console.log("LISTA DE ARRAY: => " + arr);
    console.log("NUMERO MAYOR ENCONTRADO: => " + numMax);
    console.log("POSITION DEL ELEGIDO: => " + position);
    console.log("DATOS A ELIMINAR: => " + delet)


    // return arr;

}


main();


