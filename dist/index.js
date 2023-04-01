"use strict";
class Vehicle {
    constructor(make, model, year, rented) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    get GetMake() {
        return this.make;
    }
    get GetModel() {
        return this.model;
    }
    get GetYear() {
        return this.year;
    }
    get GetRented() {
        return this.rented;
    }
    set SetMake(value) {
        if (value === "") {
            throw new Error("CANNOT ENTER EMPTY STRING. Enter A Valid Brand Name");
        }
        this.make = value;
    }
    set Setmodel(value) {
        if (value === "") {
            throw new Error("CANNOT ENTER EMPTY STRING. Enter A Valid Model Name");
        }
        this.model = value;
    }
    set SetYear(value) {
        if (value >= 2024) {
            throw new Error("ENTER CORRECT YEAR");
        }
        this.year = value;
    }
    set SetRent(value) {
        this.rented = value;
    }
    rent() {
        if (this.rented) {
            return `${this.make} ${this.model} is not available at this moment. Please Contact later.`;
        }
        else {
            this.rented = true;
            return `You rented ${this.make} ${this.model}`;
        }
    }
    return() {
        if (this.rented) {
            this.rented = false;
            return `Thanks for returning us ${this.make} ${this.model}.`;
        }
        else {
            return `${this.make} ${this.model} is available at this moment.`;
        }
    }
}
class Bike extends Vehicle {
    constructor(_make, _model, _year, _rented, _EngineSize, _color) {
        super(_make, _model, _year, _rented);
        this._make = _make;
        this._model = _model;
        this._year = _year;
        this._rented = _rented;
        this._EngineSize = _EngineSize;
        this._color = _color;
    }
    get GetEngineSize() {
        return this._EngineSize;
    }
    get GetColor() {
        return this._color;
    }
    set SetEngineSize(value) {
        this.SetEngineSize = value;
    }
    set SetColor(value) {
        this._color = value;
    }
    rentalRate() {
        return 2000;
    }
}
class Truck extends Vehicle {
    constructor(_make, _model, _year, _rented, _size) {
        super(_make, _model, _year, _rented);
        this._make = _make;
        this._model = _model;
        this._year = _year;
        this._rented = _rented;
        this._size = _size;
    }
    get GetSize() {
        return this._size;
    }
    set SetSize(value) {
        this._size = value;
    }
    rentalRate() {
        let rent;
        if (this._size === 18) {
            return rent = 10000;
        }
        else if (this._size === 20) {
            return rent = 15000;
        }
        return rent = 20000;
    }
}
class Car extends Vehicle {
    constructor(_make, _model, _year, _rented, _color) {
        super(_make, _model, _year, _rented);
        this._make = _make;
        this._model = _model;
        this._year = _year;
        this._rented = _rented;
        this._color = _color;
    }
    get ColorGetter() {
        return this._color;
    }
    set value(value) {
        this._color = value;
    }
    rentalRate() {
        return 5000;
    }
}
let Honda125 = new Bike("Honda", "CD125", 2018, false, 125, "Black");
let Elentra = new Car("Hundai", "Elentra", 2020, true, "White");
let Hino = new Truck("Hino", "exe", 2018, false, 20);
let BedFord = new Truck("BedFord", "332fd", 2000, true, 20);
BedFord.SetSize = 22;
console.log(BedFord.rentalRate());
console.log(BedFord.rent());
console.log(BedFord.return());
console.log(BedFord.rent());
console.log(BedFord.return());
console.log(`Rent of ${Honda125.GetMake} ${Honda125.GetModel} is ${Honda125.rentalRate()}PKR per day.`);
//# sourceMappingURL=index.js.map