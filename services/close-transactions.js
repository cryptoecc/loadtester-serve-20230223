
const { web3 } = require("../configs/configweb3");
const awaitTransactionMined = require("await-transaction-mined");
const TXREQSTATUS_POLL_INTERVAL = 3000;
const TXREQSTATUS_BLOCKCOUNT = 1; // 2 // 4 // 6
let TX_POLL_OPTIONS = {
  interval: TXREQSTATUS_POLL_INTERVAL,
  blocksToWait: TXREQSTATUS_BLOCKCOUNT,
};
const db = require ( '../models')
const LOGGER = console.log
const enqueue_tx_toclose = async ( {txhash } ) => { // , nettype
  awaitTransactionMined
    .awaitTx( web3, txhash, TX_POLL_OPTIONS)
    .then(async (minedtxreceipt) => { LOGGER( `minedtxreceipt` , minedtxreceipt )
			let { status } = minedtxreceipt;
			let respfind = await db['transactions'].findOne ( { raw:true,
				where : { txhash  }
			})
			if ( respfind ) {  //				let 
				await db['transactions'].update ( { status } , {
					where : { id : respfind.id }
				})
			} else { 
			await db['transactions'].create ( 
				{					txhash     
				, status    
//				, txcreator 
	//			, txvalue   
		//		, txreceiver
			//	, timelapse 
				}
			)
			}
		} )
}
module.exports = { enqueue_tx_toclose } 
