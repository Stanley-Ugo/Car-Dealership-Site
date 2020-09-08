

window.addEventListener('load', () => document.querySelector('.preloader')
.classList.add('hidePreloader'));

const CreateCars = (() => {
    //car data
    const cars = [];

    //car class
    class Car {
        constructor(make, country, img, special, model, price, type, trans, gas) {
            this.make = make;
            this.country = country;
            this.img = img;
            this.special = special;
            this.model = model;
            this.price = price;
            this.type = type;
            this.trans = trans;
            this.gas = gas;
        }     
    }

    //car creation function
    function makeCar (make, country, img = 'img/car-default.jpeg', special = true, model = 'new model', price = 5000000, type = 'sedan', trans = 'automatic', gas = '50') {

        const car = new Car(make, country, img, special, model, price, type, trans, gas);
        cars.push(car);
    }
    //produce car function
    function produceCars() {
        makeCar('chevy', 'american');
        makeCar('mercedes', 'german', 'img/car-german-1.jpeg', true);
        makeCar('bmw', 'german', 'img/car-german-2.jpeg');
        makeCar('bmw', 'german', 'img/car-german-3.jpeg', false, 'some model');
        makeCar('bmw', 'german', 'img/car-german-4.jpeg', undefined, 'other model');
        makeCar('mercedes', 'german', 'img/car-german-5.jpeg', false);
        makeCar('chevy', 'american', 'img/car-american-1.jpeg');
        makeCar('chevy', 'american', 'img/car-american-2.jpeg', false);
        makeCar('chevy', 'american', 'img/car-american-3.jpeg', false);
        makeCar('chevy', 'american', 'img/car-american-4.jpeg', false);
        makeCar('chevy', 'american', 'img/car-american-5.jpeg', false);
    }
    produceCars();
    // console.log(cars);
    //special cars
    const specialCars = cars.filter(cars => cars.special === true);
    // console.log(specialCars);

    return {
        cars,
        specialCars
    }

})();

const DisplaySpecialCars = ((CreateCars) => {
    const specialCars = CreateCars.specialCars;
    //console.log(specialCars);

    const info = document.querySelector('.featured-info');

    //document loaded event.
    document.addEventListener('DOMContentLoaded', () => {
        
    })

})(CreateCars);