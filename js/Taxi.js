class Taxi {
    constructor(name) {
        this.name = name;
        this.totalDistance = 0;
        this.price = 1;
        this.profit = 0;
    }
    // fxCr(num){
    //     return num.toFixed(2) + ' Eur'
    // }
    intro(){
        console.log(`Sveiki, as ${this.name} ir kilometro kaina su manimi yra 1.00 Eur.`);
    }
    updatePrice(newPrice){
        this.price = newPrice;
        console.log(`${this.name} nustate nauja kilometro kaina - ${newPrice.toFixed(2)} Eur.`);
    }
    ride(distance){
        this.totalDistance += distance;
        this.profit += distance * this.price
    }
    stats(){
        console.log(`${this.name} nuvaziavo ${this.totalDistance} km ir uzdirbo ${this.profit} Eur.`);
    }
}

module.exports = Taxi;