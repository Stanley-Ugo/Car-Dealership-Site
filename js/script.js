

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
        makeCar()
    }

})();