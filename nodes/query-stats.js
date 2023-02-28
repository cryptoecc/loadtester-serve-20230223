
const Web3 = require("web3");
const PORTNUM = 8545 // 33947
const infuraurl = `http://13.209.255.10:${PORTNUM}` // 3.39.197.118:8545`

const web3 = new Web3(new Web3.providers.HttpProvider(infuraurl));
const LOGGER = console.log
LOGGER( `http port number:`,PORTNUM )

const db = require ( '../models' )

const getnodes= async _=>{
	let resp = await db[ 'nodes' ].findAll ( {raw : true } )
	return resp	
}
const query_nodes=async _=>{
	let listnodes = await getnodes () 
//  web3.eth.getBlockNumber().then(resp=>{     LOGGER ( `blocknum:`,resp )  });

}

/*

web3.eth.net.getPeerCount().then(resp=>{  LOGGER( `peer count: `,  resp ) })
false && web3.eth.net.peers().then(resp=>{  LOGGER( `peers : `,  resp ) })
web3.eth.getChainId().then(resp=>{    LOGGER( `chain id : `, resp )  })
web3.eth.getBalance ( '0x3bff4c82eec49443c5dacc9c8c373e5de1105431' ).then(resp=>{  LOGGER( 'balance : ' , resp ) })
web3.eth.getTransaction ( '0x9727fc6949bdc77d5bc7b05a31e1841e9f14df004b75fa16bb846d75b4c4061f' ).then(resp=>{   LOGGER( `deploy tx: `, resp ) })
*/
  module.exports = {
//    web3,
    //  netkind,
    // nettype,
  //  NETTYPE,
    // BASE_CURRENCY,
    // STAKE_CURRENCY,
  };


/**
const NETCLASS = "mainnet";
const nettype = "BSC_MAINNET";
  const NETTYPE = "BSC_MAINNET";
  const BASE_CURRENCY = "BNB";
  const STAKE_CURRENCY = "USDT";

*/
