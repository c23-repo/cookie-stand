'use strict';

var hours = [600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000];
var customers = {
  store: '1st and Pike',
  minCustHr: 23,
  maxCustHr: 65,
  customerHr: [],
  avgCookieHr: 6.3,
  saleHr: [],
  saleTotal: 0,
  // Picks a random number between min and max
  randomizer: function(){
    // line from MDN Math.random docs
    // var min = Math.ceil(this.minCustHr);
    // var max = Math.floor(this.maxCustHr);
    return Math.floor(Math.random()*(this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },
  // Inputs random number into the Array at the given index
  hourRandomizer: function(){
    for (let i = 0; i < hours.length; i++){
      this.customerHr.push(this.randomizer());
    } 
    console.log(this.customerHr);
    return this.customerHr;
  },
  // Calculates the number of cookies sold per hour based on the number of customers at given index
  saleCalc: function(){
    for (let i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.customerHr[i] * this.avgCookieHr);
      this.saleHr.push(oneHour);
      // configure the total of the array
      this.saleTotal += oneHour;
    }
    // console.log(this.saleTotal);
  },
  render: function(){
    var ulEl = document.getElementById("storeStats1");
    for (var i = 0; i < hours.length; i++){
      // Create, content, append
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.saleHr[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    // Create, content, append
    liEl = document.createElement('li');
    liEl.textContent = ` Total = ${this.saleTotal} cookies`;
    ulEl.appendChild(liEl);
  }
};

// customers.randomizer();
customers.hourRandomizer();
customers.saleCalc();
customers.render();
// customers.saleHr.reduce(saleTotal());
// var ulEl = document.getElementById("storeStats1");


 
console.log(customers);


// console.log(customers.randomizer());


// console.log(customers.hourRandomizer());

// // SeaTac Airport

// var customers2 = {
//   store: 'SeaTac Airport',
//   minCustHr: 3,
//   maxCustHr: 24,
//   customerHr: [],
//   avgCookieHr: 1.2,
//   saleHr: [],
//   // Picks a random number between min and max
//   randomizer: function(){
//     // line from MDN Math.random docs
//     var min = Math.ceil(this.minCustHr);
//     var max = Math.floor(this.maxCustHr);
//     return Math.floor(Math.random()*(max - min + 1)) + min;
//   },
//   // Inputs random number into the Array at the given index
//   hourRandomizer: function(){
//     for (let i = 0; i < hours.length; i++){
//       this.customerHr.push(this.randomizer());
//     }
//     return this.customerHr;
//   },
//   // Calculates the number of cookies sold per hour based on the number of customers at given index
//   saleCalc: function(){
//     for (let i = 0; i < hours.length; i++){
//       this.saleHr.push(this.avgCookieHr * this.customerHr[i]);
//       // rounding the decimal. got information from stackoverflow
//       this.saleHr[i] = this.saleHr[i].toFixed(0);
//     } 
//     console.log(this.saleHr);
//     return this.saleHr;
//   },
//   saleTotal: function (total, num){
//     return total + num;
//   },
//   render: function(){},
// };

// customers2.randomizer();
// customers2.hourRandomizer();
// customers2.saleCalc();
// // customers.saleHr.reduce(saleTotal());
// var ulEl = document.getElementById("storeStats2");

// for (var i = 0; i < hours.length; i++){
//   // create the <li> element
//   var liEl = document.createElement('li');
//   //element content
//   liEl.textContent = (hours[i] + ' = ' + customers2.saleHr[i] + ' cookies.');
//   // put in DOM
//   ulEl.appendChild(liEl);
// };
// console.log(customers2.saleHr);
// liEl = document.createElement('li');
// liEl.textContent = customers2.saleHr.reduce( (total, num)=> total + num );
// ulEl.appendChild(liEl);

// // Seattle Center
// var customers3 = {
//   store: 'Seattle Center',
//   minCustHr: 11,
//   maxCustHr: 38,
//   customerHr: [],
//   avgCookieHr: 3.7,
//   saleHr: [],
//   // Picks a random number between min and max
//   randomizer: function(){
//     // line from MDN Math.random docs
//     var min = Math.ceil(this.minCustHr);
//     var max = Math.floor(this.maxCustHr);
//     return Math.floor(Math.random()*(max - min + 1)) + min;
//   },
//   // Inputs random number into the Array at the given index
//   hourRandomizer: function(){
//     for (let i = 0; i < hours.length; i++){
//       this.customerHr.push(this.randomizer());
//     }
//     return this.customerHr;
//   },
//   // Calculates the number of cookies sold per hour based on the number of customers at given index
//   saleCalc: function(){
//     for (let i = 0; i < hours.length; i++){
//       this.saleHr.push(this.avgCookieHr * this.customerHr[i]);
//       // rounding the decimal. got information from stackoverflow
//       this.saleHr[i] = this.saleHr[i].toFixed(0);
//     } 
//     console.log(this.saleHr);
//     return this.saleHr;
//   },
//   saleTotal: function (total, num){
//     return total + num;
//   },
// };

// customers3.randomizer();
// customers3.hourRandomizer();
// customers3.saleCalc();
// // customers.saleHr.reduce(saleTotal());
// var ulEl = document.getElementById("storeStats3");

// for (var i = 0; i < hours.length; i++){
//   // create the <li> element
//   var liEl = document.createElement('li');
//   //element content
//   liEl.textContent = (hours[i] + ' = ' + customers3.saleHr[i] + ' cookies.');
//   // put in DOM
//   ulEl.appendChild(liEl);
// };
// console.log(customers3.saleHr);
// liEl = document.createElement('li');
// liEl.textContent = customers3.saleHr.reduce( (total, num)=> total + num );
// ulEl.appendChild(liEl);

// // Capitol Hill
// var customers4 = {
//   store: 'Capitol Hill',
//   minCustHr: 20,
//   maxCustHr: 38,
//   customerHr: [],
//   avgCookieHr: 2.3,
//   saleHr: [],
//   // Picks a random number between min and max
//   randomizer: function(){
//     // line from MDN Math.random docs
//     var min = Math.ceil(this.minCustHr);
//     var max = Math.floor(this.maxCustHr);
//     return Math.floor(Math.random()*(max - min + 1)) + min;
//   },
//   // Inputs random number into the Array at the given index
//   hourRandomizer: function(){
//     for (let i = 0; i < hours.length; i++){
//       this.customerHr.push(this.randomizer());
//     }
//     return this.customerHr;
//   },
//   // Calculates the number of cookies sold per hour based on the number of customers at given index
//   saleCalc: function(){
//     for (let i = 0; i < hours.length; i++){
//       this.saleHr.push(this.avgCookieHr * this.customerHr[i]);
//       // rounding the decimal. got information from stackoverflow
//       this.saleHr[i] = this.saleHr[i].toFixed(0);
//     } 
//     console.log(this.saleHr);
//     return this.saleHr;
//   },
//   saleTotal: function (total, num){
//     return total + num;
//   },
// };

// customers4.randomizer();
// customers4.hourRandomizer();
// customers4.saleCalc();
// // customers.saleHr.reduce(saleTotal());
// var ulEl = document.getElementById("storeStats4");

// for (var i = 0; i < hours.length; i++){
//   // create the <li> element
//   var liEl = document.createElement('li');
//   //element content
//   liEl.textContent = (hours[i] + ' = ' + customers4.saleHr[i] + ' cookies.');
//   // put in DOM
//   ulEl.appendChild(liEl);
// };
// console.log(customers4.saleHr);
// liEl = document.createElement('li');
// liEl.textContent = customers4.saleHr.reduce( (total, num)=> total + num );
// ulEl.appendChild(liEl);
 
// // Alki
// var customers5 = {
//   store: 'Alki',
//   minCustHr: 2,
//   maxCustHr: 16,
//   customerHr: [],
//   avgCookieHr: 4.6,
//   saleHr: [],
//   // Picks a random number between min and max
//   randomizer: function(){
//     // line from MDN Math.random docs
//     var min = Math.ceil(this.minCustHr);
//     var max = Math.floor(this.maxCustHr);
//     return Math.floor(Math.random()*(max - min + 1)) + min;
//   },
//   // Inputs random number into the Array at the given index
//   hourRandomizer: function(){
//     for (let i = 0; i < hours.length; i++){
//       this.customerHr.push(this.randomizer());
//     }
//     return this.customerHr;
//   },
//   // Calculates the number of cookies sold per hour based on the number of customers at given index
//   saleCalc: function(){
//     for (let i = 0; i < hours.length; i++){
//       this.saleHr.push(this.avgCookieHr * this.customerHr[i]);
//       // rounding the decimal. got information from stackoverflow
//       this.saleHr[i] = this.saleHr[i].toFixed(0);
//     } 
//     console.log(this.saleHr);
//     return this.saleHr;
//   },
//   saleTotal: function (total, num){
//     return total + num;
//   },
// };

// customers5.randomizer();
// customers5.hourRandomizer();
// customers5.saleCalc();
// customers.saleHr.reduce(saleTotal());
var ulEl = document.getElementById("storeStats5");

for (var i = 0; i < hours.length; i++){
  // create the <li> element
  var liEl = document.createElement('li');
  //element content
  liEl.textContent = (hours[i] + ' = ' + customers5.saleHr[i] + ' cookies.');
  // put in DOM
  ulEl.appendChild(liEl);
};
console.log(customers5.saleHr);
liEl = document.createElement('li');
liEl.textContent = customers5.saleHr.reduce( (total, num)=> total + num );
ulEl.appendChild(liEl);
