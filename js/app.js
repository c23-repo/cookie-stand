'use strict';

var hours = ['0600 hrs', '0700 hrs', '0800 hrs', '0900 hrs', '1000 hrs', '1100 hrs', '1200 hrs', '1300 hrs', '1400 hrs', '1500 hrs', '1600 hrs', '1700 hrs', '1800 hrs', '1900 hrs', '2000 hrs'];
var allCustomers = [];

function Customers (storeName, minimumCustomer, maximumCustomer, cookieAvgPerHour){
  this.store = storeName;
  this.minCustHr = minimumCustomer;
  this.maxCustHr = maximumCustomer;
  this.customerHr = [];
  this.avgCookieHr = cookieAvgPerHour;
  this.saleHr = [];
  this.saleTotal = 0;
  allCustomers.push(this);
}

new Customers('1st and Pike', 23, 65, 6.3);
new Customers('SeaTac Airport', 3, 24, 1.2);
new Customers('Seattle Center', 11, 38, 3.7);
new Customers('Capitol Hill', 20, 38, 2.3);
new Customers('Alki', 2, 16, 4.6);


// Picks a random number between min and max
Customers.prototype.randomizer = function() {
  // line from MDN Math.random docs
  return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
}

// Inputs random number of customers into the Array at the given index
Customers.prototype.hourRandomizer = function() {
  for (let i = 0; i < hours.length; i++) {
    this.customerHr.push(this.randomizer(this.minCustHr, this.maxCustHr));
  }
}

// Calculates the number of cookies sold per hour based on the number of customers at given index. configured in class following the step of instructor Sam Hamm
Customers.prototype.saleCalc= function() {
  for (let i = 0; i < hours.length; i++) {
    var oneHour = Math.ceil(this.customerHr[i] * this.avgCookieHr);
    this.saleHr.push(oneHour);
    // configure the total of the array
    this.saleTotal += oneHour;
  }
  console.log(this.saleTotal);
}
var storeStatsTable = document.getElementById('storeStats');

Customers.prototype.render = function() {
  var trEl = document.createElement('tr');
  // store location
  var tdEl = document.createElement('td');
  tdEl.textContent = this.store;
  trEl.appendChild(tdEl);

  for (var i = 0; i < hours.length; i++) {
  // cookies sold content
  tdEl = document.createElement('td');
  tdEl.textContent = this.saleHr[i];
  trEl.appendChild(tdEl);
  }
  // store total of cookies sold 
 tdEl = document.createElement('td');
 tdEl.textContent = this.saleTotal;
 trEl.appendChild(tdEl);
//  projected cookies to keep on reserves
 tdEl = document.createElement('td');
 tdEl.textContent = cookieReserve[i];
 trEl.appendChild(tdEl);
 storeStatsTable.appendChild(trEl);
};
// Sums the total cookies for each store at a given hour
var totalSalesPerHr = [];
function salesPerHr() {
  for (let i = 0; i < allCustomers.length; i++) {
    totalSalesPerHr.push(allCustomers[i].saleHr);
  }
  console.log(totalSalesPerHr);
  // The following line of code was from https://stackoverflow.com/questions/34458132/how-to-sum-elements-at-the-same-index-in-array-of-arrays-into-a-single-array
  totalSalesPerHr = totalSalesPerHr.reduce((r, a) => a.map((b, i)=>(r[i] || 0) + b), []);
  console.log(totalSalesPerHr);
}
// gets the avg number of cookies sold per hour, by location, then adds to the total for a projected cookies reserve dependant on customer traffic
var cookieReserve = []
function reserve(){
  for (let i = 0; i < allCustomers.length; i++){
    cookieReserve.push(Math.ceil((allCustomers[i].saleTotal / hours.length) + allCustomers[i].saleTotal))
  }
  console.log(cookieReserve);
}
// store selector
function selector(){
  for (let i = 0; i < allCustomers.length; i++){
    allCustomers[i].hourRandomizer();
    allCustomers[i].saleCalc();
    allCustomers[i].render();
  };
}
selector(); //selects each store and runs all the functios
salesPerHr(); //selects each index of all the sales array to get sale for the hour 
reserve();