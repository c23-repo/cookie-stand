'use strict'

var hours = [600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000];
var customers = {
  store: '1st and Pike',
  minCustHr: 23,
  maxCustHr: 65,
  customerHr: [],
  avgCookieHr: 6.3,
  saleHr: [],
  randomizer: function(){
    var min = Math.ceil(this.minCustHr);
    var max = Math.floor(this.maxCustHr);
    return Math.floor(Math.random()*(max - min + 1)) + min;
  },
  hourRandomizer: function(){
    for (var i = 0; i < hours.length; i++){
      this.customerHr.push(this.randomizer());
    }
    console.log(this.customerHr);
    return this.customerHr;
  },
};

customers.randomizer();

console.log(customers.randomizer());

customers.hourRandomizer();

console.log(customers.hourRandomizer());