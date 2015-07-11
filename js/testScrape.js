/*var request = require("request");
var cheerio = require("cheerio");

items = ["1", "2", "3", "4", "5", "6"];

for (item in items) {
  var url = "http://csgo.steamanalyst.com/id/" + items[item];
  request(url, ( function(items) {
    return function(err, resp, body) {
      if (err)
        throw err;
      $ = cheerio.load(body);
      console.log(item);
    }
  })(item));
}
*/

var request = require("request");
var cheerio = require("cheerio");

var index = Math.floor(Math.random() * (100 - 1) + 1); //(Max number - min number) + min number
var url = 'http://csgo.exchange/prices/';

request(url, function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);

    var a = $("cItem").eq(index);
    console.log(a.text());
  }
});
