const https = require('https');

function get(callback) {
    https.get(`https://api.coindesk.com/v1/bpi/currentprice/USD.json`, (res) => {
        res.on('data', (d) => {
          console.log('RAW JSON: ' + d);
          const data = JSON.parse(d);
          console.log('The current price of Bitcoin is ' + data.bpi.USD.rate);
          return callback(null, data.bpi.USD.rate);
        });

      }).on('error', (e) => {
        console.error(e);
        return callback(e);
      });
}

module.exports.get = get;

