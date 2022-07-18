const FormData = require('form-data');
const fetch = require('node-fetch');
const basePath = process.cwd();
const fs = require("fs");

fs.readdirSync(`${basePath}/build/images`).
forEach(file => {
const formData = new FormData();
const filestream = fs.createReadStream(`${basePath}/build/images/${file}`);
formData.append("file", filestream);

let url = 'https://api.nftport.xyz/v0/files';

let options = {
  method: 'POST',
  headers: {
    Authorization: '11b98445-4527-4669-83c9-94942cbd1c57',
  },
  body: formData
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

})


