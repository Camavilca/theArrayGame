class Game {
    constructor(arr) {
        this._lista = arr;
        this._mayor = 0;
    }

    generatorArray() {
        this._lista = this._lista.sort(function () { return Math.random() - 0.5 });
        return this._lista;
    }

    numMax() {
        for (let i = 0; i < this._lista.length; i++) {
            const element = this._lista[i];
            if (element > this._mayor) {
                this._mayor = element;
            }
        }
        return this._mayor;
    }

    reducer() {
        let position = this._lista.indexOf(this._mayor);
        let quantity = this._lista.length;
        let delet = quantity - position;
        this._lista.splice(position, delet)
        return this._lista;
    }
}

function main(arr, index) {
    let game = new Game(arr);
    let _generate = null;
    let _numeroMax = null;
    let _reducer = null;
    let _contador = index;
    if (_contador == 0) {
        _generate = game.generatorArray();
        console.log("\nPRIMER ARRAY " + _generate + "\n");
    }
    _numeroMax = game.numMax();
    _reducer = game.reducer();
    _contador++;
    console.log("Array ] Mayor: " + _numeroMax);
    console.log("Array ] Nuevo: " + _reducer);
    console.log("Array ] Length: " + _reducer.length);
    console.log("_________________________________________")
    if (_reducer.length > 0) {
        main(_reducer, _contador)
    } else {
        if (_contador % 2 == 0) {
            console.log("\n\nGANO ANDY :)");
        } else {
            console.log("\n\nGANO BOB :)");
        }
    }
}

main([1, 2, 3, 4, 5, 6, 7, 8, 9], 0);





