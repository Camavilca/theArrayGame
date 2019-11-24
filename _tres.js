
const generatorArray = () => {
    let _lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    _lista = _lista.sort(function () { return Math.random() - 0.5 });
    return _lista;
}

function main() {
    let arr = generatorArray();
    gamingArray(arr);
}

function gamingArray(arr) {

    // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let mayor = 0;

    // arr = arr.sort(function () { return Math.random() - 0.5 });

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
        }
    }

    /**POSICION DEL MAYOR */
    let position = arr.indexOf(mayor);
    let quantity = arr.length;

    let delet = quantity - position;


    console.log(arr.splice(position, delet));



    console.log("CANTIDAD: => " + arr.length);
    console.log("LISTA: => " + arr);
    console.log("MAYOR: => " + mayor);
    console.log("POSITION: => " + position);
    console.log("DELETE: => " + delet)

}


main();


