var express = require('express');
var router = express.Router();
const db=require('../models')
const LOGGER=console.log
const { enqueue_tx_toclose } = require('../services/close-transactions') 
const { respok ,  resperr } = require ('../utils/rest')
router.post ( '/' , async (req,res)=>{
	let { txhash , txcreator , txvalue , txreceiver
} = req.body
	LOGGER( req.body )
	if ( txhash ) {}
	else { resperr ( res, 'ARG-MISSING(txhash)')  ; return }
	txhash = txhash.replace ( / /g , '' )
	txhash = txhash.replace ( /\t/g , '' )
	txhash = txhash.replace ( /\r/g , '' )

	if ( txhash?.length >= 64 ) {}
	else { resperr ( res , 'INVALID-TXHASH' ) ; return }
	let resp = await db[ 'transactions'].findOne (    { raw : true , where : { txhash } } )	
	if ( resp ){ resperr ( res , 'DUP-DATA' ) ; return }
	resp = await db['transactions'].create ( {
		txhash     
//	, status    
, txcreator 
, txvalue   
, txreceiver }
// , timelapse          
	 )
respok ( res )
	true && enqueue_tx_toclose ( { txhash } )
	} )	
/** txhash     | varchar(80)         | YES  |     | NULL                |                               |
, status     | tinyint(4)          | YES  |     | NULL                |                               |
, txcreator  | varchar(80)         | YES  |     | NULL                |                               |
, txvalue    | varchar(20)         | YES  |     | NULL                |                               |
, txreceiver | varchar(80)         | YES  |     | NULL                |                               |
, timelapse  |
*/
module.exports = router;
