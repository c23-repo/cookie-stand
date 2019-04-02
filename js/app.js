'use strict'

var hours = [600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000];
var customers = {
  store: '1st and Pike',
  minCustHr: 23,
  maxCustHr: 65,
  customerHr: [],
  avgCookieHr: 6.3,
  saleHr: [],
  // Picks a random number between min and max
  randomizer: function(){
    var min = Math.ceil(this.minCustHr);
    var max = Math.floor(this.maxCustHr);
    return Math.floor(Math.random()*(max - min + 1)) + min;
  },
  // Inputs random number into the Array at the given index
  hourRandomizer: function(){
    for (let i = 0; i < hours.length; i++){
      this.customerHr.push(this.randomizer());
    }
    return this.customerHr;
  },
  // Calculates the number of cookies sold per hour based on the number of customers at given index
  saleCalc: function(){
    for (let i = 0; i < hours.length; i++){
      this.saleHr.push(this.avgCookieHr * this.customerHr[i]);
    }
    console.log(this.saleHr);
    return this.saleHr;
  },
  saleTotal: function getsum(total, num){
    return total + num;
  },
};
 
console.log(customers);

customers.randomizer();

console.log(customers.randomizer());

customers.hourRandomizer();

console.log(customers.hourRandomizer());

customers.saleCalc();
