const { spec, request } = require('pactum');
require('should');

describe('Emissions API Tests', function () {

  this.timeout(50000);

  let response;
  let productsList;
  let randomProduct;
  let startDate;
  let endDate;

  // Function to extract date from timestamp
  function getFormattedDate (timeStamp) { 
    const date = new Date(timeStamp);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${date.getFullYear()}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
  }

  // getting product list
  before(async function () {
    request.setDefaultTimeout(50000);
    response = await spec().get('https://api.v2.emissions-api.org/api/v2/products.json');
    productsList = response.body.map(item => item.name);
  });

  it('should be able to get statistics data range', async () => {
    request.setDefaultTimeout(50000);
    const randomIndex = Math.floor(Math.random() * productsList.length);
    randomProduct = productsList[randomIndex];
    
    // getting data range of random product
    response = await spec().get(`https://api.v2.emissions-api.org/api/v2/${randomProduct}/data-range.json`);
    (response.statusCode).should.be.eql(200);
    startDate = getFormattedDate(response.body.first);
    endDate = getFormattedDate(response.body.last);
  });

  it('should verify all value object properties are numbers', async () => {
    request.setDefaultTimeout(50000);

    //getting statistics and asserting values are numbers
    response = await spec()
    .get(`https://api.v2.emissions-api.org/api/v2/${randomProduct}/statistics.json`)
    .withQueryParams('offset', '0')
    .withQueryParams('begin', startDate)
    .withQueryParams('end', endDate)
    .withQueryParams('limit', '100');
    (response.statusCode).should.be.eql(200);
    for (const stat of response.body) {
      for (const key in stat.value) {
        (Number.isNaN(stat.value[key])).should.be.false;
      }
    }
  });
});