interface Véhicule {
    make: string;
    model: string;
    year: number;
    start(): void;
}

class Voiture implements Véhicule {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log("Car engine started");
    }
}

const maVoiture = new Voiture("Bmw", "M5", 2024);

maVoiture.start();