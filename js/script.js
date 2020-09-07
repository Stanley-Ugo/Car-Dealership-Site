

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
})();