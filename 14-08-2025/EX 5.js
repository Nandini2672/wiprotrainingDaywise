
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}


class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year);
        this.numDoors = numDoors;
    }

    getInfo() {
        return `${super.getInfo()} - ${this.numDoors} doors`;
    }
}


const vehicle = new Vehicle("Toyota", "Corolla", 2015);
const car = new Car("Honda", "Civic", 2022, 4);

document.getElementById("vehicleInfo").textContent = 
    "Vehicle Info: " + vehicle.getInfo();

document.getElementById("carInfo").textContent = 
    "Car Info: " + car.getInfo();
