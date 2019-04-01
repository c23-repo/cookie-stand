var hours = [0600, 0700, 0800, 0900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000];
var cutomers = {
  store: '1st and Pike',
  minCustHr: 23,
  maxCustHr: 65,
  customerHr: [],
  avgCookieHr: 6.3,
  saleHr: [],
  custRandomizer: function(min, max){
    var min = Math.ceil(this.minCustHr);
    var max = Math.floor(this.maxCustHr);
    return Math.floor(Math.random()*(max - min + 1)) + min;
  }
  
};
cutomers.custRandomizer();

console.log(cutomers.custRandomizer());