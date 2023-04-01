abstract class Vehicle {
  private make: string;
  private model: string;
  private year: number;
  private rented: boolean;

  constructor(make: string, model: string, year: number, rented: boolean) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.rented = rented;
  }

  public get GetMake(): string {
    return this.make;
  }

  public get GetModel(): string {
    return this.model;
  }

  public get GetYear(): number {
    return this.year;
  }

  public get GetRented(): boolean {
    return this.rented;
  }

  public set SetMake(value: string) {
    if (value === "") {
      throw new Error("CANNOT ENTER EMPTY STRING. Enter A Valid Brand Name");
    }
    this.make = value;
  }

  public set Setmodel(value: string) {
    if (value === "") {
      throw new Error("CANNOT ENTER EMPTY STRING. Enter A Valid Model Name");
    }
    this.model = value;
  }

  public set SetYear(value: number) {
    if (value >= 2024) {
      throw new Error("ENTER CORRECT YEAR");
    }
    this.year = value;
  }

  public set SetRent(value: boolean) {
    this.rented = value;
  }

  abstract rentalRate(): number;

  rent() {
    if (this.rented) {
      return `${this.make} ${this.model} is not available at this moment. Please Contact later.`;
    } else {
      this.rented = true;
      return `You rented ${this.make} ${this.model}`;
    }
  }
  return() {
    if (this.rented) {
      this.rented = false;
      return `Thanks for returning us ${this.make} ${this.model}.`;
    } else {
        return  `${this.make} ${this.model} is available at this moment.` 
    }
  }
}

class Bike extends Vehicle {
  constructor(
    private _make: string,
    private _model: string,
    private _year: number,
    private _rented: boolean,
    private _EngineSize: 70 | 100 | 125 | 150,
    private _color: "Black" | "Red" | "White"
  ) {
    super(_make, _model, _year, _rented);
  }

  public get GetEngineSize(): number {
    return this._EngineSize;
  }

  public get GetColor(): string {
    return this._color;
  }

  public set SetEngineSize(value: 70 | 100 | 125 | 150) {
    this.SetEngineSize = value;
  }

  public set SetColor(value: "Black" | "Red" | "White") {
    this._color = value;
  }

  public rentalRate(): number {
    return 2000;
  }
}

class Truck extends Vehicle {
  constructor(
    private _make: string,
    private _model: string,
    private _year: number,
    private _rented: boolean,
    private _size: 18 | 20 | 22
  ) {
    super(_make, _model, _year, _rented);
  }

  public get GetSize() {
    return this._size;
  }

  public set SetSize(value: 18 | 20 | 22) {
    this._size = value;
  }

  rentalRate(): number {
    let rent
    if (this._size === 18) {
      return rent = 10000      
    } else if (this._size === 20) {
      return rent = 15000
    } 
    return rent = 20000
    
  }
}

class Car extends Vehicle {
  constructor(
    private _make: string,
    private _model: string,
    private _year: number,
    private _rented: boolean,
    private _color: "Gray" | "Black" | "White"
  ) {
    super(_make, _model, _year, _rented);
  }

  public get ColorGetter() {
    return this._color;
  }

  public set value(value: "Gray" | "Black" | "White") {
    this._color = value;
  }

  rentalRate(): number {
    return 5000;
  }
}

let Honda125 = new Bike("Honda", "CD125", 2018, false, 125, "Black");
let Elentra = new Car("Hundai", "Elentra", 2020, true, "White");
let Hino = new Truck("Hino", "exe", 2018, false, 20);
let BedFord = new Truck("BedFord", "332fd", 2000, true, 20);

BedFord.SetSize = 22

console.log(BedFord.rentalRate());

console.log(BedFord.rent());

console.log(BedFord.return());
console.log(BedFord.rent());

console.log(BedFord.return());


console.log(`Rent of ${Honda125.GetMake} ${Honda125.GetModel} is ${Honda125.rentalRate()}PKR per day.`);
