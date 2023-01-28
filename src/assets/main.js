const fetch = require('node-fetch');
//import fetch from 'node-fetch';

const url = 'https://bb-finance.p.rapidapi.com/stories/list?id=usdjpy&template=CURRENCY';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c4866fe6bbmsh8d2e2d9e128adfbp1b0cd9jsn6fb25d9037c6',
    'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));
