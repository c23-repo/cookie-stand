'use strict';

var newStore = document.getElementById('newStore');

var hours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];
var allCustomers = [];

function Customers(storeName, minimumCustomer, maximumCustomer, cookieAvgPerHour) {
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
Customers.prototype.randomizer = function () {
  // line from MDN Math.random docs
  return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
};

// Inputs random number of customers into the Array at the given index
Customers.prototype.hourRandomizer = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customerHr.push(this.randomizer(this.minCustHr, this.maxCustHr));
  }
};

// Calculates the number of cookies sold per hour based on the number of customers at given index. configured in class following the step of instructor Sam Hamm
Customers.prototype.saleCalc = function () {
  for (let i = 0; i < hours.length; i++) {
    var oneHour = Math.ceil(this.customerHr[i] * this.avgCookieHr);
    this.saleHr.push(oneHour);
    // configure the total of the array
    this.saleTotal += oneHour;
  }
  console.log(this.saleTotal);
};
var storeStatsTable = document.getElementById('storeStats');



// Sums the total cookies for each store at a given hour
var totalSalesPerHr = [];
var saleAll = 0;
function salesPerHr() {
  for (let i = 0; i < allCustomers.length; i++) {
    totalSalesPerHr.push(allCustomers[i].saleHr);
  }
  console.log(totalSalesPerHr);
  // The following line of code was from https://stackoverflow.com/questions/34458132/how-to-sum-elements-at-the-same-index-in-array-of-arrays-into-a-single-array
  totalSalesPerHr = totalSalesPerHr.reduce((r, a) => a.map((b, i) => (r[i] || 0) + b), []);
  console.log(totalSalesPerHr);
  for (let a = 0; a < totalSalesPerHr.length; a++) {
    saleAll += totalSalesPerHr[a];
  }
}

// gets the avg number of cookies sold per hour, by location, then adds to the total for a projected cookies reserve dependant on customer traffic
var cookieReserve = [];
function reserve() {
  for (let i = 0; i < allCustomers.length; i++) {
    cookieReserve.push(Math.ceil((allCustomers[i].saleTotal / hours.length) + allCustomers[i].saleTotal));
  }
  //  projected cookies to keep on reserves
  // var trEl = document.createElement('tr');
  // var tdEl = document.createElement('td');
  // tdEl = document.createElement('td');
  // tdEl.textContent = cookieReserve;
  // trEl.appendChild(tdEl);
  // storeStatsTable.appendChild(trEl);
  console.log(cookieReserve);
}

Customers.prototype.render = function () {
  let trEl = document.createElement('tr');
  // store location
  let tdEl = document.createElement('td');
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
  storeStatsTable.appendChild(trEl);
};

function headerRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location & Hours';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
  storeStatsTable.appendChild(trEl);
}

function footerRow() {
  var trEl = document.createElement('tr');
  var tfEl = document.createElement('td');
  tfEl.textContent = 'Total All Locations';
  trEl.appendChild(tfEl);
  for (var i = 0; i < totalSalesPerHr.length; i++) {
    tfEl = document.createElement('td');
    tfEl.textContent = totalSalesPerHr[i];
    trEl.appendChild(tfEl);
  }
  tfEl = document.createElement('td');
  tfEl.textContent = saleAll;
  trEl.appendChild(tfEl);
  storeStatsTable.appendChild(trEl);
}

// store selector
function selector() {
  for (let i = 0; i < allCustomers.length; i++) {
    allCustomers[i].hourRandomizer();
    allCustomers[i].saleCalc();
    allCustomers[i].render();
  }
}
function newStoreAdditions(event){
  event.preventDefault();

  var shop = event.target.storeName.value;
  var min = parseInt(event.target.minimumCustomer.value);
  var max = parseInt(event.target.maximumCustomer.value);
  var avg = parseFloat(event.target.cookieAvgPerHour.value);
  console.log(shop);
  console.log(typeof min);
  console.log(typeof max);
  console.log(typeof avg);

  var newCustomers = new Customers(shop, min, max, avg);

  newCustomers.hourRandomizer();
  newCustomers.saleCalc();
  storeStatsTable.textContent= '';
  headerRow();
  for (let i = 0; i < allCustomers.length; i++) {
    allCustomers[i].render();
  }
  totalSalesPerHr= [];
  saleAll= 0;
  salesPerHr();
  footerRow();
}

newStore.addEventListener('submit', newStoreAdditions);


headerRow();
console.log('headerRow');
selector(); //selects each store and runs all the functios
salesPerHr(); //selects each index of all the sales array to get sale for the hour
reserve();
footerRow();

