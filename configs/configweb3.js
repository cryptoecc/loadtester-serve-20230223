
const Web3 = require("web3");
const infuraurl = 'https://rpc.lvscan.io' // https://lvscan.io'
let web3 = new Web3(new Web3.providers.HttpProvider(infuraurl));

module.exports = { web3};


