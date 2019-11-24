function generatorArray() {
    let _lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    _lista = _lista.sort(function () { return Math.random() - 0.5 });
    return _lista;
}

function main() {
    let _contador = 0;
    let _firstArray = null;
    let _array = null;
    let _numMax = null;
    if (_contador = 0) {
        _firstArray = generatorArray();
    } else {
        _firstArray = _array;
    }
    _numMax = numMax(_firstArray);
    _array = gamingArray(_firstArray, _numMax);
    main();
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
    let position = arr.indexOf(numMax);
    let quantity = arr.length;
    let delet = quantity - position;
    arr.splice(position, delet)
    return arr;
}


main();


