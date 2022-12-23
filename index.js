const express = require('express');
const sdk = require('api')('@yelp-developers/v1.0#2hsur2ylbank95o');
const app = express();

app.get('/', (req, res) => {
    console.log('get /')
    res.send('Hello World!')
})


sdk.v3_business_search({sort_by: 'best_match', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

app.listen(3000)
console.log('app running')