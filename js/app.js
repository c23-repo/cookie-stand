'use strict';

var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
var customers = {
  store: '1st and Pike',
  minCustHr: 23,
  maxCustHr: 65,
  customerHr: [],
  avgCookieHr: 6.3,
  saleHr: [],
  saleTotal: 0,
  // Picks a random number between min and max
  randomizer: function () {
    // line from MDN Math.random docs
    // var min = Math.ceil(this.minCustHr);
    // var max = Math.floor(this.maxCustHr);
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },
  // Inputs random number into the Array at the given index
  hourRandomizer: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customerHr.push(this.randomizer());
    }
    console.log(this.customerHr);
    return this.customerHr;
  },
  // Calculates the number of cookies sold per hour based on the number of customers at given index
  saleCalc: function () {
    for (let i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.customerHr[i] * this.avgCookieHr);
      this.saleHr.push(oneHour);
      // configure the total of the array
      this.saleTotal += oneHour;
    }
    // console.log(this.saleTotal);
  },
  render: function () {
    var ulEl = document.getElementById('storeStats1');
    for (var i = 0; i < hours.length; i++) {
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

customers.hourRandomizer();
customers.saleCalc();
customers.render();

// var ulEl = document.getElementById("storeStats1");



console.log(customers);


// SeaTac Airport

var seaTac = {
  store: 'SeaTac Airport',
  minCustHr: 3,
  maxCustHr: 24,
  customerHr: [],
  avgCookieHr: 1.2,
  saleHr: [],
  saleTotal: 0,
  // Picks a random number between min and max
  randomizer: function () {
    // line from MDN Math.random docs
    // var min = Math.ceil(this.minCustHr);
    // var max = Math.floor(this.maxCustHr);
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },
  // Inputs random number into the Array at the given index
  hourRandomizer: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customerHr.push(this.randomizer());
    }
    console.log(this.customerHr);
    return this.customerHr;
  },
  // Calculates the number of cookies sold per hour based on the number of customers at given index
  saleCalc: function () {
    for (let i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.customerHr[i] * this.avgCookieHr);
      this.saleHr.push(oneHour);
      // configure the total of the array
      this.saleTotal += oneHour;
    }
    // console.log(this.saleTotal);
  },
  render: function () {
    var ulEl = document.getElementById('storeStats2');
    for (var i = 0; i < hours.length; i++) {
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
seaTac.hourRandomizer();
seaTac.saleCalc();
seaTac.render();

// Seattle Center

var seaCenter = {
  store: 'Seattle Center',
  minCustHr: 11,
  maxCustHr: 38,
  customerHr: [],
  avgCookieHr: 3.7,
  saleHr: [],
  saleTotal: 0,
  // Picks a random number between min and max
  randomizer: function () {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },
  // Inputs random number into the Array at the given index
  hourRandomizer: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customerHr.push(this.randomizer());
    }
    console.log(this.customerHr);
    return this.customerHr;
  },
  // Calculates the number of cookies sold per hour based on the number of customers at given index
  saleCalc: function () {
    for (let i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.customerHr[i] * this.avgCookieHr);
      this.saleHr.push(oneHour);
      // configure the total of the array
      this.saleTotal += oneHour;
    }
  },
  render: function () {
    var ulEl = document.getElementById('storeStats3');
    for (var i = 0; i < hours.length; i++) {
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
seaCenter.hourRandomizer();
seaCenter.saleCalc();
seaCenter.render();

// Capitol Hill

var capHill = {
  store: 'Capitol Hill',
  minCustHr: 20,
  maxCustHr: 38,
  customerHr: [],
  avgCookieHr: 2.3,
  saleHr: [],
  saleTotal: 0,
  // Picks a random number between min and max
  randomizer: function () {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },
  // Inputs random number into the Array at the given index
  hourRandomizer: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customerHr.push(this.randomizer());
    }
    console.log(this.customerHr);
    return this.customerHr;
  },
  // Calculates the number of cookies sold per hour based on the number of customers at given index
  saleCalc: function () {
    for (let i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.customerHr[i] * this.avgCookieHr);
      this.saleHr.push(oneHour);
      // configure the total of the array
      this.saleTotal += oneHour;
    }
  },
  render: function () {
    var ulEl = document.getElementById('storeStats4');
    for (var i = 0; i < hours.length; i++) {
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
capHill.hourRandomizer();
capHill.saleCalc();
capHill.render();

// Alki

var alki = {
  store: 'Alki',
  minCustHr: 2,
  maxCustHr: 16,
  customerHr: [],
  avgCookieHr: 4.6,
  saleHr: [],
  saleTotal: 0,
  // Picks a random number between min and max
  randomizer: function () {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },
  // Inputs random number into the Array at the given index
  hourRandomizer: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customerHr.push(this.randomizer());
    }
    console.log(this.customerHr);
    return this.customerHr;
  },
  // Calculates the number of cookies sold per hour based on the number of customers at given index
  saleCalc: function () {
    for (let i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.customerHr[i] * this.avgCookieHr);
      this.saleHr.push(oneHour);
      // configure the total of the array
      this.saleTotal += oneHour;
    }
  },
  render: function () {
    var ulEl = document.getElementById('storeStats5');
    for (var i = 0; i < hours.length; i++) {
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
alki.hourRandomizer();
alki.saleCalc();
alki.render();
